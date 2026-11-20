/* ============================================================
   1. 你的作品清單：日後新增作品，只需要在這裡複製一個 { ... } 來改
   ------------------------------------------------------------
   title    作品名稱
   category 分類：Motion / GIF / Video / Illustration / Interactive
   year     年份
   type     放大時的格式："image"（圖片）、"gif"、"video"（mp4）、"embed"（YouTube/Vimeo 連結）
   thumb    卡片縮圖，例如 "images/work-01.jpg"（留空 "" 會顯示彩色佔位）
   preview  Hover 時播放的預覽，.mp4 / .webm / .gif，例如 "previews/work-01.mp4"（可留空）
   full     放大後顯示的檔案或 embed 網址（留空就用 thumb）
   desc     放大時顯示的說明文字
   featured true = 顯示在首頁「Featured projects」（建議只設 2 個）
   hue      佔位顏色（0–360），只在沒有縮圖時使用
   ============================================================ */
// ★ 改這裡 14：下面整個 works 清單就是你的作品資料（標題、分類、年份、檔案路徑、說明）
const works = [
  { title: "Project one", category: "Motion", year: 2026, type: "video", thumb: "", preview: "", full: "", desc: "A short description of the project, your role and the tools used.", featured: true, hue: 220 },
  { title: "Project two", category: "Illustration", year: 2026, type: "image", thumb: "", preview: "", full: "", desc: "A short description of the project, your role and the tools used.", featured: true, hue: 340 },
  { title: "Loop study 01", category: "GIF", year: 2025, type: "gif", thumb: "", preview: "", full: "", desc: "Looping animation experiment.", hue: 40 },
  { title: "Character sheet", category: "Illustration", year: 2025, type: "image", thumb: "", preview: "", full: "", desc: "Character design exploration.", hue: 160 },
  { title: "Title sequence", category: "Video", year: 2025, type: "video", thumb: "", preview: "", full: "", desc: "Title sequence for a short film.", hue: 270 },
  { title: "Background paint", category: "Illustration", year: 2024, type: "image", thumb: "", preview: "", full: "", desc: "Environment painting.", hue: 190 },
  { title: "Glitch loop", category: "GIF", year: 2024, type: "gif", thumb: "", preview: "", full: "", desc: "Visual experiment.", hue: 10 },
  { title: "Interactive sketch", category: "Interactive", year: 2026, type: "image", thumb: "", preview: "", full: "", desc: "An interactive piece, coming soon.", hue: 100 }
];

/* ============================================================
   2. 小工具
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const isTouch = window.matchMedia("(hover: none)").matches;   // 手機/平板：沒有 Hover
const isVideoFile = (url) => /\.(mp4|webm|mov)$/i.test(url);

// 產生卡片的縮圖區：有縮圖就用圖片，沒有就用彩色佔位
function mediaHTML(w) {
  return w.thumb
    ? `<img src="${w.thumb}" alt="${w.title}" loading="lazy">`
    : `<div class="ph" style="--h:${w.hue || 220}"></div>`;
}

/* ============================================================
   3. 名字回到左上角（捲動超過 Hero 的 25% 就切換）
   ============================================================ */
function updateBrand() {
  document.body.classList.toggle("compact", window.scrollY > window.innerHeight * 0.25);
}
window.addEventListener("scroll", updateBrand, { passive: true });
updateBrand();

/* ============================================================
   4. 輕微的捲動出現效果
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12 });

/* ============================================================
   5. 預覽播放：電腦 = Hover；手機 = 滑到畫面中央時自動播放
   ============================================================ */
function startPreview(el, w) {
  if (!w.preview || el._pv) return;
  const box = el.querySelector(".media");
  let node;
  if (isVideoFile(w.preview)) {
    node = document.createElement("video");
    node.src = w.preview; node.muted = true; node.loop = true; node.playsInline = true;
    node.addEventListener("playing", () => node.classList.add("ready"));
    node.play().catch(() => {});
  } else {
    node = document.createElement("img");
    node.src = w.preview;
    node.addEventListener("load", () => node.classList.add("ready"));
  }
  node.className = "pv";
  box.appendChild(node);
  el._pv = node;
}
function stopPreview(el) {
  if (el._pv) { el._pv.remove(); el._pv = null; }
}

const touchObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    const w = works[e.target.dataset.index];
    e.isIntersecting ? startPreview(e.target, w) : stopPreview(e.target);
  });
}, { rootMargin: "-30% 0px -30% 0px" });   // 只有進入畫面中間 40% 才播放，省流量

