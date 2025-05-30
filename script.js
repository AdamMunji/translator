// ========== تغيير اللغة ==========
function switchLang(code) {
  if (code === 'ar') window.location.href = 'index.html';
  else if (code === 'en') window.location.href = 'en.html';
  else if (code === 'it') window.location.href = 'it.html';
}

// ========== سنة الفوتر ==========
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// ========== الوضع الليلي ==========
const modeBtn = document.getElementById('toggle-mode');
if (modeBtn) {
  modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeBtn.innerHTML = document.body.classList.contains('dark-mode') 
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? '1' : '0');
  });
  if (localStorage.getItem('darkMode') === '1') {
    document.body.classList.add('dark-mode');
    modeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

// ========== عدادات متحركة ==========
function animateCounter(el, target) {
  let current = 0;
  const increment = Math.ceil(target/50) || 1;
  const update = () => {
    current += increment;
    if(current >= target) {
      el.textContent = target;
    } else {
      el.textContent = current;
      requestAnimationFrame(update);
    }
  };
  update();
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.dataset.target;
    animateCounter(counter, target);
  });
});

// ========== مصفوفة صور الترجمة ==========
const translationFilenames = [
  "photo_30_2025-05-30_23-01-12.jpg",
  "photo_31_2025-05-30_23-01-12.jpg",
  "photo_32_2025-05-30_23-01-12.jpg",
  "photo_33_2025-05-30_23-01-12.jpg",
  "photo_1_2025-05-30_23-01-11.jpg",
  "photo_2_2025-05-30_23-01-11.jpg",
  "photo_3_2025-05-30_23-01-11.jpg",
  "photo_4_2025-05-30_23-01-11.jpg",
  "photo_5_2025-05-30_23-01-11.jpg",
  "photo_6_2025-05-30_23-01-11.jpg",
  "photo_7_2025-05-30_23-01-11.jpg",
  "photo_8_2025-05-30_23-01-11.jpg",
  "photo_9_2025-05-30_23-01-11.jpg",
  "photo_10_2025-05-30_23-01-11.jpg",
  "photo_11_2025-05-30_23-01-11.jpg",
  "photo_12_2025-05-30_23-01-11.jpg",
  "photo_13_2025-05-30_23-01-11.jpg",
  "photo_14_2025-05-30_23-01-11.jpg",
  "photo_15_2025-05-30_23-01-11.jpg",
  "photo_16_2025-05-30_23-01-11.jpg",
  "photo_17_2025-05-30_23-01-11.jpg",
  "photo_18_2025-05-30_23-01-11.jpg",
  "photo_19_2025-05-30_23-01-12.jpg",
  "photo_20_2025-05-30_23-01-12.jpg",
  "photo_21_2025-05-30_23-01-12.jpg",
  "photo_22_2025-05-30_23-01-12.jpg",
  "photo_23_2025-05-30_23-01-12.jpg",
  "photo_24_2025-05-30_23-01-12.jpg",
  "photo_25_2025-05-30_23-01-12.jpg",
  "photo_26_2025-05-30_23-01-12.jpg",
  "photo_27_2025-05-30_23-01-12.jpg",
  "photo_28_2025-05-30_23-01-12.jpg",
  "photo_29_2025-05-30_23-01-12.jpg"
];

// ========== معرض الأعمال ==========
const portfolioList = [
  {
    title: "ترجمة كتاب أكاديمي",
    image: "portfolio1.jpg",
    tags: ["translation"],
    desc: "ترجمة كتاب متخصص في العلوم الإنسانية من الإنجليزية للعربية.",
    link: "#"
  },
  {
    title: "تصميم شعار تعليمي",
    image: "portfolio2.jpg",
    tags: ["design"],
    desc: "تصميم شعار حديث لمعهد لغات.",
    link: "#"
  },
  {
    title: "جلسة تصوير تخرج",
    image: "portfolio3.jpg",
    tags: ["photography"],
    desc: "جلسة تصوير إبداعية لحفلة تخرج جامعي.",
    link: "#"
  },
  {
    title: "دورة لغة إنجليزية مكثفة",
    image: "portfolio4.jpg",
    tags: ["teaching"],
    desc: "تدريب طلاب على مهارات المحادثة والكتابة.",
    link: "#"
  },
  {
    title: "موقع شخصي متعدد اللغات",
    image: "portfolio5.jpg",
    tags: ["web", "design"],
    desc: "برمجة وتصميم موقع تفاعلي بلغات متعددة.",
    link: "#"
  }
];

