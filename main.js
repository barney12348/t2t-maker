// Translations
        share_msg: "Check out this upcycling idea: ",
        share_success: "Link copied to clipboard!",
        nav_comm: "Community",
        comm_title: "Community Gallery ✨",
        comm_desc: "Share your \"Before & After\" transformations with the world!",
        comm_btn_share: "Share Your Project",
        modal_title: "Share Your Project",
        label_name: "Name",
        label_before: "Before Photo",
        label_after: "After Photo",
        label_desc: "Description",
        modal_btn_submit: "Post to Gallery"
    },
    ko: {
        nav_home: "홈",
        nav_how: "사용 방법",
        nav_insp: "영감 얻기",
        nav_saved: "❤️ 내 보관함",
        hero_title: "버리지 말고, 변신시키세요",
        hero_desc: "AI의 힘으로 일상 속 물건들을 창의적이고 지속 가능한 방식으로 재사용하는 방법을 발견하세요.",
        upload_title: "물건 사진 업로드",
        upload_desc: "이미지를 드래그하거나 클릭하여 선택하세요",
        upload_btn: "파일 선택",
        analyze_btn: "✨ 아이디어 생성하기",
        results_title: "업사이클링 아이디어:",
        saved_title: "나의 보관함 ❤️",
        saved_empty: "아직 저장된 아이디어가 없습니다. 물건을 분석하고 아이디어를 모아보세요!",
        saved_btn_find: "아이디어 찾기",
        how_title: "사용 방법",
        how_desc: "Upcycle AI는 고급 이미지 인식을 사용하여 버려진 물건을 식별하고 창의적인 DIY 프로젝트를 제안합니다. 우리의 목표는 일상 물건의 수명을 연장하여 지속 가능성을 촉진하는 것입니다.",
        step1_title: "1. 식별",
        step1_desc: "버리려는 물건(병, 상자, 헌 옷, 가구 등)의 사진을 업로드하세요.",
        step2_title: "2. 브레인스토밍",
        step2_desc: "AI가 재질과 모양을 분석하여 독특하고 실용적이며 심미적인 업사이클링 아이디어를 생성합니다.",
        step3_title: "3. 제작",
        step3_desc: "도구 목록과 난이도가 포함된 간단한 가이드를 따라 새로운 물건을 만들어보세요.",
        gallery_title: "영감 갤러리",
        gallery_desc: "가능성을 확인해보세요. 커뮤니티에서 생성된 인기 프로젝트들입니다.",
        gal1_title: "와인병 램프",
        gal1_desc: "빈 유리병에 페어리 라이트나 램프 키트를 넣어 우아한 테이블 램프로 변신시키세요.",
        gal2_title: "청바지 토트백",
        gal2_desc: "헌 청바지를 튼튼하고 스타일리시한 장바구니용 토트백으로 리폼해보세요.",
        gal3_title: "통조림 캔 화분",
        gal3_desc: "통조림 캔을 씻어 밝은 색으로 칠하고 주방용 허브를 키우는 화분으로 사용하세요.",
        gal4_title: "사다리 책장",
        gal4_desc: "오래된 나무 사다리를 벽에 수평으로 설치하여 소박하고 공간 절약형인 책장을 만드세요.",
        loading_text: "잠재력을 분석하는 중...",
        footer_text: "&copy; 2026 Upcycle AI. 지속 가능한 생활을 위한 작은 실천.",
        tools_label: "준비물:",
        save_btn: "저장",
        saved_btn: "저장됨",
        share_btn: "공유",
        share_msg: "이 업사이클링 아이디어 확인해보세요: ",
        share_success: "링크가 복사되었습니다!",
        nav_comm: "커뮤니티",
        comm_title: "커뮤니티 갤러리 ✨",
        comm_desc: "여러분의 놀라운 \"Before & After\" 변신을 세상에 공유하세요!",
        comm_btn_share: "작품 공유하기",
        modal_title: "작품 공유하기",
        label_name: "이름",
        label_before: "변신 전 (Before)",
        label_after: "변신 후 (After)",
        label_desc: "설명",
        modal_btn_submit: "갤러리에 올리기"
    }
};

// Mock Community Data
const MOCK_COMMUNITY = [
    {
        id: 1,
        user: "GreenLife",
        before: "https://images.unsplash.com/photo-1591017403986-ed818453c11d?auto=format&fit=crop&q=80&w=200",
        after: "https://images.unsplash.com/photo-1581781870027-04212e231e96?auto=format&fit=crop&q=80&w=200",
        desc: "Old wine bottles turned into aesthetic plant propagators. Simple and beautiful!",
        likes: 24,
        liked: false
    },
    {
        id: 2,
        user: "DIY_King",
        before: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200",
        after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=200",
        desc: "Repurposed a wooden pallet into a vertical garden for my small balcony.",
        likes: 56,
        liked: true
    }
];

