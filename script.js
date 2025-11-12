// İlan kartı oluşturma fonksiyonu
function createListingCard(type, index, page, viewMode = 'grid') {
    const listings = {
        emlak: {
            titles: [],
            prices: [],
            features: [
                '<i class="fas fa-ruler-combined"></i> {size}m²',
                '<i class="fas fa-bed"></i> {rooms}',
                '<i class="fas fa-building"></i> {floor}.kat'
            ],
            locations: []
        },
        vasita: {
            titles: [],
            prices: [],
            features: [
                '<i class="fas fa-tachometer-alt"></i> {km} KM',
                '<i class="fas fa-gas-pump"></i> {fuel}',
                '<i class="fas fa-cog"></i> {gear}'
            ],
            locations: []
        },
        elektronik: {
            titles: [],
            prices: [],
            features: [
                '<i class="fas fa-microchip"></i> {processor}',
                '<i class="fas fa-memory"></i> {ram}',
                '<i class="fas fa-hdd"></i> {storage}'
            ],
            locations: []
        },
        ev_esyasi: {
            titles: [],
            prices: [],
            features: [
                '<i class="fas fa-box"></i> {condition}',
                '<i class="fas fa-palette"></i> {color}',
                '<i class="fas fa-ruler"></i> {dimension}'
            ],
            locations: []
        }
    };

    const randomize = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const category = listings[type];
    const photoIndex = ((page - 1) * 20) + index;
    
    // Tüm ilanlar için aynı fotoğraf kullanılacak
    const photoUrl = 'listing-photo.png';

    const badges = ['Acil', 'Yeni', 'Öne Çıkan', 'Fırsat', 'Son 24 Saat', 'Pazarlıklı'];
    const hasBadge = Math.random() > 0.5;
    
    // Sahibinden tarzı liste görünümü
    if (viewMode === 'list') {
        return `
            <div class="listing-row-sahibinden">
                <div class="row-image-container">
                    <div class="verde-logo-thin">V</div>
                    ${hasBadge ? `<span class="row-badge-thin ${randomize(badges).toLowerCase()}">${randomize(badges)}</span>` : ''}
                </div>
                
                <div class="row-content-main">
                    <div class="row-title-section">
                        <h3 class="row-title-main">${randomize(category.titles)}</h3>
                        <div class="row-features-inline">
                            ${category.features.slice(0, 3).map(feature => {
                                let f = feature;
                                switch(type) {
                                    case 'emlak':
                                        f = f.replace('{size}', Math.floor(Math.random() * 150) + 50)
                                             .replace('{rooms}', ['1+1', '2+1', '3+1', '4+1'][Math.floor(Math.random() * 4)])
                                             .replace('{floor}', Math.floor(Math.random() * 20) + 1);
                                        break;
                                    case 'vasita':
                                        f = f.replace('{km}', (Math.floor(Math.random() * 150) + 10) + ',' + (Math.floor(Math.random() * 999)).toString().padStart(3, '0'))
                                             .replace('{fuel}', ['Benzin', 'Dizel', 'Hibrit'][Math.floor(Math.random() * 3)])
                                             .replace('{gear}', ['Otomatik', 'Manuel'][Math.floor(Math.random() * 2)]);
                                        break;
                                    case 'elektronik':
                                        f = f.replace('{processor}', ['i5', 'i7', 'i9', 'Ryzen 5', 'Ryzen 7'][Math.floor(Math.random() * 5)])
                                             .replace('{ram}', ['8GB', '16GB', '32GB'][Math.floor(Math.random() * 3)])
                                             .replace('{storage}', ['256GB', '512GB', '1TB'][Math.floor(Math.random() * 3)]);
                                        break;
                                    case 'ev_esyasi':
                                        f = f.replace('{condition}', ['Sıfır', 'Az Kullanılmış', 'Yeni Gibi'][Math.floor(Math.random() * 3)])
                                             .replace('{color}', ['Beyaz', 'Gri', 'Kahve', 'Siyah'][Math.floor(Math.random() * 4)])
                                             .replace('{dimension}', ['Büyük Boy', 'Orta Boy', 'Kompakt'][Math.floor(Math.random() * 3)]);
                                        break;
                                }
                                return f;
                            }).join(' • ')}
                        </div>
                    </div>
                    
                    <div class="row-location-section">
                        <span class="row-location-text"><i class="fas fa-map-marker-alt"></i> ${randomize(category.locations)}</span>
                        <span class="row-date-text">${Math.floor(Math.random() * 24) + 1} saat önce</span>
                    </div>
                </div>
                
                <div class="row-price-section">
                    <div class="row-price-main">${randomize(category.prices)}</div>
                    <div class="row-actions-thin">
                        <button class="favorite-btn-thin"><i class="fas fa-heart"></i></button>
                        <button class="contact-btn-thin"><i class="fas fa-comment"></i></button>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Grid görünümü (varsayılan)
    return `
        <article class="listing-card">
            <div class="card-header">
                ${hasBadge ? `<span class="listing-badge ${randomize(badges).toLowerCase()}">${randomize(badges)}</span>` : ''}
                <button class="favorite-button"><i class="fas fa-heart"></i></button>
            </div>
            <div class="card-gallery verde-logo">
                <div class="logo-container">
                    <div class="verde-v">V</div>
                </div>
            </div>
            <div class="card-content">
                <div class="price">${randomize(category.prices)}</div>
                <h3 class="title">${randomize(category.titles)}</h3>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${randomize(category.locations)}</p>
                <div class="features">
                    ${category.features.map(feature => {
                        let f = feature;
                        switch(type) {
                            case 'emlak':
                                f = f.replace('{size}', Math.floor(Math.random() * 150) + 50)
                                     .replace('{rooms}', ['1+1', '2+1', '3+1', '4+1'][Math.floor(Math.random() * 4)])
                                     .replace('{floor}', Math.floor(Math.random() * 20) + 1);
                                break;
                            case 'vasita':
                                f = f.replace('{km}', (Math.floor(Math.random() * 150) + 10) + ',' + (Math.floor(Math.random() * 999)).toString().padStart(3, '0'))
                                     .replace('{fuel}', ['Benzin', 'Dizel', 'Hibrit'][Math.floor(Math.random() * 3)])
                                     .replace('{gear}', ['Otomatik', 'Manuel'][Math.floor(Math.random() * 2)]);
                                break;
                            case 'elektronik':
                                f = f.replace('{processor}', ['i5', 'i7', 'i9', 'Ryzen 5', 'Ryzen 7'][Math.floor(Math.random() * 5)])
                                     .replace('{ram}', ['8GB', '16GB', '32GB'][Math.floor(Math.random() * 3)])
                                     .replace('{storage}', ['256GB', '512GB', '1TB'][Math.floor(Math.random() * 3)]);
                                break;
                            case 'ev_esyasi':
                                f = f.replace('{condition}', ['Sıfır', 'Az Kullanılmış', 'Yeni Gibi'][Math.floor(Math.random() * 3)])
                                     .replace('{color}', ['Beyaz', 'Gri', 'Kahve', 'Siyah'][Math.floor(Math.random() * 4)])
                                     .replace('{dimension}', ['Büyük Boy', 'Orta Boy', 'Kompakt'][Math.floor(Math.random() * 3)]);
                                break;
                        }
                        return `<span>${f}</span>`;
                    }).join('')}
                </div>
                <div class="card-footer">
                    <span class="date">${Math.floor(Math.random() * 24) + 1} saat önce</span>
                    <button class="contact-button"><i class="fas fa-comment"></i> Mesaj At</button>
                </div>
            </div>
        </article>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Filtre sistemini başlat
    initializeFilters();
    // Hızlı ilan verme sistemini başlat
    initializeQuickPost();
    // İlan detay sistemini başlat
    initializeAdDetail();
    
    // Tema sistemi
    initializeThemeSystem();
    
    // Koyu tema kontrolü
    function initializeThemeSystem() {
        const themeSwitcher = document.querySelector('.theme-switcher');
        const moonIcon = themeSwitcher.querySelector('i');
        
        function updateThemeIcon(isDark) {
            moonIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }

        if (themeSwitcher) {
            themeSwitcher.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                const isDark = document.body.classList.contains('dark-theme');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                updateThemeIcon(isDark);
            });

            // Sayfa yüklendiğinde tema tercihini kontrol et
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-theme');
                updateThemeIcon(true);
            }
        }
    }

    // İlanları ekle
    const grid = document.querySelector('.listings-grid');
    if (grid) {
        // Başlangıçta grid görünümü
        grid.classList.add('grid-view-verde');
        
        const page = window.location.pathname.includes('sayfa2.html') ? 2 : 1;
        
        // Her sayfada 20 ilan
        const types = ['emlak', 'vasita', 'elektronik', 'ev_esyasi'];
        let html = '';
        
        for(let i = 0; i < 20; i++) {
            const type = types[i % types.length]; // Sırayla farklı kategorilerden
            html += createListingCard(type, i, page);
        }
        
        grid.innerHTML = html;

        // Favori butonlarını aktifleştir
        document.querySelectorAll('.favorite-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                button.classList.toggle('active');
            });
        });

        // Liste/Grid görünümü
        const viewButtons = document.querySelectorAll('.view-button');
        let currentViewMode = 'grid';
        
        viewButtons.forEach(button => {
            button.addEventListener('click', () => {
                viewButtons.forEach(b => b.classList.remove('active'));
                button.classList.add('active');

                if (button.querySelector('.fa-list')) {
                    currentViewMode = 'list';
                    grid.classList.add('list-view-sahibinden');
                    grid.classList.remove('grid-view-verde');
                } else {
                    currentViewMode = 'grid';
                    grid.classList.add('grid-view-verde');
                    grid.classList.remove('list-view-sahibinden');
                }
                
                // İlanları yeniden oluştur
                let html = '';
                for(let i = 0; i < 20; i++) {
                    const type = types[i % types.length];
                    html += createListingCard(type, i, page, currentViewMode);
                }
                grid.innerHTML = html;
                
                // Butonları yeniden aktifleştir
                document.querySelectorAll('.favorite-button, .favorite-btn-thin').forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();
                        button.classList.toggle('active');
                    });
                });
            });
        });
    }

    // ESC tuşu ile modal'ı kapat
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
                const form = modal.querySelector('form');
                if (form) form.reset();
                const imagePreview = modal.querySelector('#imagePreview');
                if (imagePreview) imagePreview.innerHTML = '';
            });
            
            // Notification dropdown'ı da kapat
            const notificationDropdown = document.querySelector('.notification-dropdown');
            if (notificationDropdown) {
                notificationDropdown.classList.remove('active');
            }
        }
    });

    // Header Actions Functionality
    initializeHeaderActions();
});

        // Header Actions İşlevselliği
        function initializeHeaderActions() {
            const notificationBtn = document.getElementById('notificationBtn');
            const notificationDropdown = document.getElementById('notificationDropdown');
            const markAllReadBtn = document.querySelector('.mark-all-read');

            // Notification dropdown toggle
            if (notificationBtn && notificationDropdown) {
                notificationBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    notificationDropdown.classList.toggle('active');
                    
                    // Diğer dropdownları kapat
                    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
                        if (dropdown !== notificationDropdown) {
                            dropdown.classList.remove('active');
                        }
                    });
                });

                // Notification dışına tıklandığında kapat
                document.addEventListener('click', (e) => {
                    if (!notificationBtn.contains(e.target) && !notificationDropdown.contains(e.target)) {
                        notificationDropdown.classList.remove('active');
                    }
                });

                // Tümünü okundu işaretle
                if (markAllReadBtn) {
                    markAllReadBtn.addEventListener('click', () => {
                        const unreadItems = document.querySelectorAll('.notification-item.unread');
                        unreadItems.forEach(item => {
                            item.classList.remove('unread');
                        });
                        
                        // Badge'ı güncelle
                        const badge = notificationBtn.querySelector('.notification-badge');
                        if (badge) {
                            badge.style.display = 'none';
                        }
                        
                        // Dropdown'ı kapat
                        notificationDropdown.classList.remove('active');
                    });
                }

                // Notification itemlere tıklama
                const notificationItems = document.querySelectorAll('.notification-item');
                notificationItems.forEach(item => {
                    item.addEventListener('click', () => {
                        item.classList.remove('unread');
                        
                        // Kalan okunmamış sayısını güncelle
                        const remainingUnread = document.querySelectorAll('.notification-item.unread').length;
                        const badge = notificationBtn.querySelector('.notification-badge');
                        if (badge) {
                            if (remainingUnread > 0) {
                                badge.textContent = remainingUnread;
                            } else {
                                badge.style.display = 'none';
                            }
                        }
                    });
                });
            }

            // Header iconları hover efektleri
            const headerIcons = document.querySelectorAll('.header-icon');
            headerIcons.forEach(icon => {
                icon.addEventListener('mouseenter', () => {
                    icon.style.transform = 'translateY(-2px)';
                });
                
                icon.addEventListener('mouseleave', () => {
                    if (!icon.classList.contains('active')) {
                        icon.style.transform = '';
                    }
                });
            });
        }

        function initializeAdDetail() {
            // Resim galerisi kontrolü
            const thumbs = document.querySelectorAll('.thumb');
            const mainImage = document.querySelector('.main-image img');

            thumbs.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    // Aktif thumbnail'i güncelle
                    thumbs.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');

                    // Ana görseli güncelle
                    const newSrc = thumb.querySelector('img').src;
                    mainImage.src = newSrc;
                });
            });

            // Telefon numarası gösterme
            const showPhoneBtn = document.querySelector('.show-phone');
            if (showPhoneBtn) {
                showPhoneBtn.addEventListener('click', () => {
                    // Gerçek telefon numarası buraya gelecek
                    const phoneNumber = '+90 532 123 45 67';
                    showPhoneBtn.innerHTML = `<i class="fas fa-phone"></i> ${phoneNumber}`;
                });
            }

            // Mesaj gönderme
            const contactSellerBtn = document.querySelector('.contact-seller');
            if (contactSellerBtn) {
                contactSellerBtn.addEventListener('click', () => {
                    // Mesajlaşma modalını aç veya mesajlaşma sayfasına yönlendir
                    alert('Mesajlaşma özelliği çok yakında!');
                });
            }
        }

        function initializeQuickPost() {
            const postAdButton = document.querySelector('.post-ad-button');
            const modal = document.getElementById('postAdModal');
            const closeModal = modal.querySelector('.close-modal');
            const cancelButton = modal.querySelector('.cancel-ad');
            const form = document.getElementById('quickPostForm');
            const imageInput = document.getElementById('adPhotos');
            const imagePreview = document.getElementById('imagePreview');

            // Modal'ı aç/kapa
            postAdButton.addEventListener('click', () => {
                modal.classList.add('active');
            });

            [closeModal, cancelButton].forEach(button => {
                button.addEventListener('click', () => {
                    modal.classList.remove('active');
                    form.reset();
                    imagePreview.innerHTML = '';
                });
            });

            // Modal dışına tıklandığında kapat
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    form.reset();
                    imagePreview.innerHTML = '';
                }
            });

            // Fotoğraf yükleme ve önizleme
            imageInput.addEventListener('change', handleImageUpload);

            // Form gönderimi
            form.addEventListener('submit', handleFormSubmit);
        }

        function handleImageUpload(e) {
            const files = e.target.files;
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = '';

            for (let file of files) {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    const previewItem = document.createElement('div');
                    previewItem.className = 'preview-item';

                    reader.onload = function(e) {
                        previewItem.innerHTML = `
                            <img src="${e.target.result}" alt="Preview">
                            <button type="button" class="remove-image">
                                <i class="fas fa-times"></i>
                            </button>
                        `;
                    
                        // Fotoğraf silme
                        const removeButton = previewItem.querySelector('.remove-image');
                        removeButton.addEventListener('click', () => {
                            previewItem.remove();
                        });
                    }

                    reader.readAsDataURL(file);
                    imagePreview.appendChild(previewItem);
                }
            }
        }

        function handleFormSubmit(e) {
            e.preventDefault();
        
            // Form verilerini topla
            const formData = {
                title: document.getElementById('adTitle').value,
                category: document.getElementById('adCategory').value,
                price: {
                    amount: document.getElementById('adPrice').value,
                    currency: document.getElementById('adCurrency').value
                },
                description: document.getElementById('adDescription').value,
                location: document.getElementById('adLocation').value,
                images: Array.from(document.querySelectorAll('.preview-item img'))
                    .map(img => img.src)
            };

            // TODO: API'ye gönder
            console.log('İlan verileri:', formData);

            // Başarılı mesajı göster ve formu temizle
            alert('İlanınız başarıyla yayınlandı!');
            document.getElementById('postAdModal').classList.remove('active');
            e.target.reset();
            document.getElementById('imagePreview').innerHTML = '';
        }

    function initializeFilters() {
        const filterToggle = document.querySelector('.filter-toggle');
        const advancedFilters = document.querySelector('.advanced-filters');
        const locationSelect = document.querySelector('.location-select');
        const districtSelect = document.querySelector('.district-select');
        const clearFiltersBtn = document.querySelector('.clear-filters');
        const applyFiltersBtn = document.querySelector('.apply-filters');

        // Filtre panelini aç/kapa
        filterToggle.addEventListener('click', () => {
            advancedFilters.classList.toggle('active');
        });

        // Şehir seçildiğinde ilçeleri güncelle
        locationSelect.addEventListener('change', (e) => {
            const city = e.target.value;
            updateDistricts(city);
        });

        // Filtreleri temizle
        clearFiltersBtn.addEventListener('click', () => {
            locationSelect.value = '';
            districtSelect.value = '';
            document.querySelectorAll('.price-input').forEach(input => input.value = '');
            document.querySelectorAll('.property-filters input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
        });

        // Filtreleri uygula
        applyFiltersBtn.addEventListener('click', () => {
            const filters = {
                city: locationSelect.value,
                district: districtSelect.value,
                priceMin: document.querySelector('.price-input:first-child').value,
                priceMax: document.querySelector('.price-input:last-of-type').value,
                currency: document.querySelector('.currency-select').value,
                properties: Array.from(document.querySelectorAll('.property-filters input[type="checkbox"]:checked'))
                    .map(checkbox => checkbox.value)
            };
            applyFilters(filters);
        });

        // Dışarı tıklandığında filtre panelini kapat
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                advancedFilters.classList.remove('active');
            }
        });
    }

    function updateDistricts(city) {
        const districtSelect = document.querySelector('.district-select');
        districtSelect.innerHTML = '<option value="">Tüm İlçeler</option>';
        
        if (!city) return;

        // Şehirlerin ilçelerini ekle (örnek veri)
        const districts = {
            istanbul: ['Kadıköy', 'Beşiktaş', 'Şişli', 'Üsküdar', 'Beyoğlu'],
            ankara: ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut'],
            izmir: ['Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Çiğli']
        };

        districts[city]?.forEach(district => {
            const option = document.createElement('option');
            option.value = district.toLowerCase();
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }

    function applyFilters(filters) {
        console.log('Uygulanan filtreler:', filters);
        // TODO: Filtreleri API'ye gönder ve sonuçları güncelle
        advancedFilters.classList.remove('active');
    }

    function initializeCategoryToggle() {
        const toggle = document.querySelector('.categories-toggle');
        const content = document.getElementById('categoriesContent');
        if (!toggle || !content) return;

        // Set initial icon/text based on collapsed state
        function updateToggleUI(isCollapsed) {
            toggle.setAttribute('aria-expanded', (!isCollapsed).toString());
            toggle.classList.toggle('active', !isCollapsed);
            
            const icon = toggle.querySelector('i');
            const label = toggle.querySelector('span');
            
            // Update icon and text
            if (isCollapsed) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
                label.textContent = 'Göster';
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                label.textContent = 'Gizle';
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Initialize UI based on current state
        updateToggleUI(content.classList.contains('collapsed'));

        // Handle click with animation
        toggle.addEventListener('click', () => {
            const willCollapse = !content.classList.contains('collapsed');
            content.classList.toggle('collapsed');
            updateToggleUI(willCollapse);
        });

        // keyboard support (Enter / Space)
        toggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.click();
            }
        });

        // Make category-card keyboard actionable: Enter to open/view
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });
    }

    // Collapse header/search/categories on scroll down, expand on scroll up
    (function initScrollCompact() {
        let lastScroll = window.scrollY || 0;
        let ticking = false;
        const body = document.body;
        const categoriesContent = document.getElementById('categoriesContent');
        const advancedFilters = document.querySelector('.advanced-filters');

        function handleScroll(current) {
            const delta = current - lastScroll;

            // if scrolling down enough and past threshold -> compact
            if (current > 120 && delta > 6) {
                if (!body.classList.contains('compact')) {
                    body.classList.add('compact');
                    // close advanced filters if open
                    if (advancedFilters) advancedFilters.classList.remove('active');
                    // collapse categories
                    if (categoriesContent && !categoriesContent.classList.contains('collapsed')) {
                        categoriesContent.classList.add('collapsed');
                        const toggle = document.querySelector('.categories-toggle');
                        if (toggle) {
                            toggle.setAttribute('aria-expanded', 'false');
                            const icon = toggle.querySelector('i');
                            if (icon) { icon.classList.remove('fa-chevron-up'); icon.classList.add('fa-chevron-down'); }
                            const label = toggle.querySelector('span'); if (label) label.textContent = 'Göster';
                        }
                    }
                }
            }

            // if scrolling up enough or near top -> expand
            if (delta < -6 || current < 80) {
                if (body.classList.contains('compact')) {
                    body.classList.remove('compact');
                }
            }

            lastScroll = current;
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            const current = window.scrollY || 0;
            if (!ticking) {
                window.requestAnimationFrame(() => handleScroll(current));
                ticking = true;
            }
        }, { passive: true });
    })();

    // Favori butonları
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.toggle('active');
        });
    });

    // Görünüm değiştirme butonları
    const viewButtons = document.querySelectorAll('.view-button');
    const listingsGrid = document.querySelector('.listings-grid');

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            // Liste görünümü için grid'i tek kolon yap
            if (button.querySelector('.fa-list')) {
                listingsGrid.style.gridTemplateColumns = '1fr';
            } else {
                listingsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
            }
        });
    });

    // Logo tıklaması
    const siteLogo = document.querySelector('.site-logo');
    if (siteLogo) {
        siteLogo.addEventListener('click', () => {
            window.location.href = '/';
        });
    }

    // İlan ver butonu
    const postAdButton = document.querySelector('.post-ad-fab');
    if (postAdButton) {
        postAdButton.addEventListener('click', () => {
            // TODO: İlan verme modalını aç
            console.log('İlan ver butonu tıklandı');
        });
    }

    // Kullanıcı menüsü
    const userButton = document.querySelector('.user-button');
    if (userButton) {
        userButton.addEventListener('click', () => {
            // TODO: Kullanıcı menüsünü aç
            console.log('Kullanıcı menüsü tıklandı');
        });
    }

    // Mesaj butonu
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // TODO: Mesaj modalını aç
            console.log('Mesaj butonu tıklandı');
        });
    });

    // Global ESC handler: close any active modal/overlay
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            // Close all active modals
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
                const form = modal.querySelector('form');
                if (form) form.reset();
                const imagePreview = modal.querySelector('#imagePreview');
                if (imagePreview) imagePreview.innerHTML = '';
            });

            // Remove any stray overlay/backdrop elements if present
            document.querySelectorAll('.overlay, .modal-backdrop').forEach(el => el.remove());
        }
    });