// أضف كل صور الترجمة تلقائيًا لمعرض الأعمال
const translationWorks = translationFilenames.map((name, idx) => ({
  title: "ترجمة رقم " + (idx + 1),
  image: `translation/${name}`,
  tags: ["translation"],
  desc: "عمل ترجمة رقم " + (idx + 1),
  link: `translation/${name}`
}));
portfolioList.push(...translationWorks);

function renderPortfolio(filter="all") {
  const gallery = document.getElementById('portfolio-gallery');
  if (!gallery) return;
  gallery.innerHTML = "";
  let filtered = filter==="all"
    ? portfolioList
    : portfolioList.filter(item => item.tags.includes(filter));
  if(filtered.length === 0) {
    gallery.innerHTML = '<div style="color:#888;text-align:center;width:100%">لا توجد أعمال في هذا التصنيف حالياً.</div>';
    return;
  }
  filtered.forEach(item => {
    gallery.innerHTML += `
      <div class="portfolio-item">
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-tags">${item.tags.map(tag=>`<span class="portfolio-tag">${tag}</span>`).join(' ')}</div>
        <div><strong>${item.title}</strong></div>
        <div style="font-size:0.98rem; color:#333;margin:6px 0">${item.desc}</div>
        ${item.link ? `<a class="portfolio-link" href="${item.link}" target="_blank">عرض المشروع</a>` : ''}
      </div>
    `;
  });
}
document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();
  document.querySelectorAll('.portfolio-filter').forEach(btn => {
    btn.addEventListener('click', function(){
      document.querySelectorAll('.portfolio-filter').forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
      renderPortfolio(this.dataset.filter);
    });
  });
});

// ========== مكتبة صور الترجمة ==========
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById('open-translation-gallery');
  if (btn) {
    btn.onclick = function() {
      if (document.getElementById('translation-gallery-modal-bg')) {
        document.getElementById('translation-gallery-modal-bg').remove();
      }
      let modal = document.createElement('div');
      modal.id = 'translation-gallery-modal-bg';
      modal.innerHTML = `
        <div id="translation-gallery-modal-box">
          <button id="translation-gallery-modal-close" title="إغلاق">&times;</button>
          <div class="translation-gallery-grid">
            ${translationFilenames.map((name, idx) => `
              <div class="translation-gallery-img-wrap">
                <img 
                  class="translation-gallery-img"
                  src="translation/${name}"
                  data-big="translation/${name}"
                  data-title="ترجمة رقم ${(idx + 1)}"
                  alt="ترجمة رقم ${(idx + 1)}"
                  loading="lazy"
                  />
                <div class="translation-gallery-img-title">ترجمة رقم ${(idx + 1)}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      document.getElementById('translation-gallery-modal-close').onclick = () => modal.remove();
      modal.onclick = function(e) {
        if (e.target === modal) modal.remove();
      }
      // تكبير الصورة عند الضغط عليها
      modal.querySelectorAll('.translation-gallery-img').forEach(img => {
        img.onclick = function(e) {
          e.stopPropagation();
          showBigTranslationImg(this.dataset.big, this.dataset.title);
        }
      });
    };
  }

  window.showBigTranslationImg = function(imgSrc, title) {
    if (document.getElementById('translation-big-img-modal-bg')) {
      document.getElementById('translation-big-img-modal-bg').remove();
    }
    let m = document.createElement('div');
    m.id = 'translation-big-img-modal-bg';
    m.innerHTML = `
      <div id="translation-big-img-modal-box">
        <button id="translation-big-img-modal-close" title="إغلاق">&times;</button>
        <img id="translation-big-img-modal-img" src="${imgSrc}" alt="${title}" />
        <div id="translation-big-img-modal-title">${title}</div>
      </div>
    `;
    document.body.appendChild(m);
    document.getElementById('translation-big-img-modal-close').onclick = () => m.remove();
    m.onclick = function(e) {
      if (e.target === m) m.remove();
    }
  }
});

