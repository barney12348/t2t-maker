// Mock Data for Prototype - Simulates the AI response
const MOCK_AI_RESPONSE = {
    "detected_item": "Empty Glass Wine Bottle",
    "ideas": [
      {
        "id": 1,
        "type": "Easy Start",
        "title": "Minimalist Single-Stem Vase",
        "description": "Transform that bottle into a chic vase by removing the label and wrapping the neck with twine for a rustic touch.",
        "difficulty": "Easy",
        "required_tools": ["Warm Water", "Scrubbing Sponge", "Jute Twine", "Scissors", "Clear Glue"]
      },
      {
        "id": 2,
        "type": "Aesthetic Decor",
        "title": "Fairy Light Lantern",
        "description": "Create a magical ambiance by stuffing the bottle with battery-operated copper wire fairy lights. perfect for nightstands.",
        "difficulty": "Medium",
        "required_tools": ["Fairy Lights (Battery Op)", "Glass Paint (Optional)", "Cork Stopper"]
      },
      {
        "id": 3,
        "type": "Functional Use",
        "title": "Self-Watering Planter",
        "description": "Cut the bottle in half to create a self-watering system for your herbs. The top holds the soil, inverted into the water-filled base.",
        "difficulty": "Hard",
        "required_tools": ["Glass Cutter", "Sandpaper", "Potting Soil", "Cotton String", "Herb Seedling"]
      }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const uploadBtn = document.getElementById('upload-btn');
    const imagePreview = document.getElementById('image-preview');
    const previewContainer = document.getElementById('preview-container');
    const removeImageBtn = document.getElementById('remove-image');
    const analyzeBtn = document.getElementById('analyze-btn');
    const loadingOverlay = document.getElementById('loading-overlay');
    const resultsSection = document.getElementById('results-section');
    const ideasContainer = document.getElementById('ideas-container');
    const detectedItemName = document.getElementById('detected-item-name');
    
    // Saved Ideas Elements
    const savedSection = document.getElementById('saved-section');
    const savedContainer = document.getElementById('saved-container');
    const emptySavedState = document.getElementById('empty-saved-state');
    const navSaved = document.getElementById('nav-saved');
    const navHome = document.getElementById('nav-home');
    const btnStartSaving = document.getElementById('btn-start-saving');
    
    // Section Visibility Logic
    const sections = {
        home: [document.getElementById('hero-section'), document.getElementById('upload-section')],
        saved: [savedSection]
    };

    function showSection(sectionName) {
        // Hide all major sections
        Object.values(sections).flat().forEach(el => el.classList.add('hidden'));
        resultsSection.classList.add('hidden'); // Results are part of home flow but handled dynamically
        
        // Show target section
        if (sections[sectionName]) {
            sections[sectionName].forEach(el => el.classList.remove('hidden'));
        }

        if (sectionName === 'saved') {
            renderSavedIdeas();
        }
    }

    // Navigation Events
    navSaved.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('saved');
    });

    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('home');
        // Restore results if they were there
        if (detectedItemName.textContent !== '...') {
             resultsSection.classList.remove('hidden');
        }
    });

    btnStartSaving.addEventListener('click', () => {
        showSection('home');
    });


    // Drag and Drop Events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        dropZone.classList.add('drag-over');
    }

    function unhighlight() {
        dropZone.classList.remove('drag-over');
    }

    dropZone.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    // Click to Upload
    uploadBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent bubbling to dropZone click if nested
        fileInput.click();
    });
    
    // Also make the whole box clickable if empty
    dropZone.addEventListener('click', () => {
        if(previewContainer.classList.contains('hidden')) {
            fileInput.click();
        }
    });

    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                previewFile(file);
            } else {
                alert('Please upload an image file.');
            }
        }
    }

    function previewFile(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            imagePreview.src = reader.result;
            previewContainer.classList.remove('hidden');
            analyzeBtn.classList.remove('hidden');
            analyzeBtn.disabled = false;
        }
    }

    // Remove Image
    removeImageBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering dropZone click
        imagePreview.src = '';
        previewContainer.classList.add('hidden');
        analyzeBtn.classList.add('hidden');
        analyzeBtn.disabled = true;
        fileInput.value = ''; // Reset input
        resultsSection.classList.add('hidden');
    });

    // Generate Ideas (Mock AI Call)
    analyzeBtn.addEventListener('click', async () => {
        showLoading(true);
        
        // Simulate network delay
        setTimeout(() => {
            renderResults(MOCK_AI_RESPONSE);
            showLoading(false);
            
            // Scroll to results
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 2000);
    });

    function showLoading(show) {
        if (show) {
            loadingOverlay.classList.remove('hidden');
        } else {
            loadingOverlay.classList.add('hidden');
        }
    }

    // --- Saved Ideas Logic ---
    function getSavedIdeas() {
        const saved = localStorage.getItem('savedIdeas');
        return saved ? JSON.parse(saved) : [];
    }

    function toggleSave(idea) {
        const savedIdeas = getSavedIdeas();
        const index = savedIdeas.findIndex(item => item.id === idea.id && item.title === idea.title);
        
        if (index > -1) {
            // Already saved, remove it
            savedIdeas.splice(index, 1);
        } else {
            // Not saved, add it
            savedIdeas.push(idea);
        }
        
        localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
        return index === -1; // Returns true if added (saved), false if removed
    }

    function isSaved(idea) {
        const savedIdeas = getSavedIdeas();
        return savedIdeas.some(item => item.id === idea.id && item.title === idea.title);
    }

    function createCardHTML(idea, saved) {
        const diffClass = idea.difficulty.toLowerCase();
        const heartIcon = saved ? '❤️' : '🤍';
        const btnClass = saved ? 'btn-save saved' : 'btn-save';
        
        return `
            <div class="card-header">
                <span class="card-type">${idea.type}</span>
                <h3 class="card-title">${idea.title}</h3>
                <span class="badge ${diffClass}">${idea.difficulty}</span>
            </div>
            <div class="card-body">
                <p class="card-description">${idea.description}</p>
                <div class="tools-section">
                    <h4>You'll need:</h4>
                    <div class="tools-list">
                        ${idea.required_tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="${btnClass}" data-id="${idea.id}" aria-label="Save to favorites">
                    ${heartIcon} <span>${saved ? 'Saved' : 'Save'}</span>
                </button>
            </div>
        `;
    }

    function renderResults(data) {
        detectedItemName.textContent = data.detected_item;
        ideasContainer.innerHTML = ''; // Clear previous

        data.ideas.forEach(idea => {
            const card = document.createElement('article');
            card.className = 'idea-card';
            
            // Check if already saved
            const saved = isSaved(idea);
            card.innerHTML = createCardHTML(idea, saved);
            
            // Add click event to save button
            const saveBtn = card.querySelector('.btn-save');
            saveBtn.addEventListener('click', () => {
                const isNowSaved = toggleSave(idea);
                // Update UI without re-rendering everything
                saveBtn.innerHTML = `${isNowSaved ? '❤️' : '🤍'} <span>${isNowSaved ? 'Saved' : 'Save'}</span>`;
                saveBtn.className = isNowSaved ? 'btn-save saved' : 'btn-save';
            });
            
            ideasContainer.appendChild(card);
        });

        resultsSection.classList.remove('hidden');
    }

    function renderSavedIdeas() {
        const savedIdeas = getSavedIdeas();
        savedContainer.innerHTML = '';

        if (savedIdeas.length === 0) {
            emptySavedState.classList.remove('hidden');
            savedContainer.classList.add('hidden');
            return;
        }

        emptySavedState.classList.add('hidden');
        savedContainer.classList.remove('hidden');

        savedIdeas.forEach(idea => {
            const card = document.createElement('article');
            card.className = 'idea-card';
            // It's definitely saved if it's in this list
            card.innerHTML = createCardHTML(idea, true);
            
            const saveBtn = card.querySelector('.btn-save');
            saveBtn.addEventListener('click', () => {
                toggleSave(idea);
                // In saved view, removing should remove the card immediately
                renderSavedIdeas();
            });

            savedContainer.appendChild(card);
        });
    }
});