;

// Profile Page JavaScript Functions
document.addEventListener('DOMContentLoaded', function() {
    // Profile navigation tabs
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items and tab contents
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Get target tab and show it
            const targetTab = this.getAttribute('href').substring(1);
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Profile avatar change functionality
    const changeAvatarBtn = document.querySelector('.change-avatar-btn');
    const avatarInput = document.getElementById('avatarInput');
    const profileImage = document.getElementById('profileImage');
    
    if (changeAvatarBtn && avatarInput && profileImage) {
        changeAvatarBtn.addEventListener('click', function() {
            avatarInput.click();
        });
        
        avatarInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profileImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Edit profile functionality
    const editBtn = document.querySelector('.edit-btn');
    const infoInputs = document.querySelectorAll('.info-group input, .info-group select, .bio-section textarea');
    
    if (editBtn && infoInputs.length > 0) {
        let isEditing = false;
        
        editBtn.addEventListener('click', function() {
            isEditing = !isEditing;
            
            if (isEditing) {
                // Enable editing
                infoInputs.forEach(input => {
                    input.removeAttribute('readonly');
                    input.removeAttribute('disabled');
                    input.style.background = 'var(--surface)';
                });
                
                this.innerHTML = '<i class="fas fa-save"></i> Kaydet';
                this.style.background = 'var(--success)';
            } else {
                // Save and disable editing
                infoInputs.forEach(input => {
                    if (input.tagName.toLowerCase() === 'select') {
                        input.setAttribute('disabled', 'disabled');
                    } else {
                        input.setAttribute('readonly', 'readonly');
                    }
                    input.style.background = 'var(--gray-50)';
                });
                
                this.innerHTML = '<i class="fas fa-edit"></i> Düzenle';
                this.style.background = 'var(--primary)';
                
                // Here you would typically save the data to a server
                showNotification('Profil bilgileri güncellendi!', 'success');
            }
        });
    }
    
    // Ad filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const adItems = document.querySelectorAll('.ad-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterBtns.forEach(f => f.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter logic would go here
            const filterType = this.textContent.toLowerCase();
            console.log('Filtering by:', filterType);
        });
    });
    
    // Ad action buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.action-btn.edit')) {
            const adItem = e.target.closest('.ad-item');
            const adTitle = adItem.querySelector('h4').textContent;
            showNotification(`"${adTitle}" düzenleniyor...`, 'info');
        } else if (e.target.closest('.action-btn.delete')) {
            const adItem = e.target.closest('.ad-item');
            const adTitle = adItem.querySelector('h4').textContent;
            
            if (confirm(`"${adTitle}" ilanını silmek istediğinize emin misiniz?`)) {
                adItem.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                    adItem.remove();
                    showNotification('İlan silindi', 'success');
                }, 300);
            }
        } else if (e.target.closest('.action-btn.stats')) {
            const adItem = e.target.closest('.ad-item');
            const adTitle = adItem.querySelector('h4').textContent;
            showNotification(`"${adTitle}" istatistikleri gösteriliyor...`, 'info');
        }
    });
});