// ========== شهادات العملاء ==========
const testimonialsList = [
  {
    name: "محمد علي",
    role: "مدير مشاريع",
    avatar: "https://ui-avatars.com/api/?name=محمد+علي&background=0d6efd&color=fff",
    content: "خدمة احترافية وسرعة في الإنجاز، أنصح بالتعامل معه بشدة."
  },
  {
    name: "سارة أحمد",
    role: "طالبة ماجستير",
    avatar: "https://ui-avatars.com/api/?name=سارة+أحمد&background=0d6efd&color=fff",
    content: "الترجمة دقيقة جدًا والتدريس ممتع وسهل الفهم."
  },
  {
    name: "أحمد يوسف",
    role: "مصمم جرافيك",
    avatar: "https://ui-avatars.com/api/?name=أحمد+يوسف&background=0d6efd&color=fff",
    content: "التعامل راقٍ جدًا، والتسليم في الوقت المحدد."
  }
];
function renderTestimonials() {
  const wrapper = document.getElementById('testimonials-wrapper');
  if (!wrapper) return;
  wrapper.innerHTML = "";
  testimonialsList.forEach(t => {
    wrapper.innerHTML += `
      <div class="swiper-slide">
        <div class="testimonial-card">
          <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar">
          <div class="testimonial-client">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
          <div class="testimonial-content">${t.content}</div>
        </div>
      </div>
    `;
  });
  new Swiper('.testimonials-swiper', {
    loop: true,
    autoplay: { delay: 4500 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true }
  });
}
document.addEventListener('DOMContentLoaded', renderTestimonials);

// ========== شهادات رقمية ==========
const certificatesList = [
  {
    title: "IELTS Academic",
    org: "British Council",
    img: "certificate1.png"
  },
  {
    title: "مترجم محترف",
    org: "جامعة بغداد",
    img: "certificate2.png"
  },
  {
    title: "دبلوم تطوير مواقع",
    org: "Coursera",
    img: "certificate3.png"
  }
];
function renderCertificates() {
  const gallery = document.getElementById('certificates-gallery');
  if (!gallery) return;
  gallery.innerHTML = "";
  certificatesList.forEach(c => {
    gallery.innerHTML += `
      <div class="certificate-card">
        <img src="${c.img}" alt="${c.title}">
        <div class="certificate-title">${c.title}</div>
        <div class="certificate-org">${c.org}</div>
      </div>
    `;
  });
}
document.addEventListener('DOMContentLoaded', renderCertificates);

// ========== FAQ ==========
const faqList = [
  {
    q: "هل يمكن الحصول على ترجمة مستعجلة؟",
    a: "نعم، يمكنني تنفيذ الترجمات العاجلة حسب الاتفاق."
  },
  {
    q: "هل تقدم دروساً عبر الإنترنت؟",
    a: "بكل تأكيد! الدروس متاحة حضورياً وعن بعد عبر Zoom أو Google Meet."
  },
  {
    q: "ما طرق الدفع المتاحة؟",
    a: "تحويل بنكي، بايبال، زين كاش، أو حسب الاتفاق."
  }
];
function renderFAQ() {
  const faqWrap = document.getElementById('faq-list');
  if (!faqWrap) return;
  faqWrap.innerHTML = "";
  faqList.forEach((f, i) => {
    faqWrap.innerHTML += `
      <div class="faq-item${i===0 ? " open":""}">
        <div class="faq-question">${f.q} <span><i class="fa fa-chevron-down"></i></span></div>
        <div class="faq-answer">${f.a}</div>
      </div>
    `;
  });
  faqWrap.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function(){
      this.parentElement.classList.toggle('open');
    });
  });
}
document.addEventListener('DOMContentLoaded', renderFAQ);