// Mock Data
const MOCK_DATA = {
    en: {
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
    },
    ko: {
        "detected_item": "빈 와인 유리병",
        "ideas": [
            {
                "id": 1,
                "type": "쉬운 시작",
                "title": "미니멀 한송이 화병",
                "description": "라벨을 제거하고 병목을 마끈으로 감싸 소박한 느낌을 주는 시크한 화병으로 변신시키세요.",
                "difficulty": "쉬움",
                "required_tools": ["따뜻한 물", "수세미", "마끈", "가위", "투명 풀"]
            },
            {
                "id": 2,
                "type": "감성 데코",
                "title": "무드등 랜턴",
                "description": "배터리로 작동하는 코퍼 와이어 조명을 병 안에 넣어 마법 같은 분위기를 연출하세요. 침대 협탁에 완벽합니다.",
                "difficulty": "보통",
                "required_tools": ["페어리 라이트 (건전지식)", "유리 물감 (선택)", "코르크 마개"]
            },
            {
                "id": 3,
                "type": "실용적 활용",
                "title": "자동 급수 화분",
                "description": "병을 반으로 잘라 허브를 위한 자동 급수 시스템을 만드세요. 윗부분에는 흙을 담고, 물이 담긴 아랫부분에 거꾸로 꽂습니다.",
                "difficulty": "어려움",
                "required_tools": ["유리 절단기", "사포", "분갈이 흙", "면 끈", "허브 모종"]
            }
        ]
    }
};