// Notification function for profile page
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('.notification-styles')) {
        const style = document.createElement('style');
        style.className = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 12px;
                color: white;
                font-weight: 600;
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                min-width: 300px;
                transform: translateX(100%);
                opacity: 0;
                transition: all 0.3s ease;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }
            
            .notification.show {
                transform: translateX(0);
                opacity: 1;
            }
            
            .notification-success {
                background: var(--success);
            }
            
            .notification-error {
                background: var(--danger);
            }
            
            .notification-info {
                background: var(--primary);
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                margin-left: auto;
                opacity: 0.8;
                transition: opacity 0.2s ease;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
            
            @keyframes fadeOut {
                from {
                    opacity: 1;
                    transform: scale(1);
                }
                to {
                    opacity: 0;
                    transform: scale(0.9);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// My Ads Page JavaScript Functions
document.addEventListener('DOMContentLoaded', function() {
    // Tab filtering functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const adCards = document.querySelectorAll('.ad-card');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get filter type
            const filter = this.getAttribute('data-filter');
            
            // Filter ads
            adCards.forEach(card => {
                const status = card.getAttribute('data-status');
                
                if (filter === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else if (status === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.ads-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            adCards.forEach(card => {
                const title = card.querySelector('.ad-title').textContent.toLowerCase();
                const location = card.querySelector('.ad-location').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || location.includes(searchTerm)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    }
    
    // Sort functionality
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            const sortType = e.target.value;
            const adsContainer = document.querySelector('.ads-container');
            const adsArray = Array.from(adCards);
            
            adsArray.sort((a, b) => {
                switch (sortType) {
                    case 'date-desc':
                        // Newest first (default)
                        return new Date(b.querySelector('.ad-date').textContent.split(' ').slice(1).join(' ')) - 
                               new Date(a.querySelector('.ad-date').textContent.split(' ').slice(1).join(' '));
                    
                    case 'date-asc':
                        // Oldest first
                        return new Date(a.querySelector('.ad-date').textContent.split(' ').slice(1).join(' ')) - 
                               new Date(b.querySelector('.ad-date').textContent.split(' ').slice(1).join(' '));
                    
                    case 'views-desc':
                        // Most views first
                        const viewsA = parseInt(a.querySelector('.ad-views').textContent.replace(/\D/g, ''));
                        const viewsB = parseInt(b.querySelector('.ad-views').textContent.replace(/\D/g, ''));
                        return viewsB - viewsA;
                    
                    case 'price-asc':
                        // Lowest price first
                        const priceA = parseFloat(a.querySelector('.ad-price').textContent.replace(/[^\d,]/g, '').replace(',', '.'));
                        const priceB = parseFloat(b.querySelector('.ad-price').textContent.replace(/[^\d,]/g, '').replace(',', '.'));
                        return priceA - priceB;
                    
                    case 'price-desc':
                        // Highest price first
                        const priceA2 = parseFloat(a.querySelector('.ad-price').textContent.replace(/[^\d,]/g, '').replace(',', '.'));
                        const priceB2 = parseFloat(b.querySelector('.ad-price').textContent.replace(/[^\d,]/g, '').replace(',', '.'));
                        return priceB2 - priceA2;
                    
                    default:
                        return 0;
                }
            });
            
            // Re-append sorted ads
            adsArray.forEach(ad => {
                adsContainer.appendChild(ad);
            });
            
            showNotification(`İlanlar ${getSortDisplayName(sortType)} sıralandı`, 'info');
        });
    }
    
    // Action button handlers
    document.addEventListener('click', function(e) {
        const adCard = e.target.closest('.ad-card');
        const adTitle = adCard ? adCard.querySelector('.ad-title').textContent : '';
        
        if (e.target.closest('.action-btn.primary')) {
            if (adCard.getAttribute('data-status') === 'expired') {
                // Republish ad
                if (confirm(`"${adTitle}" ilanını yeniden yayınlamak istediğinize emin misiniz?`)) {
                    adCard.setAttribute('data-status', 'active');
                    const badge = adCard.querySelector('.ad-badge');
                    badge.textContent = 'Aktif';
                    badge.className = 'ad-badge active';
                    
                    // Update meta info
                    const expiredSpan = adCard.querySelector('.ad-expired');
                    if (expiredSpan) {
                        expiredSpan.innerHTML = '<i class="fas fa-clock"></i> 30 gün kaldı';
                        expiredSpan.className = 'ad-expires';
                    }
                    
                    showNotification(`"${adTitle}" başarıyla yeniden yayınlandı!`, 'success');
                }
            } else {
                // Edit ad
                showNotification(`"${adTitle}" düzenleniyor...`, 'info');
            }
        } else if (e.target.closest('.action-btn.success')) {
            if (adCard.getAttribute('data-status') === 'inactive') {
                // Activate ad
                if (confirm(`"${adTitle}" ilanını aktifleştirmek istediğinize emin misiniz?`)) {
                    adCard.setAttribute('data-status', 'active');
                    const badge = adCard.querySelector('.ad-badge');
                    badge.textContent = 'Aktif';
                    badge.className = 'ad-badge active';
                    
                    // Update meta info
                    const statusReason = adCard.querySelector('.ad-status-reason');
                    if (statusReason) {
                        statusReason.innerHTML = '<i class="fas fa-clock"></i> 25 gün kaldı';
                        statusReason.className = 'ad-expires';
                    }
                    
                    showNotification(`"${adTitle}" başarıyla aktifleştirildi!`, 'success');
                }
            } else {
                // Show statistics
                showAdStatistics(adTitle);
            }
        } else if (e.target.closest('.action-btn.warning')) {
            // Pause ad
            if (confirm(`"${adTitle}" ilanını duraklatmak istediğinize emin misiniz?`)) {
                adCard.setAttribute('data-status', 'inactive');
                const badge = adCard.querySelector('.ad-badge');
                badge.textContent = 'Pasif';
                badge.className = 'ad-badge inactive';
                
                // Update meta info
                const expires = adCard.querySelector('.ad-expires');
                if (expires) {
                    expires.innerHTML = '<i class="fas fa-info-circle"></i> Manuel olarak durduruldu';
                    expires.className = 'ad-status-reason';
                }
                
                showNotification(`"${adTitle}" durakladtıldı`, 'warning');
            }
        } else if (e.target.closest('.action-btn.danger')) {
            // Delete ad
            if (confirm(`"${adTitle}" ilanını kalıcı olarak silmek istediğinize emin misiniz?\n\nBu işlem geri alınamaz!`)) {
                adCard.style.animation = 'fadeOut 0.5s ease-out forwards';
                setTimeout(() => {
                    adCard.remove();
                    updateAdCounts();
                    showNotification(`"${adTitle}" silindi`, 'success');
                }, 500);
            }
        } else if (e.target.closest('.action-btn.info')) {
            // Show statistics
            showAdStatistics(adTitle);
        } else if (e.target.closest('.action-btn.secondary')) {
            // Edit expired ad
            showNotification(`"${adTitle}" düzenleniyor...`, 'info');
        }
    });
    
    // Menu dropdown handlers
    document.addEventListener('click', function(e) {
        if (e.target.closest('.menu-item')) {
            e.preventDefault();
            const menuItem = e.target.closest('.menu-item');
            const adCard = e.target.closest('.ad-card');
            const adTitle = adCard.querySelector('.ad-title').textContent;
            
            if (menuItem.textContent.includes('Öne Çıkar')) {
                showNotification(`"${adTitle}" öne çıkarıldı!`, 'success');
            } else if (menuItem.textContent.includes('Kopyala')) {
                showNotification(`"${adTitle}" kopyalandı`, 'info');
            } else if (menuItem.textContent.includes('Paylaş')) {
                showShareDialog(adTitle);
            }
        }
    });
    
    // Pagination handlers
    const pageButtons = document.querySelectorAll('.page-btn:not([disabled])');
    pageButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active') && !this.hasAttribute('disabled')) {
                // Remove active class from all page buttons
                pageButtons.forEach(pb => pb.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Simulate page loading
                const adsContainer = document.querySelector('.ads-container');
                adsContainer.style.opacity = '0.5';
                
                setTimeout(() => {
                    adsContainer.style.opacity = '1';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 300);
            }
        });
    });
});

// Helper functions for My Ads page
function getSortDisplayName(sortType) {
    const sortNames = {
        'date-desc': 'tarihe göre (yeniden eskiye)',
        'date-asc': 'tarihe göre (eskiden yeniye)',
        'views-desc': 'görüntülenme sayısına göre',
        'price-asc': 'fiyata göre (artan)',
        'price-desc': 'fiyata göre (azalan)'
    };
    return sortNames[sortType] || 'varsayılan';
}

function showAdStatistics(adTitle) {
    const statsHTML = `
        <div class="stats-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        ">
            <div style="
                background: var(--surface);
                padding: 2rem;
                border-radius: 16px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            ">
                <h3 style="color: var(--text); margin-bottom: 1.5rem; text-align: center;">${adTitle} - İstatistikler</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="text-align: center; padding: 1rem; background: var(--gray-50); border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: 700; color: var(--primary);">324</div>
                        <div style="color: var(--muted); font-size: 0.9rem;">Görüntülenme</div>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: var(--gray-50); border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: 700; color: var(--success);">23</div>
                        <div style="color: var(--muted); font-size: 0.9rem;">Favori</div>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: var(--gray-50); border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: 700; color: var(--warning);">8</div>
                        <div style="color: var(--muted); font-size: 0.9rem;">Mesaj</div>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: var(--gray-50); border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: 700; color: var(--accent);">12</div>
                        <div style="color: var(--muted); font-size: 0.9rem;">Teklif</div>
                    </div>
                </div>
                <button onclick="this.closest('.stats-modal').remove()" style="
                    width: 100%;
                    padding: 1rem;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">Kapat</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', statsHTML);
}

function showShareDialog(adTitle) {
    const shareHTML = `
        <div class="share-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        ">
            <div style="
                background: var(--surface);
                padding: 2rem;
                border-radius: 16px;
                max-width: 400px;
                width: 90%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            ">
                <h3 style="color: var(--text); margin-bottom: 1.5rem; text-align: center;">${adTitle} - Paylaş</h3>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; justify-content: center;">
                    <button style="padding: 1rem; background: #1877f2; color: white; border: none; border-radius: 8px; cursor: pointer;">
                        <i class="fab fa-facebook"></i>
                    </button>
                    <button style="padding: 1rem; background: #1da1f2; color: white; border: none; border-radius: 8px; cursor: pointer;">
                        <i class="fab fa-twitter"></i>
                    </button>
                    <button style="padding: 1rem; background: #25d366; color: white; border: none; border-radius: 8px; cursor: pointer;">
                        <i class="fab fa-whatsapp"></i>
                    </button>
                    <button onclick="navigator.clipboard.writeText(window.location.href); showNotification('Link kopyalandı!', 'success'); this.closest('.share-modal').remove();" style="padding: 1rem; background: var(--gray-600); color: white; border: none; border-radius: 8px; cursor: pointer;">
                        <i class="fas fa-link"></i>
                    </button>
                </div>
                <button onclick="this.closest('.share-modal').remove()" style="
                    width: 100%;
                    padding: 1rem;
                    background: var(--muted);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">Kapat</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', shareHTML);
}

function updateAdCounts() {
    const activeAds = document.querySelectorAll('.ad-card[data-status="active"]').length;
    const inactiveAds = document.querySelectorAll('.ad-card[data-status="inactive"]').length;
    const expiredAds = document.querySelectorAll('.ad-card[data-status="expired"]').length;
    const totalAds = activeAds + inactiveAds + expiredAds;
    
    // Update tab buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        switch (filter) {
            case 'all':
                btn.textContent = `Tümü (${totalAds})`;
                break;
            case 'active':
                btn.textContent = `Aktif (${activeAds})`;
                break;
            case 'inactive':
                btn.textContent = `Pasif (${inactiveAds})`;
                break;
            case 'expired':
                btn.textContent = `Süresi Dolmuş (${expiredAds})`;
                break;
        }
    });
    
    // Update stat cards
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards[1]) statCards[1].querySelector('h3').textContent = activeAds;
    if (statCards[2]) statCards[2].querySelector('h3').textContent = inactiveAds;
    if (statCards[3]) statCards[3].querySelector('h3').textContent = expiredAds;
}