// ========== المدونة ==========
const blogList = [
  {
    title: "أهمية إتقان اللغة الإنجليزية اليوم",
    excerpt: "تعرف على سر النجاح الدراسي والوظيفي بإتقان الإنجليزية.",
    meta: "نُشر في 2024-05-01",
    link: "#"
  },
  {
    title: "10 نصائح لترجمة احترافية",
    excerpt: "دليلك العملي للحصول على ترجمة دقيقة ومميزة.",
    meta: "نُشر في 2024-04-21",
    link: "#"
  },
  {
    title: "كيف تختار شعاراً لعملك؟",
    excerpt: "خطوات عملية لتصميم شعار يجذب العملاء.",
    meta: "نُشر في 2024-03-30",
    link: "#"
  }
];
function renderBlog() {
  const blogWrap = document.getElementById('blog-list');
  if (!blogWrap) return;
  blogWrap.innerHTML = "";
  blogList.forEach(b => {
    blogWrap.innerHTML += `
      <div class="blog-card">
        <div class="blog-title">${b.title}</div>
        <div class="blog-meta">${b.meta}</div>
        <div class="blog-excerpt">${b.excerpt}</div>
        <a class="blog-link" href="${b.link}" target="_blank">اقرأ المزيد</a>
      </div>
    `;
  });
}
document.addEventListener('DOMContentLoaded', renderBlog);

// ========== مكتبة الملفات ==========
const resourcesList = [
  {
    title: "دليل قواعد اللغة الإنجليزية",
    icon: "fa-solid fa-book",
    link: "#"
  },
  {
    title: "نموذج سيرة ذاتية احترافي",
    icon: "fa-solid fa-file-pdf",
    link: "#"
  },
  {
    title: "ملف تدريبات محادثة",
    icon: "fa-solid fa-comments",
    link: "#"
  }
];
function renderResources() {
  const resWrap = document.getElementById('resources-list');
  if (!resWrap) return;
  resWrap.innerHTML = "";
  resourcesList.forEach(r => {
    resWrap.innerHTML += `
      <div class="resource-card">
        <i class="${r.icon}"></i>
        <div class="resource-title">${r.title}</div>
        <a class="resource-link" href="${r.link}" target="_blank">تحميل</a>
      </div>
    `;
  });
}
document.addEventListener('DOMContentLoaded', renderResources);

// ========== مشاركة الصفحة ==========
document.querySelectorAll('.share-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: "تعرف على خدماتي في الترجمة والتدريس وغيرها!",
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      Toastify({ text: "تم نسخ رابط الصفحة!", duration: 2500, gravity: "top", position: "right", backgroundColor: "#004085" }).showToast();
    }
  });
});

// ========== QR Code ==========
document.querySelectorAll('.qr-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    let modal = document.getElementById('qr-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'qr-modal';
      modal.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:#0008;z-index:3000;display:flex;align-items:center;justify-content:center;';
      modal.innerHTML = `
        <div style="background:#fff;padding:35px 27px;border-radius:19px;box-shadow:0 4px 28px #0004;position:relative;">
          <span id="close-qr" style="position:absolute;top:8px;right:11px;cursor:pointer;font-size:1.4rem;color:#888;">&times;</span>
          <h3 style="margin-bottom:11px;color:#004085;font-weight:900;font-size:1.2rem;">QR لموقعي</h3>
          <canvas id="qr-canvas"></canvas>
          <div style="text-align:center;margin-top:8px;color:#004085;font-size:1rem">${window.location.href}</div>
        </div>`;
      document.body.appendChild(modal);
      document.getElementById('close-qr').onclick = () => modal.remove();
      const qr = new QRious({
        element: document.getElementById('qr-canvas'),
        value: window.location.href,
        size: 180
      });
    }
  });
});