let currentLang = 'en'; // Default

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
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
    const navCommunity = document.getElementById('nav-community');
    const btnStartSaving = document.getElementById('btn-start-saving');
    
    // Community Elements
    const communitySection = document.getElementById('community-section');
    const communityContainer = document.getElementById('community-container');
    const btnOpenShareModal = document.getElementById('btn-open-share-modal');
    const shareModal = document.getElementById('share-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const shareForm = document.getElementById('share-form');

    // Language Elements
    const btnLang = document.getElementById('btn-lang');

    // --- Language Logic ---
    function setLanguage(lang) {
        if (!TRANSLATIONS[lang]) lang = 'en'; // Safety fallback
        currentLang = lang;
        localStorage.setItem('preferredLang', lang);
        
        // Update Document Attributes for CSS Switching
        document.documentElement.setAttribute('data-lang', lang);
        document.documentElement.lang = lang;
        
        // Update Button Text
        btnLang.textContent = lang === 'en' ? '🇰🇷 KO' : '🇺🇸 EN';

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
                if (key === 'footer_text') {
                     el.innerHTML = TRANSLATIONS[lang][key];
                } else {
                    el.textContent = TRANSLATIONS[lang][key];
                }
            }
        });

        // Re-render dynamic content if visible
        if (!resultsSection.classList.contains('hidden')) {
             renderResults(MOCK_DATA[lang]);
        }
        
        if (!savedSection.classList.contains('hidden')) {
            renderSavedIdeas();
        }

        if (!communitySection.classList.contains('hidden')) {
            renderCommunity();
        }
    }

    // Initialize Language
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        const browserLang = navigator.language.startsWith('ko') ? 'ko' : 'en';
        setLanguage(browserLang);
    }

    // Toggle Language
    btnLang.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ko' : 'en';
        setLanguage(newLang);
    });


    // --- Section Visibility Logic ---
    const sections = {
        home: [document.getElementById('hero-section'), document.getElementById('upload-section')],
        saved: [savedSection],
        community: [communitySection]
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

        if (sectionName === 'community') {
            renderCommunity();
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
        if (detectedItemName.textContent !== '...') {
             resultsSection.classList.remove('hidden');
        }
    });

    navCommunity.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('community');
    });

    btnStartSaving.addEventListener('click', () => {
        showSection('home');
    });

    // --- Community Logic ---
    function renderCommunity() {
        communityContainer.innerHTML = '';
        const t = TRANSLATIONS[currentLang]; // Get current translations

        MOCK_COMMUNITY.forEach(post => {
            const card = document.createElement('div');
            card.className = 'comm-card';
            
            // Use translated labels for Before/After
            // We can infer these from the keys or add new keys. 
            // Existing keys: label_before, label_after (used in modal). 
            // Let's use generic terms or reuse those.
            // label_before is "Before Photo" / "변신 전 (Before)". A bit long for a badge.
            // Let's make short labels map.
            const labels = {
                en: { before: "Before", after: "After", time: "Just now" },
                ko: { before: "전", after: "후", time: "방금 전" }
            };
            const lbl = labels[currentLang];

            card.innerHTML = `
                <div class="comm-images">
                    <div class="comm-img-box">
                        <img src="${post.before}" alt="Before">
                        <span class="img-label">${lbl.before}</span>
                    </div>
                    <div class="comm-img-box">
                        <img src="${post.after}" alt="After">
                        <span class="img-label">${lbl.after}</span>
                    </div>
                </div>
                <div class="comm-body">
                    <p class="comm-user">@${post.user}</p>
                    <p class="comm-desc">${post.desc}</p>
                </div>
                <div class="comm-footer">
                    <button class="btn-like ${post.liked ? 'active' : ''}" data-id="${post.id}">
                        ${post.liked ? '❤️' : '🤍'} <span>${post.likes}</span>
                    </button>
                    <small style="color: #94a3b8;">${lbl.time}</small>
                </div>
            `;

            const likeBtn = card.querySelector('.btn-like');
            likeBtn.addEventListener('click', () => {
                post.liked = !post.liked;
                post.likes += post.liked ? 1 : -1;
                renderCommunity();
            });

            communityContainer.appendChild(card);
        });
    }

    // Modal Logic
    btnOpenShareModal.addEventListener('click', () => {
        shareModal.classList.remove('hidden');
    });

    btnCloseModal.addEventListener('click', () => {
        shareModal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            shareModal.classList.add('hidden');
        }
    });

    shareForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newUser = document.getElementById('post-user').value;
        const newDesc = document.getElementById('post-desc').value;
        
        // In a real app, we'd handle file uploads here. 
        // For mock, we'll use placeholders.
        const newPost = {
            id: MOCK_COMMUNITY.length + 1,
            user: newUser,
            before: "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=200",
            after: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=200",
            desc: newDesc,
            likes: 0,
            liked: false
        };

        MOCK_COMMUNITY.unshift(newPost);
        renderCommunity();
        shareModal.classList.add('hidden');
        shareForm.reset();
    });


    // --- Drag and Drop Events ---
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
            renderResults(MOCK_DATA[currentLang]);
            showLoading(false);
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
            savedIdeas.splice(index, 1);
        } else {
            savedIdeas.push(idea);
        }
        
        localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
        return index === -1; 
    }

    function isSaved(idea) {
        const savedIdeas = getSavedIdeas();
        return savedIdeas.some(item => item.id === idea.id && item.title === idea.title);
    }

    // --- Sharing Logic ---
    async function handleShare(idea) {
        const shareData = {
            title: `Upcycle AI: ${idea.title}`,
            text: `${TRANSLATIONS[currentLang].share_msg} ${idea.title} - ${idea.description}`,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
                alert(TRANSLATIONS[currentLang].share_success);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
    }

    function createCardHTML(idea, saved) {
        let cssClass = 'medium';
        const diffLower = idea.difficulty.toLowerCase();
        if (diffLower.includes('easy') || diffLower.includes('쉬움')) cssClass = 'easy';
        if (diffLower.includes('hard') || diffLower.includes('어려움')) cssClass = 'hard';

        const heartIcon = saved ? '❤️' : '🤍';
        const btnClass = saved ? 'btn-save saved' : 'btn-save';
        
        const saveText = saved ? TRANSLATIONS[currentLang].saved_btn : TRANSLATIONS[currentLang].save_btn;
        const shareText = TRANSLATIONS[currentLang].share_btn;
        const toolsLabel = TRANSLATIONS[currentLang].tools_label;

        return `
            <div class="card-header">
                <span class="card-type">${idea.type}</span>
                <h3 class="card-title">${idea.title}</h3>
                <span class="badge ${cssClass}">${idea.difficulty}</span>
            </div>
            <div class="card-body">
                <p class="card-description">${idea.description}</p>
                <div class="tools-section">
                    <h4>${toolsLabel}</h4>
                    <div class="tools-list">
                        ${idea.required_tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn-share" data-id="${idea.id}" aria-label="Share">
                    🔗 <span>${shareText}</span>
                </button>
                <button class="${btnClass}" data-id="${idea.id}" aria-label="Save to favorites">
                    ${heartIcon} <span>${saveText}</span>
                </button>
            </div>
        `;
    }

    function renderResults(data) {
        detectedItemName.textContent = data.detected_item;
        ideasContainer.innerHTML = ''; 

        data.ideas.forEach(idea => {
            const card = document.createElement('article');
            card.className = 'idea-card';
            
            const saved = isSaved(idea);
            card.innerHTML = createCardHTML(idea, saved);
            
            // Save Button Event
            const saveBtn = card.querySelector('.btn-save');
            saveBtn.addEventListener('click', () => {
                const isNowSaved = toggleSave(idea);
                const newSaveText = isNowSaved ? TRANSLATIONS[currentLang].saved_btn : TRANSLATIONS[currentLang].save_btn;
                saveBtn.innerHTML = `${isNowSaved ? '❤️' : '🤍'} <span>${newSaveText}</span>`;
                saveBtn.className = isNowSaved ? 'btn-save saved' : 'btn-save';
            });

            // Share Button Event
            const shareBtn = card.querySelector('.btn-share');
            shareBtn.addEventListener('click', () => {
                handleShare(idea);
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
            card.innerHTML = createCardHTML(idea, true);
            
            const saveBtn = card.querySelector('.btn-save');
            saveBtn.addEventListener('click', () => {
                toggleSave(idea);
                renderSavedIdeas();
            });

            // Share Button Event for Saved Ideas
            const shareBtn = card.querySelector('.btn-share');
            shareBtn.addEventListener('click', () => {
                handleShare(idea);
            });

            savedContainer.appendChild(card);
        });
    }
});