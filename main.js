/**
 * NAWAL AI NURRAHMAN - PORTFOLIO INTERACTION ENGINE
 * Editorial Asymmetric Grid, Accessibility Focus Management, Theme System
 */

function initPortfolio() {

  let lastFocusedTrigger = null;

  /* ==========================================================================
     00. WELCOME INTRO ANIMATION SCREEN (EDITORIAL PRELOADER)
     ========================================================================== */
  const welcomeScreen = document.getElementById('welcomeScreen');
  const welcomeProgress = document.getElementById('welcomeProgress');

  if (welcomeScreen) {
    const dismissWelcome = () => {
      if (welcomeScreen.classList.contains('is-loaded')) return;
      welcomeScreen.classList.add('is-loaded');
      setTimeout(() => {
        welcomeScreen.style.display = 'none';
        if (window.ScrollTrigger) ScrollTrigger.refresh();
      }, 400);
    };

    // Quick, respectful splash (max 400ms) so users never wait
    setTimeout(dismissWelcome, 400);
    welcomeScreen.addEventListener('click', dismissWelcome);
    window.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Escape' || e.key === 'Enter') {
        dismissWelcome();
      }
    }, { once: true });
  }

  /* ==========================================================================
     01. PROJECT CASE STUDY DATABASE (NO EM DASHES, REAL DATA)
     ========================================================================== */
  const projectsData = {
    'w-coffee': {
      title: 'W-Coffee: Desain Aplikasi Mobile Coffee Shop',
      category: 'UI/UX Design • Mobile App Prototype',
      year: '2026',
      role: 'Desainer UI/UX',
      tools: 'Figma, Adobe Illustrator, Design Tokens',
      heroImage: 'assets/images/w-coffee.png',
      summary: 'Perancangan antarmuka aplikasi pemesanan kopi mobile yang difokuskan pada navigasi menu yang jelas, opsi kustomisasi takaran gula/es, rincian harga transparan, dan alur checkout yang ringkas.',
      context: 'Proyek ini berawal dari observasi antrean di gerai kopi saat jam sibuk. Aplikasi W-Coffee dirancang untuk mempercepat pemesanan bawa pulang (takeaway) dengan hierarki tipografi tegas, tata letak kartu menu yang ergonomis untuk satu tangan, dan ukuran tombol sentuh minimal 48dp.',
      deliverables: [
        'Alur pengguna (user flow) dan wireframe aplikasi',
        'Sistem komponen UI (tombol aksi, chip varian, kartu menu, navigasi bawah)',
        'Prototype interaktif di Figma siap uji',
        'Dokumen spesifikasi desain (W-Coffe.pdf)'
      ],
      pdfLink: 'assets/docs/W-Coffe.pdf',
      gallery: [
        'assets/images/w-coffee.png'
      ]
    },

    'cilanang': {
      title: 'Desa Wisata Cilanang: Promosi & Kemasan UMKM',
      category: 'Branding UMKM • Desain Stiker • Video Dokumentasi',
      year: '2025',
      role: 'Ketua Tim Promosi',
      tools: 'Adobe Photoshop, CorelDRAW, Premiere Pro, Kamera DSLR',
      heroImage: 'assets/images/cilanang.jpg',
      summary: 'Program perancangan materi branding dan media promosi untuk potensi pariwisata Desa Cilanang, Bandung Barat, serta standardisasi kemasan produk olahan UMKM lokal.',
      context: 'Membimbing dan mengoordinasikan tim promosi dalam menggali potensi lokal. Hasil karya mencakup desain label stiker untuk produk kopi, teh lokal, gula aren, dan keripik pisang, serta pembuatan spanduk promosi dan video dokumentasi penunjang wisata.',
      deliverables: [
        'Panduan identitas visual dan spanduk informasi wisata desa',
        'Desain stiker kemasan produk UMKM (Kopi Organik, Teh Lokal, Gula Aren, Keripik Pisang)',
        'Video dokumentasi kegiatan dan keindahan alam Desa Cilanang',
        'Aset grafis media sosial untuk peluncuran promosi wisata'
      ],
      gallery: [
        'assets/images/cilanang.jpg'
      ]
    },

    'alfahira': {
      title: 'PT Alfahira Mediana Sentosa: Manajemen Konten & Video Iklan',
      category: 'Social Media Management • TikTok Affiliate • Video Ads',
      year: '2026',
      role: 'Intern, Social Media & Content',
      tools: 'CapCut, TikTok Analytics, Instagram Insights, Premiere Pro',
      heroImage: 'assets/images/sosmed/Screenshot_2026-09-22-16-08-14-496_com.instagram.android.jpg',
      summary: 'Pengalaman magang profesional dalam mengelola akun media sosial kursus bahasa, merancang konten promosi affiliate di TikTok, serta mengedit materi video promosi berbayar.',
      context: 'Bertanggung jawab dalam eksekusi harian media sosial: riset tren audio, penyusunan konsep konten, proses pengambilan dan editing video, hingga evaluasi engagement performa akun.',
      deliverables: [
        'Pengelolaan jadwal posting konten akun media sosial kursus bahasa',
        'Produksi video pendek TikTok affiliate untuk kebutuhan promosi',
        'Editing materi video promosi berbayar dan kampanye penggalangan dana digital',
        'Penataan visual feed dan story Instagram'
      ],
      gallery: [
        'assets/images/sosmed/Screenshot_2026-09-22-16-03-34-551_com.ss.android.ugc.trill.jpg',
        'assets/images/sosmed/Screenshot_2026-09-22-16-04-00-132_com.ss.android.ugc.trill.jpg',
        'assets/images/sosmed/Screenshot_2026-09-22-16-07-22-676_com.ss.android.ugc.trill.jpg',
        'assets/images/sosmed/Screenshot_2026-09-22-16-08-14-496_com.instagram.android.jpg',
        'assets/images/sosmed/Screenshot_2026-09-23-15-27-39-236_com.instagram.android.jpg',
        'assets/images/sosmed/Screenshot_2026-09-23-15-27-59-401_com.instagram.android.jpg',
        'assets/images/sosmed/Screenshot_2026-09-23-15-35-12-734_com.instagram.android.jpg',
        'assets/images/sosmed/Screenshot_2026-09-23-15-35-19-168_com.instagram.android.jpg'
      ]
    },

    'motion-graphic': {
      title: '3D Motion Graphic: Visualisasi Gerak Sinematik',
      category: 'Motion Graphic • Animasi 3D • Visual Effects',
      year: '2025 - 2026',
      role: 'Desainer Motion Graphic & Animator',
      tools: 'Blender, 3D Animation Software, Adobe Premiere Pro, After Effects',
      heroImage: 'assets/videos/3d_motion.mp4',
      isVideoHero: true,
      summary: 'Eksplorasi animasi gerak 3D dengan penekanan pada sudut pandang kamera dinamis, kurva akselerasi gerak, dan interaksi pencahayaan material.',
      context: 'Karya ini berfokus pada penguasaan animasi dalam ruang tiga dimensi. Menyelaraskan pergerakan kamera sinematik dengan timing transisi objek, refleksi permukaan material, dan ritme komposisi visual yang mengalir.',
      deliverables: [
        'Perancangan storyboard dan alur pergerakan kamera 3D',
        'Keyframing kurva akselerasi (speed easing & interpolation)',
        'Pengaturan tata cahaya studio virtual dan rendering material',
        'Final compositing, audio sync, dan ekspor video resolusi tinggi'
      ],
      gallery: [
        'assets/videos/3d_motion.mp4'
      ]
    },

    'animation-series': {
      title: 'Animasi 2D: Rangkaian Tugas Praktik Gerak',
      category: 'Animasi 2D Frame-by-Frame • Studi Fisika Gerak',
      year: '2024 - 2025',
      role: 'Animator 2D',
      tools: 'Software Animasi 2D, Adobe Premiere Pro, Drawing Tablet',
      heroImage: 'assets/videos/tugas_2_follow_through.mp4',
      isVideoHero: true,
      summary: 'Kumpulan tugas praktik perkuliahan animasi frame-by-frame untuk memahami prinsip dasar gerak, kelenturan benda, inersia, efek cairan, dan pergerakan karakter.',
      context: 'Materi perkuliahan D4 TRMG Poltekhas yang menguji ketelitian penempatan frame per detik, timing pose utama (keyframe), in-between, hingga sinkronisasi audio dialog.',
      deliverables: [
        'Tugas 1: Bola Pantul - prinsip squash & stretch dan spacing gravitasi',
        'Tugas 2: Follow Through & Overlapping Action - gerak lanjutan bandul dan ekor',
        'Tugas 3: FX Api & Asap - siklus animasi partikel organik dan disipasi',
        'Tugas 3: FX Percikan Air - dinamika tetesan dan riak permukaan air',
        'Tugas 4: Rotoscoping - penjiplakan gerak dari rekaman aksi nyata frame-by-frame',
        'Tugas 5: Siklus Jalan - bipedal manusia, quadruped anjing, dan kepakan burung',
        'Tugas 6: Lip Sync Karakter - penyesuaian bentuk mulut dengan pelafalan suara dialog'
      ],
      gallery: [
        'assets/videos/tugas_1_bola_pantul_final.mp4',
        'assets/videos/tugas_2_follow_through.mp4',
        'assets/videos/tugas_3_fire_&_smoke.mp4',
        'assets/videos/tugas_3_water.mp4',
        'assets/videos/tugas_4_rotoscoping.mp4',
        'assets/videos/tugas_5_locomotive_homan_walk.mp4',
        'assets/videos/tugas_5_locomotive_dog_walk.mp4',
        'assets/videos/tugas_5_locomotive_flying_bird.mp4',
        'assets/videos/tugas_6_berbicara.mp4'
      ]
    }
  };

  /* ==========================================================================
     02. SCROLL REVEALS (ALWAYS VISIBLE, ZERO OPACITY-0 SLOP)
     ========================================================================== */
  const blurElements = document.querySelectorAll('[data-scroll-blur]');

  blurElements.forEach((el) => {
    el.style.opacity = '1';
    el.style.filter = 'none';
    el.style.transform = 'none';
    el.classList.add('is-revealed');
  });

  /* ==========================================================================
     03. INTERACTIVE CUSTOM CURSOR (DESKTOP ONLY)
     ========================================================================== */
  const customCursor = document.getElementById('customCursor');
  const cursorDot = document.getElementById('cursorDot');

  if (customCursor && cursorDot && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }, { passive: true });

    const renderCursor = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    const hoverTargets = document.querySelectorAll('a, button, .project-card, .video-card-item, .contact-card-glass, .filter-btn');
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => customCursor.classList.add('cursor-hover'));
      target.addEventListener('mouseleave', () => customCursor.classList.remove('cursor-hover'));
    });
  }

  /* ==========================================================================
     04. THEME SYSTEM: MODE TOGGLE (DARK STUDIO / EDITORIAL PAPER LIGHT)
     ========================================================================== */
  const themeModeToggle = document.getElementById('themeModeToggle');
  const themeModeIcon = document.getElementById('themeModeIcon');
  const savedMode = localStorage.getItem('nwal_mode') || 'dark';

  const applyThemeMode = (mode) => {
    document.body.setAttribute('data-mode', mode);
    localStorage.setItem('nwal_mode', mode);
    if (themeModeIcon) {
      themeModeIcon.className = mode === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
    if (themeModeToggle) {
      themeModeToggle.setAttribute('aria-label', mode === 'light' ? 'Ganti ke Mode Gelap' : 'Ganti ke Mode Terang Editorial');
      themeModeToggle.setAttribute('title', mode === 'light' ? 'Mode Gelap' : 'Mode Terang Editorial');
    }
  };
  applyThemeMode(savedMode);

  if (themeModeToggle) {
    themeModeToggle.addEventListener('click', () => {
      const currentMode = document.body.getAttribute('data-mode') || 'dark';
      const nextMode = currentMode === 'dark' ? 'light' : 'dark';
      applyThemeMode(nextMode);
    });
  }

  /* ==========================================================================
     04B. LANTERNE COLOR ACCENT SWITCHER
     ========================================================================== */
  const themeDots = document.querySelectorAll('.theme-dot');
  const savedTheme = localStorage.getItem('nwal_theme') || 'lime';
  document.body.setAttribute('data-theme', savedTheme);
  themeDots.forEach(dot => {
    dot.classList.toggle('active', dot.getAttribute('data-set-theme') === savedTheme);
  });

  themeDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const selectedTheme = dot.getAttribute('data-set-theme');
      document.body.setAttribute('data-theme', selectedTheme);
      localStorage.setItem('nwal_theme', selectedTheme);

      themeDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  /* ==========================================================================
     05. PORTFOLIO FILTERING & EMPTY STATE HANDLING
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const emptyProjectsState = document.getElementById('emptyProjectsState');
  const resetFilterBtn = document.getElementById('resetFilterBtn');

  const executeFilter = (filterCategory) => {
    let visibleCount = 0;

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filterCategory === 'all' || cardCategory === filterCategory) {
        card.style.display = 'flex';
        visibleCount++;
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 30);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 250);
      }
    });

    if (emptyProjectsState) {
      emptyProjectsState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterCategory = btn.getAttribute('data-filter');
      executeFilter(filterCategory);
    });
  });

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
      if (allBtn) allBtn.click();
    });
  }

  /* ==========================================================================
     06. PROJECT DETAIL CASE STUDY MODAL LOGIC (ACCESSIBLE DIALOG)
     ========================================================================== */
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalContent');

  const openProjectModal = (projectId, triggerElement = null) => {
    const data = projectsData[projectId];
    if (!data) return;

    lastFocusedTrigger = triggerElement || document.activeElement;

    let mediaHeroHtml = '';
    if (data.isVideoHero) {
      mediaHeroHtml = `
        <div style="border-radius: var(--radius-lg); overflow: hidden; background: #000; margin-bottom: 24px;">
          <video src="${data.heroImage}" controls playsinline style="width: 100%; aspect-ratio: 16/9; object-fit: contain;"></video>
        </div>
      `;
    } else {
      mediaHeroHtml = `
        <div style="border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 24px; border: 1px solid var(--glass-border);">
          <img src="${data.heroImage}" alt="${data.title}" style="width: 100%; max-height: 480px; object-fit: cover;">
        </div>
      `;
    }

    let galleryItemsHtml = '';
    data.gallery.forEach(item => {
      if (item.endsWith('.mp4')) {
        galleryItemsHtml += `
          <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--glass-border); aspect-ratio: 16/9; background: #000;">
            <video src="${item}" controls preload="metadata" style="width: 100%; height: 100%; object-fit: cover;"></video>
          </div>
        `;
      } else {
        galleryItemsHtml += `
          <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--glass-border);">
            <img src="${item}" alt="Dokumentasi proyek visual" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; cursor: pointer;" onclick="window.open('${item}', '_blank')">
          </div>
        `;
      }
    });

    let deliverablesHtml = '';
    data.deliverables.forEach(deliv => {
      deliverablesHtml += `<li style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 8px; position: relative; padding-left: 20px;"><span style="position: absolute; left: 0; color: var(--accent);">✓</span>${deliv}</li>`;
    });

    let pdfActionHtml = '';
    if (data.pdfLink) {
      pdfActionHtml = `
        <div style="margin-top: 20px; padding: 18px; border-radius: var(--radius-md); background: var(--glass-surface); border: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div>
            <h5 style="font-size: 0.95rem; color: var(--text-primary);">Dokumen Spesifikasi Desain</h5>
            <p style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">W-Coffe.pdf (Dokumen Proyek Asli)</p>
          </div>
          <a href="${data.pdfLink}" target="_blank" rel="noopener noreferrer" class="btn-glass-pill">Buka Dokumen PDF</a>
        </div>
      `;
    }

    modalContent.innerHTML = `
      <div class="case-study-hero">
        <div class="editorial-tag" style="margin-bottom: 8px;">
          <span class="g_eyebrow_marker"></span>
          <span>${data.category}</span>
        </div>
        <h2 id="modalProjectTitle" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); margin-bottom: 12px;">${data.title}</h2>
        <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6; max-width: 780px;">${data.summary}</p>
      </div>

      <div class="case-study-meta-grid">
        <div class="meta-block">
          <span>Peran</span>
          <strong>${data.role}</strong>
        </div>
        <div class="meta-block">
          <span>Tahun</span>
          <strong>${data.year}</strong>
        </div>
        <div class="meta-block">
          <span>Perangkat</span>
          <strong>${data.tools}</strong>
        </div>
        <div class="meta-block">
          <span>Mitra &amp; Institusi</span>
          <strong>Poltekhas &amp; Mitra</strong>
        </div>
      </div>

      ${mediaHeroHtml}

      <div class="case-study-content">
        <div>
          <h3 style="font-size: 1.3rem; margin-bottom: 8px; color: var(--accent);">01. Latar Belakang &amp; Konteks</h3>
          <p style="color: var(--text-secondary); line-height: 1.6;">${data.context}</p>
        </div>

        <div>
          <h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--accent);">02. Luaran &amp; Hasil Pengerjaan</h3>
          <ul style="list-style: none; padding: 0;">
            ${deliverablesHtml}
          </ul>
          ${pdfActionHtml}
        </div>

        <div>
          <h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--accent);">03. Dokumentasi Visual</h3>
          <div class="case-study-gallery-grid">
            ${galleryItemsHtml}
          </div>
        </div>
      </div>

      <div style="margin-top: 40px; text-align: center; border-top: 1px solid var(--glass-border); padding-top: 24px;">
        <button class="btn-glass-pill" id="innerModalCloseBtn" type="button">Tutup Studi Kasus</button>
      </div>
    `;

    const innerClose = document.getElementById('innerModalCloseBtn');
    if (innerClose) innerClose.addEventListener('click', closeProjectModal);

    projectModal.classList.add('is-open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 50);
  };

  const closeProjectModal = () => {
    projectModal.classList.remove('is-open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  };

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = card.getAttribute('data-project-id');
      if (projectId) openProjectModal(projectId, card);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const projectId = card.getAttribute('data-project-id');
        if (projectId) openProjectModal(projectId, card);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  /* ==========================================================================
     07. 2D ANIMATION VIDEO MODAL PLAYER
     ========================================================================== */
  const videoModal = document.getElementById('videoModal');
  const videoModalCloseBtn = document.getElementById('videoModalCloseBtn');
  const closeVideoModalActionBtn = document.getElementById('closeVideoModalActionBtn');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const videoModalTitle = document.getElementById('videoModalTitle');
  const videoCardItems = document.querySelectorAll('.video-card-item');

  const openVideoModal = (src, title, triggerElement = null) => {
    if (!src || !modalVideoPlayer) return;
    lastFocusedTrigger = triggerElement || document.activeElement;

    modalVideoPlayer.src = src;
    if (videoModalTitle) videoModalTitle.textContent = title || 'Studi Praktik Animasi 2D';
    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    modalVideoPlayer.play().catch(() => {});
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (videoModalCloseBtn) videoModalCloseBtn.focus();
    }, 50);
  };

  const closeVideoModal = () => {
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    if (modalVideoPlayer) {
      modalVideoPlayer.pause();
      modalVideoPlayer.src = '';
    }
    document.body.style.overflow = '';
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  };

  videoCardItems.forEach(item => {
    const videoPreview = item.querySelector('video');

    item.addEventListener('mouseenter', () => {
      if (videoPreview) videoPreview.play().catch(() => {});
    });
    item.addEventListener('mouseleave', () => {
      if (videoPreview) videoPreview.pause();
    });

    item.addEventListener('click', () => {
      const src = item.getAttribute('data-video-src');
      const title = item.getAttribute('data-video-title');
      openVideoModal(src, title, item);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const src = item.getAttribute('data-video-src');
        const title = item.getAttribute('data-video-title');
        openVideoModal(src, title, item);
      }
    });
  });

  if (videoModalCloseBtn) videoModalCloseBtn.addEventListener('click', closeVideoModal);
  if (closeVideoModalActionBtn) closeVideoModalActionBtn.addEventListener('click', closeVideoModal);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideoModal();
  });

  /* ==========================================================================
     08. CV MODAL CONTROLS
     ========================================================================== */
  const cvModal = document.getElementById('cvModal');
  const cvModalCloseBtn = document.getElementById('cvModalCloseBtn');
  const closeCvModalActionBtn = document.getElementById('closeCvModalActionBtn');
  const footerCvCard = document.getElementById('footerCvCard');
  const cvTriggers = [
    document.getElementById('openCvBtn'),
    document.getElementById('heroCvBtn'),
    document.getElementById('openCvAboutBtn'),
    footerCvCard,
    document.getElementById('mobileCvBtn')
  ];

  const openCv = (triggerElement = null) => {
    lastFocusedTrigger = triggerElement || document.activeElement;
    cvModal.classList.add('is-open');
    cvModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (cvModalCloseBtn) cvModalCloseBtn.focus();
    }, 50);
  };

  const closeCv = () => {
    cvModal.classList.remove('is-open');
    cvModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  };

  cvTriggers.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openCv(btn);
      });
    }
  });

  if (footerCvCard) {
    footerCvCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCv(footerCvCard);
      }
    });
  }

  if (cvModalCloseBtn) cvModalCloseBtn.addEventListener('click', closeCv);
  if (closeCvModalActionBtn) closeCvModalActionBtn.addEventListener('click', closeCv);
  cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) closeCv();
  });

  /* ==========================================================================
     09. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenuOverlay) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenuOverlay.classList.toggle('is-active');
      mobileMenuBtn.textContent = isOpen ? '✕' : '☰';
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenuOverlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('is-active');
        mobileMenuBtn.textContent = '☰';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* ==========================================================================
     10. ACTIVE LINK HIGHLIGHT ON SCROLL
     ========================================================================== */
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const secTop = sec.offsetTop - 140;
      const secHeight = sec.offsetHeight;
      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  /* ==========================================================================
     11. ESCAPE KEY TO CLOSE ANY ACTIVE MODAL
     ========================================================================== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && projectModal.classList.contains('is-open')) {
        closeProjectModal();
      } else if (videoModal && videoModal.classList.contains('is-open')) {
        closeVideoModal();
      } else if (cvModal && cvModal.classList.contains('is-open')) {
        closeCv();
      } else if (mobileMenuOverlay && mobileMenuOverlay.classList.contains('is-active')) {
        mobileMenuOverlay.classList.remove('is-active');
        if (mobileMenuBtn) {
          mobileMenuBtn.textContent = '☰';
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
      }
    }
  });

}

// Safe execution guard: runs immediately if DOM is already ready (e.g. deployed environments)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}