// ========== فيديو تعريفي ==========
window.showIntroVideo = function() {
  let modal = document.getElementById('intro-video-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'intro-video-modal';
    modal.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:#0008;z-index:3000;display:flex;align-items:center;justify-content:center;';
    modal.innerHTML = `
      <div style="background:#fff;padding:15px 13px;border-radius:15px;box-shadow:0 4px 28px #0004;position:relative;max-width:92vw;">
        <span id="close-intro" style="position:absolute;top:8px;right:11px;cursor:pointer;font-size:1.4rem;color:#888;">&times;</span>
        <h3 style="margin-bottom:11px;color:#004085;font-weight:900;font-size:1.2rem;">فيديو تعريفي</h3>
        <video controls style="width:320px;max-width:85vw;border-radius:12px;">
          <source src="intro.mp4" type="video/mp4">
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      </div>`;
    document.body.appendChild(modal);
    document.getElementById('close-intro').onclick = () => modal.remove();
  }
}

// ========== نموذج الاتصال (EmailJS) ==========
if (typeof emailjs !== "undefined") {
  emailjs.init('3LeuKhQS79R1bzV8R');
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      emailjs.sendForm('service_99phbw7', 'template_ej4j9nv', this)
        .then(() => {
          document.getElementById('contact-success').textContent = 'تم إرسال الرسالة بنجاح!';
          form.reset();
        }, (error) => {
          document.getElementById('contact-success').textContent = 'حدث خطأ أثناء الإرسال: ' + error.text;
        });
    });
  }
}

// ========== تعليقات الزوار (محلي) ==========
function getVisitorComments() {
  return JSON.parse(localStorage.getItem('visitorComments') || "[]");
}
function saveVisitorComments(comments) {
  localStorage.setItem('visitorComments', JSON.stringify(comments));
}
function renderVisitorComments() {
  const list = document.getElementById('visitor-comments-list');
  if(!list) return;
  const comments = getVisitorComments();
  list.innerHTML = "";
  if(comments.length === 0) {
    list.innerHTML = '<div class="empty-comments">لا توجد تعليقات بعد. كن أول من يعلق!</div>';
    return;
  }
  comments.slice().reverse().forEach(c => {
    const div = document.createElement('div');
    div.className = 'visitor-comment-box';
    div.innerHTML = `<div class="visitor-comment-header">
        <span class="visitor-comment-user"><i class="fa-solid fa-user"></i> ${c.name ? c.name : 'زائر'}</span>
        <span class="visitor-comment-date"><i class="fa-solid fa-clock"></i> ${c.date}</span>
      </div>
      <div class="visitor-comment-message">${c.message}</div>
    `;
    list.appendChild(div);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  renderVisitorComments();
  const form = document.getElementById('visitor-comment-form');
  if(form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('visitor-name').value.trim();
      const message = document.getElementById('visitor-comment').value.trim();
      if(message.length === 0) return;
      const now = new Date();
      const dateStr = now.toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' }) + ' - ' + now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute:'2-digit' });
      const comments = getVisitorComments();
      comments.push({ name, message, date: dateStr });
      saveVisitorComments(comments);
      this.reset();
      renderVisitorComments();
    });
  }
});

// ========== عرض السيرة الذاتية ==========
window.showCV = function() {
  window.open('Aba_AlHassan_Abbas_CV.pdf', '_blank');
}

// ========== إشعار نجاح عند فتح الصفحة ==========
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    Toastify({
      text: "مرحباً بك في موقعي الشخصي! 🚀",
      duration: 4200,
      gravity: "top",
      position: "right",
      backgroundColor: "#004085"
    }).showToast();
  }, 1400);
});

// ========== Scroll to section smoothly ==========
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) {
        target.scrollIntoView({behavior:'smooth'});
      }
    }
  });
});