function attachPreview(el, w) {
  if (isTouch) {
    touchObserver.observe(el);
  } else {
    el.addEventListener("mouseenter", () => startPreview(el, w));
    el.addEventListener("mouseleave", () => stopPreview(el));
  }
}

/* ============================================================
   6. 渲染：Featured projects 與 Gallery
   ============================================================ */
function renderShowcase() {
  const list = $("#showcase-list");
  works.forEach((w, i) => {
    if (!w.featured) return;
    const el = document.createElement("article");
    el.className = "show reveal";
    el.dataset.index = i;
    el.tabIndex = 0;
    el.innerHTML = `
      <div class="media">${mediaHTML(w)}</div>
      <div><h3>${w.title}</h3><p class="kind">${w.category}, ${w.year}</p><p>${w.desc}</p></div>`;
    el.addEventListener("click", () => openLightbox(i));
    el.addEventListener("keydown", (e) => { if (e.key === "Enter") openLightbox(i); });
    attachPreview(el, w);
    list.appendChild(el);
    revealObserver.observe(el);
  });
}

function renderGrid() {
  const grid = $("#grid");
  works.forEach((w, i) => {
    const el = document.createElement("article");
    el.className = "card reveal";
    el.dataset.index = i;
    el.dataset.category = w.category;
    el.tabIndex = 0;
    el.innerHTML = `
      <div class="media">${mediaHTML(w)}</div>
      <div class="meta"><strong>${w.title}</strong><span>${w.category}, ${w.year}</span></div>`;
    el.addEventListener("click", () => openLightbox(i));
    el.addEventListener("keydown", (e) => { if (e.key === "Enter") openLightbox(i); });
    attachPreview(el, w);
    grid.appendChild(el);
    revealObserver.observe(el);
  });
}

/* 分類選單：根據作品自動產生，不用手動維護 */
function renderFilters() {
  const box = $("#filters");
  const cats = ["All", ...new Set(works.map((w) => w.category))];
  cats.forEach((c, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = c;
    if (i === 0) b.classList.add("active");
    b.addEventListener("click", () => {
      box.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      document.querySelectorAll("#grid .card").forEach((card) => {
        card.classList.toggle("hide", c !== "All" && card.dataset.category !== c);
      });
    });
    box.appendChild(b);
  });
}

/* Grid 大小切換 */
$("#density").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  $("#density").querySelectorAll("button").forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  $("#grid").dataset.size = b.dataset.size;
});

/* ============================================================
   7. Lightbox：點擊放大
   ============================================================ */
const lb = $("#lightbox");
const stage = $("#lb-stage");
let current = 0;

function openLightbox(i) {
  current = (i + works.length) % works.length;
  const w = works[current];
  const src = w.full || w.thumb;
  stage.innerHTML = "";

  let node;
  if (!src) {
    node = document.createElement("div"); node.className = "ph"; node.style.setProperty("--h", w.hue || 220);
  } else if (w.type === "video") {
    node = document.createElement("video");
    node.src = src; node.controls = true; node.autoplay = true; node.loop = true; node.playsInline = true;
  } else if (w.type === "embed") {
    node = document.createElement("iframe");
    node.src = src; node.allow = "autoplay; fullscreen; picture-in-picture"; node.allowFullscreen = true;
  } else {
    node = document.createElement("img"); node.src = src; node.alt = w.title;
  }
  stage.appendChild(node);

  $("#lb-title").textContent = `${w.title} (${w.category}, ${w.year})`;
  $("#lb-desc").textContent = w.desc || "";
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function closeLightbox() {
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
  setTimeout(() => { stage.innerHTML = ""; }, 350);   // 清掉影片，停止播放
}

$("#lb-close").addEventListener("click", closeLightbox);
$("#lb-prev").addEventListener("click", () => openLightbox(current - 1));
$("#lb-next").addEventListener("click", () => openLightbox(current + 1));
lb.addEventListener("click", (e) => { if (e.target === lb || e.target === stage) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") openLightbox(current - 1);
  if (e.key === "ArrowRight") openLightbox(current + 1);
});

/* ============================================================
   7.5 手機版全螢幕選單
   ============================================================ */
const menuBtn = $("#menu-btn");
const menu = $("#menu");

function setMenu(open) {
  menu.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "Close" : "Menu";
}
menuBtn.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));  // 點選項目後自動收起並跳到該區
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
window.addEventListener("resize", () => { if (window.innerWidth > 800) setMenu(false); });

/* ============================================================
   8. 啟動
   ============================================================ */
renderShowcase();
renderFilters();
renderGrid();
$("#year").textContent = new Date().getFullYear();
