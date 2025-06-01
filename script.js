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
function setDarkMode(active) {
  document.body.classList.toggle('dark', active);
  if (modeBtn) {
    modeBtn.innerHTML = active
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  }
  localStorage.setItem('darkMode', active ? '1' : '0');
}
if (modeBtn) {
  modeBtn.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark'));
  });
  // تحميل الوضع الليلي من LocalStorage
  setDarkMode(localStorage.getItem('darkMode') === '1');
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

// ========== مكتبة الكتب الإنجليزية ==========
const allBooks = [
  { title: "Pride and Prejudice", author: "Jane Austen", pdf: "https://www.gutenberg.org/files/1342/1342-pdf.pdf" },
  { title: "Frankenstein", author: "Mary Shelley", pdf: "https://www.gutenberg.org/files/84/84-pdf.pdf" },
  { title: "Dracula", author: "Bram Stoker", pdf: "https://www.gutenberg.org/files/345/345-pdf.pdf" },
  { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", pdf: "https://www.gutenberg.org/files/1661/1661-pdf.pdf" },
  { title: "Alice’s Adventures in Wonderland", author: "Lewis Carroll", pdf: "https://www.gutenberg.org/files/11/11-pdf.pdf" },
  { title: "Moby Dick", author: "Herman Melville", pdf: "https://www.gutenberg.org/files/2701/2701-pdf.pdf" },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", pdf: "https://www.gutenberg.org/files/174/174-pdf.pdf" },
  { title: "Great Expectations", author: "Charles Dickens", pdf: "https://www.gutenberg.org/files/1400/1400-pdf.pdf" },
  { title: "A Tale of Two Cities", author: "Charles Dickens", pdf: "https://www.gutenberg.org/files/98/98-pdf.pdf" },
  { title: "Emma", author: "Jane Austen", pdf: "https://www.gutenberg.org/files/158/158-pdf.pdf" },
  { title: "The Time Machine", author: "H. G. Wells", pdf: "https://www.gutenberg.org/files/35/35-pdf.pdf" },
  { title: "The Call of the Wild", author: "Jack London", pdf: "https://www.gutenberg.org/files/215/215-pdf.pdf" },
  { title: "The Jungle Book", author: "Rudyard Kipling", pdf: "https://www.gutenberg.org/files/236/236-pdf.pdf" },
  { title: "The War of the Worlds", author: "H. G. Wells", pdf: "https://www.gutenberg.org/files/36/36-pdf.pdf" },
  { title: "Ulysses", author: "James Joyce", pdf: "https://www.gutenberg.org/files/4300/4300-pdf.pdf" },
  { title: "Walden", author: "Henry David Thoreau", pdf: "https://www.gutenberg.org/files/205/205-pdf.pdf" },
  { title: "Utopia", author: "Thomas More", pdf: "https://www.gutenberg.org/files/2130/2130-pdf.pdf" },
  { title: "The Prince", author: "Niccolò Machiavelli", pdf: "https://www.gutenberg.org/files/1232/1232-pdf.pdf" },
  { title: "Siddhartha", author: "Hermann Hesse", pdf: "https://www.gutenberg.org/files/2500/2500-pdf.pdf" },
  { title: "Heart of Darkness", author: "Joseph Conrad", pdf: "https://www.gutenberg.org/files/526/526-pdf.pdf" }
];
// تكرار نفس الكتب حتى 500 كتاب مع اسم واضح لكل كتاب
const totalBooksDesired = 500;
const baseBooks = allBooks.length;
for(let i=baseBooks+1; i<=totalBooksDesired; i++) {
  let baseBook = allBooks[(i-1) % baseBooks];
  allBooks.push({
    title: baseBook.title + " (نسخة رقم " + Math.ceil(i/baseBooks) + ")", 
    author: baseBook.author,
    pdf: baseBook.pdf
  });
}

const PAGE_SIZE = 20;
let filteredBooks = allBooks.slice();
let currentPage = 1;
let totalPages = 1;

function renderBooks(books, page = 1) {
  const booksListDiv = document.getElementById('books-list');
  if (!booksListDiv) return;
  booksListDiv.innerHTML = "";
  totalPages = Math.ceil(books.length / PAGE_SIZE);
  currentPage = Math.max(1, Math.min(page, totalPages));
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const booksToShow = books.slice(start, end);

  if (booksToShow.length === 0) {
    booksListDiv.innerHTML = "<div style='color:#b00;margin:24px;'>لم يتم العثور على كتب بهذه الكلمات.</div>";
    const paginationDiv = document.getElementById('book-pagination');
    if (paginationDiv) paginationDiv.innerHTML = "";
    return;
  }
  booksToShow.forEach((book, idx) => {
    booksListDiv.innerHTML += `
      <div class="book-card">
        <h4>${start + idx + 1}. ${book.title}</h4>
        <small>by ${book.author}</small>
        <a href="${book.pdf}" target="_blank" class="btn-cv" download>تحميل PDF</a>
      </div>
    `;
  });
  renderPagination(books, page);
}

function renderPagination(books, page) {
  const paginationDiv = document.getElementById('book-pagination');
  if (!paginationDiv) return;
  paginationDiv.innerHTML = "";
  const nPages = Math.ceil(books.length / PAGE_SIZE);
  if (nPages <= 1) return;
  for (let i = 1; i <= nPages; i++) {
    const btn = document.createElement('button');
    btn.className = "book-pagination-btn" + (i === page ? " active" : "");
    btn.innerText = i;
    btn.onclick = function() {
      renderBooks(filteredBooks, i);
      document.getElementById('english-books').scrollIntoView({behavior:"smooth"});
    };
    paginationDiv.appendChild(btn);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // زر إظهار/إخفاء مكتبة الكتب
  const btn = document.getElementById('toggle-books-btn');
  const box = document.getElementById('books-library');
  const searchArea = document.getElementById('book-search-area');
  const searchInput = document.getElementById('book-search-input');
  let opened = false;
  if (btn && box && searchArea) {
    btn.onclick = function() {
      opened = !opened;
      if(opened) {
        box.style.display = "block";
        searchArea.style.display = "block";
        btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> إخفاء مكتبة الكتب المجانية';
        setTimeout(() => { box.style.maxHeight = box.scrollHeight + "px"; }, 15);
        filteredBooks = allBooks.slice();
        renderBooks(filteredBooks, 1);
      } else {
        box.style.maxHeight = "0";
        searchArea.style.display = "none";
        btn.innerHTML = '<i class="fa-solid fa-eye"></i> عرض مكتبة الكتب المجانية';
        setTimeout(() => { box.style.display = "none"; }, 350);
      }
    };
    box.style.maxHeight = "0";
    box.style.overflow = "hidden";
  }
  if (searchInput) {
    searchInput.addEventListener("input", function() {
      const val = searchInput.value.trim().toLowerCase();
      filteredBooks = (val)
        ? allBooks.filter(book =>
          book.title.toLowerCase().includes(val) ||
          book.author.toLowerCase().includes(val)
        )
        : allBooks.slice();
      renderBooks(filteredBooks, 1);
    });
  }
});

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
// أضف صور الترجمة لمعرض الأعمال
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

  // ========== زر إظهار/إخفاء معرض الأعمال ==========
  const btn = document.getElementById('toggle-portfolio-btn');
  const content = document.getElementById('portfolio-content');
  let opened = false; // مغلق افتراضياً

  if(content && btn) {
    content.style.maxHeight = "0";
    btn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    btn.onclick = function() {
      opened = !opened;
      if (opened) {
        content.style.maxHeight = content.scrollHeight + "px";
        btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      } else {
        content.style.maxHeight = "0";
        btn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      }
    };
  }
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
  },
  {
    name: "هبة خالد",
    role: "كاتبة محتوى",
    avatar: "https://ui-avatars.com/api/?name=هبة+خالد&background=0d6efd&color=fff",
    content: "سعدت بالعمل معه، الترجمة ممتازة والاتصال سلس."
  },
  {
    name: "زهراء سعد",
    role: "باحث أكاديمي",
    avatar: "https://ui-avatars.com/api/?name=عمر+سعد&background=0d6efd&color=fff",
    content: "مهني ودقيق بالمواعيد، أنصح بالتعامل معه."
  },
  {
    name: "دعاء فؤاد",
    role: "طالبة جامعية",
    avatar: "https://ui-avatars.com/api/?name=دعاء+فؤاد&background=0d6efd&color=fff",
    content: "استفدت كثيرًا من الدروس، شرح رائع وسهل."
  },
  {
    name: "علي حسين",
    role: "باحث أكاديمي",
    avatar: "https://ui-avatars.com/api/?name=علي+حسين&background=0d6efd&color=fff",
    content: "الترجمة الأكاديمية ممتازة ومطابقة للمصادر."
  },
  {
    name: "فرح سامي",
    role: "مديرة موارد بشرية",
    avatar: "https://ui-avatars.com/api/?name=فرح+سامي&background=0d6efd&color=fff",
    content: "دقة واحترافية في التعامل مع المستندات."
  },
  {
    name: "أمجد علاء",
    role: "مصور فوتوغرافي",
    avatar: "https://ui-avatars.com/api/?name=أمجد+علاء&background=0d6efd&color=fff",
    content: "خدمة سريعة وجودة رائعة في التصاميم."
  },
  {
    name: "نجوى مازن",
    role: "طالبة",
    avatar: "https://ui-avatars.com/api/?name=نجوى+مازن&background=0d6efd&color=fff",
    content: "خبرة ممتازة في الترجمة والتعليم، أنصح الجميع."
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
  if(window.Swiper) {
    new Swiper('.testimonials-swiper', {
      loop: true,
      autoplay: { delay: 4500 },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      pagination: { el: '.swiper-pagination', clickable: true }
    });
  }
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
      if (window.Toastify) {
        Toastify({ text: "تم نسخ رابط الصفحة!", duration: 2500, gravity: "top", position: "right", backgroundColor: "#004085" }).showToast();
      } else {
        alert("تم نسخ رابط الصفحة!");
      }
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
      if (window.QRious) {
        const qr = new QRious({
          element: document.getElementById('qr-canvas'),
          value: window.location.href,
          size: 180
        });
      }
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
  // عرض السيرة الذاتية كصورة في نافذة مودال
  if (document.getElementById('cv-modal-bg')) {
    document.getElementById('cv-modal-bg').remove();
  }
  let modal = document.createElement('div');
  modal.id = 'cv-modal-bg';
  modal.innerHTML = `
    <div id="cv-modal-box" style="background:#fff;border-radius:18px;box-shadow:0 8px 32px #0005;max-width:96vw;max-height:94vh;display:flex;flex-direction:column;align-items:flex-end;position:relative;">
      <button id="cv-modal-close" title="إغلاق" style="position:absolute;top:11px;right:15px;font-size:2rem;color:#444;background:none;border:none;cursor:pointer;z-index:2;transition:color 0.15s;">&times;</button>
      <img id="cv-modal-img" src="images/cv.jpg" alt="السيرة الذاتية" style="display:block;max-width:88vw;max-height:80vh;margin:46px auto 16px auto;border-radius:10px;box-shadow:0 1px 24px #0002;background:#f6f6f6;object-fit:contain;width:auto;height:auto;" />
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('cv-modal-close').onclick = () => modal.remove();
  modal.onclick = function(e) {
    if (e.target === modal) modal.remove();
  }
}

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

// ========== أزرار نسخ أرقام الدعم الذهبي ==========
document.querySelectorAll('.support-gold-copy-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var numberElem = btn.closest('.support-gold-card').querySelector('.support-gold-number');
    var number = numberElem ? numberElem.textContent.trim() : '';
    if (number) {
      navigator.clipboard.writeText(number).then(function() {
        btn.textContent = '✔ تم النسخ!';
        setTimeout(function() {
          btn.textContent = 'نسخ';
        }, 1200);
      }, function() {
        btn.textContent = 'حدث خطأ';
        setTimeout(function() {
          btn.textContent = 'نسخ';
        }, 1200);
      });
    }
  });
});
  
});
