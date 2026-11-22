/* ============================================================
   ★ 改這裡 A：首頁幻燈片（每一張是一個 { ... }，可增減）
   src      圖片或影片（mp4 會靜音循環播放）。檔案還沒放進去時，畫面會顯示「Add 檔名」提示
   caption  圖片文字說明（不會顯示在畫面上）
   hue      佔位顏色（0–360），只在檔案還沒放進去時使用
   ============================================================ */
const slides = [
  { src: "images/hero.gif", caption: "Character design", hue: 330 },
  { src: "images/BucketHead_VisDev_Painting.JPG", caption: "Visual development", hue: 220 },
  { src: "images/KellyDontGo_BackgroundArt.JPG", caption: "Background", hue: 150 },
  { src: "images/TheKappa_TheTurtle_&_TheFrog.JPG", caption: "Storyboard", hue: 270 },
  { src: "images/Blender_room.JPG", caption: "Animation", hue: 170 },
  { src: "images/Alpaca_market.JPG", caption: "Illustration", hue: 20 }
];
const SLIDE_SECONDS = 4;   // 每張停留幾秒

/* ★ 改這裡 G：網站名稱（專案頁的瀏覽器分頁標題會用到） */
const SITE_NAME = "Alvin Chan";

/* ============================================================
   ★ 改這裡 E：用自己的手寫簽名 Logo 取代左上角文字（目前沒有啟用，文字字體保持不變）
   做法：把 Logo 存成「白色、透明背景」的 SVG 或 PNG，放進 images 資料夾，
         然後把下面改成 LOGO_SRC = "images/logo.svg";
   想換回文字：把它改回 "" 就好。檔案找不到時會自動換回文字。
   ============================================================ */
const LOGO_SRC = "";

/* ★ 改這裡 B：Work 頁的分類選單（作品的 category 必須和這裡其中一個完全一樣） */
const CATEGORIES = ["Character design", "Visual development", "Background", "Storyboard", "Animation"];

/* ============================================================
   ★ 改這裡 F：作品縮圖怎麼放進 Grid（作品比例和格子不合的時候）
   "crop"     填滿格子，多出來的裁掉（最整齊。可用每個作品的 focus 決定保留哪裡）
   "fit"      整張圖完整放進格子，不裁切，空白處是淡色底（格子大小一致，仍然整齊）
   "original" 每張縮圖用自己的原始比例，不裁切也沒有空白，高低錯落排列（像 Behance）
   ============================================================ */
const THUMB_STYLE = "crop";

/* ============================================================
   ★ 改這裡 C：你的作品清單
   ------------------------------------------------------------
   title      作品名稱
   category   分類（要和上面 CATEGORIES 其中一個一樣）
   year       年份
   thumb      Work 頁的封面縮圖。也可以是 .mp4 / .webm（靜音自動循環）或 .gif
   items      點進作品頁之後，從上往下依序顯示的內容（圖片、mp4、YouTube / Vimeo 網址）：
                "images/a.jpg"                          只放檔案
                { src: "images/a.jpg", note: "說明" }   檔案 + 你對這張圖的說明（顯示在圖片下方）
              note 裡用 \n 換行可以分段。note 留空 "" 就不顯示說明。
              • 只有 1 個 = 單張作品；2 個以上 = 系列作品（縮圖右下角會出現疊層圖示與數量）
   desc       作品頁最上面的整體說明（用 \n 換行可以分段）。留空 "" 就不顯示
   role       （選用）你的職責，例如 "Visual development, storyboard"
   tools      （選用）使用的軟體，例如 "Photoshop, Procreate"
   spotlight  true = 重點作品（Work 頁最上面兩個大圖，建議只設 2 個）
   slug       （選用）作品頁網址的名稱，例如 "bucket-head"。不寫會自動用標題產生
   hue        檔案還沒放進去時的佔位顏色
   ------------------------------------------------------------
   單一作品的縮圖選項（選用，加在作品裡）：
   focus: "50% 20%"   縮圖被裁切時，保留哪個位置（左右% 上下%）
   fit: "contain"     這個作品的縮圖完整顯示不裁切；fit: "cover" 則強制裁切
   ratio: "3/4"       這張縮圖的比例（THUMB_STYLE 是 "original" 時，不寫會自動依圖片原始比例）
   preview: "previews/x.mp4"   電腦版 Hover 時播放的短預覽
   ============================================================ */
const works = [
  { title: "Always Playsable", category: "Animation", year: 2026, spotlight: true, hue: 220,
    thumb: "images/AlwaysPlayable_Character_Titlecard_Updated-1.mp4",
    items: [
      { src: "images/VinylHouse_TitleCard.JPG", note: "" },
      { src: "images/VinylHouse_TheHat.JPG", note: "" },
      { src: "images/VinylHouse_WizbitConcept.JPG", note: "" },
      { src: "images/VinylHouse_AP_Storyboard_p1.JPG", note: "" },
      { src: "images/VinylHouse_AP_Storyboard_p2.JPG", note: "" },
      { src: "images/VinylHouse_AP_Storyboard_p3.JPG", note: "" },
      { src: "images/VinylHouse_AP_Storyboard_p4.JPG", note: "" },
      { src: "images/VinylHouse_AP_Storyboard_p5.JPG", note: "" },
      { src: "images/VinylHouse_Interior.JPG", note: "" },
      { src: "images/IMG_1383.JPG", note: "" }
    ],
    desc: "One or two sentences: what the project is, your role, and the tools you used." },
  { title: "Bucket Head", category: "Visual development", year: 2026, spotlight: true, hue: 340,
    thumb: "images/BucketHead_VisDev_Painting.JPG",
    items: [
      { src: "images/BucketHead_roof.JPG", note: "" },
      { src: "images/BucketHead_VisDev_Painting.JPG", note: "" },
      { src: "images/BucketHead_Interior.JPG", note: "" },
      { src: "images/BucketHead_trolley.JPG", note: "" },
      { src: "images/BucketHead_DinoRide.JPG", note: "" },
      { src: "images/BucketHead_concept_class.JPG", note: "" },
      { src: "images/BucketHead_concept_fight.JPG", note: "" },
      { src: "images/BoxPug_Character_Turnaround.JPG", note: "" },
      { src: "images/PPlate_Character_Turnaround.JPG", note: "" }
    ],
    desc: "One or two sentences: what the project is, your role, and the tools you used." },

  { title: "Character sheet", category: "Character design", year: 2025, hue: 40,
    thumb: "images/PiegOn.GIF", items: ["images/PiegOn.GIF"],
    desc: "Turnaround, expressions and poses." },
  { title: "Forest den", category: "Background", year: 2025, hue: 150,
    thumb: "images/TheKappa_TheTurtle_&_TheFrog.JPG", items: ["images/TheKappa_TheTurtle_&_TheFrog.JPG"],
    desc: "Environment painting." },
  { title: "Opening sequence", category: "Storyboard", year: 2025, hue: 270,
    thumb: "images/Alpaca.webp", 
    items: [
        { src: "images/Alpaca.webp", note: "" }, 
        { src: "images/Alpaca_enviroment.JPG", note: "" }, 
        { src: "images/Alpaca_market.JPG", note: "" }],
    desc: "Storyboard for an opening sequence." },
  { title: "Walk cycle", category: "Animation", year: 2024, hue: 190,
    thumb: "images/ATS_Mayday.JPG", items: ["images/ATS_Mayday.JPG"],
    desc: "Walk cycle study." },
  { title: "Mood keyframe (vertical example)", category: "Visual development", year: 2024, hue: 10, ratio: "3/4", focus: "50% 25%",
    thumb: "images/ATS_Spiderman2099.JPG", 
    items: [
         { src: "images/ATS_Spiderman2099.JPG", note: "" },
         { src: "images/ATS_SpiderPunk.JPG", note: "" },
         { src: "images/ATS_SpidermanMiles.JPG", note: "" }],
    desc: "A vertical piece: the thumbnail is cropped to keep the top, the full image opens uncropped." },
  { title: "Side character", category: "Character design", year: 2024, hue: 100,
    thumb: "images/Blender_room.JPG", 
    items: [
         { src: "images/Blender_room.JPG", note: "" }],
    desc: "Design exploration." },
  { title: "City street", category: "Background", year: 2024, hue: 200,
    thumb: "images/Luffy.GIF", 
    items: [
         { src: "images/Luffy.GIF", note: "" }],
    desc: "Background paint." },
  { title: "Short loop", category: "Animation", year: 2025, hue: 300,
    thumb: "images/Tekkonkinkreet_white.JPG", 
    items: [
         { src: "images/Tekkonkinkreet_white.JPG", note: "" }],
    desc: "A short animated loop (a single video shows a " },
  { title: "Thumbnails page", category: "Storyboard", year: 2023, hue: 60,
    thumb: "images/FilmStudy_01.JPG", 
    items: [
         { src: "images/FilmStudy_01.JPG", note: "" }],
    desc: "Storyboard page." },
  { title: "Colour script", category: "Visual development", year: 2023, hue: 250,
    thumb: "images/HongKong_City.JPG", 
    items: [
         { src:"images/HongKong_City.JPG", note:"" },
         { src:"images/HongKong_NightStudy.JPG", note:"" },
         { src:"images/CN_Tower.JPG", note:"" }],
    desc: "Colour script exploration." },
  { title: "Hero portrait (vertical, uncropped)", category: "Character design", year: 2023, hue: 350, fit: "contain", ratio: "3/4",
    thumb: "images/CharacterDesign_RockPaperScissors_new.jpg", 
    items: [
         { src:"images/CharacterDesign_RockPaperScissors_new.jpg", note:"" }],
    desc: "fit: contain shows the whole vertical image inside the tile." },
  { title: "Rooftop", category: "Background", year: 2023, hue: 130,
    thumb: "images/Teenage_Mutant_Ninja_Turtle_Donatello.JPG", 
    items: [
         { src:"images/Teenage_Mutant_Ninja_Turtle_Donatello.JPG", note:"" },
         { src:"images/Teenage_Mutant_Ninja_Turtle_Leonardo.JPG", note:"" },
         { src:"images/Teenage_Mutant_Ninja_Turtle_Mikey.webp", note:"" }, 
         { src:"images/Teenage_Mutant_Ninja_Turtle_Raphael.JPG", note:"" }],
    desc: "Background series, day to night." },
  { title: "Motion test", category: "Animation", year: 2023, hue: 210,
    thumb: "images/Cold_fried_rice.JPG", 
    items: [
         { src:"images/Cold_fried_rice.JPG", note:"" }],
    desc: "Motion test." }
];

/* ============================================================
   小工具（下面的程式碼一般不需要改）
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const isTouch = window.matchMedia("(hover: none)").matches;
const isVideoFile = (url) => /\.(mp4|webm|mov)(\?|$)/i.test(url);
const kindOf = (src) => (/youtube\.com|youtu\.be|vimeo\.com/i.test(src) ? "embed" : isVideoFile(src) ? "video" : "image");
function toEmbed(u) {   // 貼一般的 YouTube / Vimeo 網址就好，會自動轉成嵌入網址
  let m = u.match(/youtu\.be\/([\w-]{6,})/) || u.match(/youtube\.com\/watch\?v=([\w-]{6,})/);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  m = u.match(/vimeo\.com\/(\d+)/);
  if (m && !/player\./.test(u)) return `https://player.vimeo.com/video/${m[1]}`;
  return u;
}
function placeholderNode(w, label) {   // 檔案還沒放進去時的彩色佔位，上面寫著要放哪個檔案
  const d = document.createElement("div");
  d.className = "ph"; d.style.setProperty("--h", w.hue || 220);
  if (label) d.innerHTML = `<span class="hint">${label}</span>`;
  return d;
}
/* 每個作品的內容，統一整理成 { src, note } */
const itemsOf = (w) => (w.items && w.items.length ? w.items : [w.thumb]).filter(Boolean).map((it) => (typeof it === "string" ? { src: it } : it));
/* 作品頁網址用的名稱（標題轉成英文小寫加橫線；重複時自動加編號） */
const slugs = (() => {
  const seen = {};
  return works.map((w, i) => {
    let s = (w.slug || w.title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "work-" + (i + 1);
    if (seen[s]) s += "-" + (i + 1);
    seen[s] = 1;
    return s;
  });
})();
const ICON_STACK = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="5" y="2" width="9" height="9" rx="1.5"/><path d="M2.5 5.5v7a1 1 0 0 0 1 1h7"/></svg>';
const ICON_PLAY = '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M4 2.5v11l9-5.5z"/></svg>';
function seriesTag(w) {   // 系列 = 疊層圖示 + 數量；單一影片 = 播放圖示；單張圖 = 沒有標籤
  const items = itemsOf(w);
  if (items.length > 1) return `<span class="series-tag" aria-label="Series of ${items.length}">${ICON_STACK}${items.length}</span>`;
  if (items.length === 1 && kindOf(items[0].src) === "video") return `<span class="series-tag" aria-label="Video">${ICON_PLAY}</span>`;
  return "";
}
function mediaHTML(w) {
  if (!w.thumb) return `<div class="ph" style="--h:${w.hue || 220}"><span class="hint">Set thumb in script.js</span></div>`;
  if (isVideoFile(w.thumb)) return `<video src="${w.thumb}" muted loop playsinline preload="metadata"></video>`;
  return `<img src="${w.thumb}" alt="${w.title}" loading="lazy">`;
}
function addParagraphs(parent, text) {   // 文字用 \n 分段
  String(text || "").split(/\n+/).map((t) => t.trim()).filter(Boolean).forEach((t) => {
    const p = document.createElement("p"); p.textContent = t; parent.appendChild(p);
  });
}
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
}, { threshold: 0.08 });

/* 自己的 Logo（選用） */
if (LOGO_SRC) {
  const b = $(".brand");
  if (b) {
    const name = b.textContent.trim();
    b.classList.add("has-logo");
    b.innerHTML = `<img src="${LOGO_SRC}" alt="${name}">`;
    b.querySelector("img").addEventListener("error", () => { b.classList.remove("has-logo"); b.textContent = name; });
  }
}

/* 換頁淡出（用事件委派，之後動態產生的連結也適用） */
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href]");
  if (!a) return;
  const u = new URL(a.href, location.href);
  if (e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank" || u.origin !== location.origin) return;
  if (!/\.html$|\/$/.test(u.pathname) || u.pathname === location.pathname) return;
  e.preventDefault();
  document.body.classList.add("leaving");
  setTimeout(() => { location.href = a.href; }, 280);
});
window.addEventListener("pageshow", () => document.body.classList.remove("leaving"));

/* ============================================================
   手機全螢幕選單
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
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
window.addEventListener("resize", () => { if (window.innerWidth > 800) setMenu(false); });
if ($("#year")) $("#year").textContent = new Date().getFullYear();

/* ============================================================
   首頁：全螢幕幻燈片（點左半邊上一張，點右半邊下一張）
   ============================================================ */
function initSlides() {
  const box = $("#slides");
  if (!box) return;
  const dots = $("#dots");
  const els = [], dotEls = [];
  let cur = -1, timer = null;

  slides.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "slide";
    if (!s.src) el.appendChild(placeholderNode(s, "Set src in script.js"));
    else if (isVideoFile(s.src)) el.innerHTML = `<video src="${s.src}" muted loop playsinline preload="metadata"></video>`;
    else el.innerHTML = `<img src="${s.src}" alt="${s.caption || ""}" ${i ? 'loading="lazy"' : ""}>`;
    el.querySelectorAll("img, video").forEach((m) => m.addEventListener("error", () => m.replaceWith(placeholderNode(s, "Add " + s.src)), { once: true }));
    box.appendChild(el); els.push(el);

    const d = document.createElement("button");
    d.type = "button"; d.setAttribute("aria-label", `Slide ${i + 1}`);
    d.addEventListener("click", () => { go(i); restart(); });
    dots.appendChild(d); dotEls.push(d);
  });
  if (slides.length < 2) dots.style.display = "none";

  ["prev", "next"].forEach((dir) => {
    const z = document.createElement("button");
    z.type = "button"; z.className = "zone " + dir;
    z.setAttribute("aria-label", dir === "next" ? "Next slide" : "Previous slide");
    z.addEventListener("click", () => { go(cur + (dir === "next" ? 1 : -1)); restart(); });
    box.appendChild(z);
  });

  function go(i) {
    i = (i + slides.length) % slides.length;
    if (i === cur) return;
    if (cur >= 0) {
      els[cur].classList.remove("on"); dotEls[cur].classList.remove("on");
      const pv = els[cur].querySelector("video"); if (pv) setTimeout(() => pv.pause(), 1200);
    }
    cur = i;
    els[i].classList.add("on"); dotEls[i].classList.add("on");
    const v = els[i].querySelector("video"); if (v) v.play().catch(() => {});
  }
  function restart() { clearInterval(timer); if (slides.length > 1) timer = setInterval(() => go(cur + 1), SLIDE_SECONDS * 1000); }

  let x0 = null;
  box.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) { go(cur + (dx < 0 ? 1 : -1)); restart(); }
    x0 = null;
  });
  document.addEventListener("visibilitychange", () => { document.hidden ? clearInterval(timer) : restart(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { go(cur + 1); restart(); }
    if (e.key === "ArrowLeft") { go(cur - 1); restart(); }
  });
  go(0); restart();
}
initSlides();

/* ============================================================
   Work 頁：縮圖 Grid。點縮圖 = 進入該作品自己的頁面（project.html）
   ============================================================ */
const grid = $("#grid");
if (grid) {
  const spotGrid = $("#spot-grid");
  grid.classList.toggle("masonry", THUMB_STYLE === "original");

  const vidObserver = new IntersectionObserver((entries) => {   // 動態縮圖：進入畫面才播放
    entries.forEach((e) => { e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause(); });
  }, { threshold: 0.25 });

  function startPreview(el, w) {
    if (!w.preview || el._pv) return;
    let node;
    if (isVideoFile(w.preview)) {
      node = document.createElement("video");
      node.src = w.preview; node.muted = true; node.loop = true; node.playsInline = true;
      node.addEventListener("playing", () => node.classList.add("ready"));
      node.play().catch(() => {});
    } else {
      node = document.createElement("img"); node.src = w.preview;
      node.addEventListener("load", () => node.classList.add("ready"));
    }
    node.className = "pv";
    el.querySelector(".media").appendChild(node);
    el._pv = node;
  }
  function stopPreview(el) { if (el._pv) { el._pv.remove(); el._pv = null; } }
  const touchObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => { const w = works[e.target.dataset.index]; e.isIntersecting ? startPreview(e.target, w) : stopPreview(e.target); });
  }, { rootMargin: "-30% 0px -30% 0px" });
  function attachPreview(el, w) {
    if (isTouch || w.spotlight) touchObserver.observe(el);
    else { el.addEventListener("mouseenter", () => startPreview(el, w)); el.addEventListener("mouseleave", () => stopPreview(el)); }
  }

  function makeEl(w, i, cls, html) {
    const el = document.createElement("a");
    el.href = `project.html?p=${slugs[i]}`;
    el.className = cls + " reveal"; el.dataset.index = i; el.dataset.category = w.category;
    const fit = w.fit || (THUMB_STYLE === "fit" ? "contain" : "cover");
    if (fit === "contain") el.classList.add("contain");
    if (w.focus) el.style.setProperty("--focus", w.focus);
    if (w.ratio) el.style.setProperty("--ratio", w.ratio.replace(":", "/"));
    el.innerHTML = html;
    el.querySelectorAll(".media > img, .media > video").forEach((m) => {
      m.addEventListener("error", () => m.replaceWith(placeholderNode(w, "Add " + w.thumb)), { once: true });
      if (m.tagName === "VIDEO") vidObserver.observe(m);
      if (THUMB_STYLE === "original" && !w.ratio) {   // 依圖片原始比例決定縮圖形狀
        const apply = () => {
          const W = m.naturalWidth || m.videoWidth, H = m.naturalHeight || m.videoHeight;
          if (W && H) el.style.setProperty("--ratio", `${W} / ${H}`);
        };
        m.addEventListener(m.tagName === "VIDEO" ? "loadedmetadata" : "load", apply);
        if (m.complete && m.naturalWidth) apply();
      }
    });
    attachPreview(el, w);
    revealObserver.observe(el);
    return el;
  }

  works.forEach((w, i) => {
    if (w.spotlight) {
      spotGrid.appendChild(makeEl(w, i, "card spot",
        `<div class="media">${mediaHTML(w)}${seriesTag(w)}</div>
         <div class="meta"><strong>${w.title}</strong><span class="kind">${w.category}, ${w.year}</span><p>${w.desc || ""}</p></div>`));
    } else {
      grid.appendChild(makeEl(w, i, "card",
        `<div class="media">${mediaHTML(w)}${seriesTag(w)}</div><div class="meta"><strong>${w.title}</strong><span>${w.category}, ${w.year}</span></div>`));
    }
  });

  const fbox = $("#filters");
  const extra = [...new Set(works.map((w) => w.category))].filter((c) => !CATEGORIES.includes(c));
  ["All", ...CATEGORIES, ...extra].forEach((c, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = c;
    if (i === 0) b.classList.add("active");
    b.addEventListener("click", () => {
      fbox.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      document.querySelectorAll("#spot-grid .card, #grid .card").forEach((card) => card.classList.toggle("hide", c !== "All" && card.dataset.category !== c));
    });
    fbox.appendChild(b);
  });
}

/* ============================================================
   作品頁（project.html?p=作品名稱）：標題、說明，然後每張圖往下排，每張圖下面有自己的說明
   點圖片 = 放大單獨檢視
   ============================================================ */
if ($("#project")) {
  const slug = new URLSearchParams(location.search).get("p");
  const wi = slugs.indexOf(slug);
  if (wi < 0) {
    $("#p-title").textContent = "Work not found";
    $("#p-desc").innerHTML = '<p>This link doesn\'t match any work. <a href="work.html">Back to all work</a></p>';
  } else {
    const w = works[wi], items = itemsOf(w), body = $("#p-body");
    document.title = `${w.title} — ${SITE_NAME}`;
    $("#p-meta").textContent = `${w.category}, ${w.year}`;
    $("#p-title").textContent = w.title;
    addParagraphs($("#p-desc"), w.desc);
    [["Role", w.role], ["Tools", w.tools]].forEach(([k, v]) => {
      if (!v) return;
      const dt = document.createElement("dt"), dd = document.createElement("dd");
      dt.textContent = k; dd.textContent = v;
      $("#p-facts").append(dt, dd);
    });

    const imgs = [];   // 可以放大的圖片
    items.forEach((it) => {
      const fig = document.createElement("figure");
      fig.className = "pi reveal";
      const k = kindOf(it.src);
      let node;
      if (k === "embed") {
        node = document.createElement("iframe");
        node.src = toEmbed(it.src); node.allow = "autoplay; fullscreen; picture-in-picture"; node.allowFullscreen = true;
      } else if (k === "video") {
        node = document.createElement("video");
        node.src = it.src; node.controls = true; node.loop = true; node.playsInline = true; node.preload = "metadata";
      } else {
        node = document.createElement("img");
        node.src = it.src; node.alt = it.note || w.title; node.loading = "lazy"; node.className = "zoomable"; node.tabIndex = 0;
        const n = imgs.length; imgs.push(it);
        node.addEventListener("click", () => openLb(n));
        node.addEventListener("keydown", (e) => { if (e.key === "Enter") openLb(n); });
      }
      if (k !== "embed") node.addEventListener("error", () => node.replaceWith(placeholderNode(w, "Add " + it.src)), { once: true });
      fig.appendChild(node);
      if (it.note) { const cap = document.createElement("figcaption"); addParagraphs(cap, it.note); fig.appendChild(cap); }
      body.appendChild(fig);
      revealObserver.observe(fig);
    });

    /* 放大檢視：單獨看一張圖；同一個作品裡有多張圖時，可用 ← → 或左右滑動切換 */
    const lb = $("#lightbox"), stage = $("#lb-stage"), countEl = $("#lb-count"), noteEl = $("#lb-desc");
    const prev = $("#lb-prev"), next = $("#lb-next");
    let cur = 0;
    function showLb(i) {
      cur = (i + imgs.length) % imgs.length;
      const it = imgs[cur];
      stage.innerHTML = "";
      const im = document.createElement("img"); im.src = it.src; im.alt = it.note || w.title;
      stage.appendChild(im);
      noteEl.textContent = it.note || "";
      countEl.textContent = imgs.length > 1 ? `${cur + 1} / ${imgs.length}` : "";
      prev.classList.toggle("off", imgs.length < 2); next.classList.toggle("off", imgs.length < 2);
    }
    function openLb(i) {
      showLb(i);
      lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); document.body.classList.add("locked");
    }
    function closeLb() {
      lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); document.body.classList.remove("locked");
      setTimeout(() => { stage.innerHTML = ""; }, 350);
    }
    $("#lb-close").addEventListener("click", closeLb);
    prev.addEventListener("click", () => showLb(cur - 1));
    next.addEventListener("click", () => showLb(cur + 1));
    lb.addEventListener("click", (e) => { if (e.target === lb || e.target === stage) closeLb(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLb();
      if (imgs.length > 1 && e.key === "ArrowLeft") showLb(cur - 1);
      if (imgs.length > 1 && e.key === "ArrowRight") showLb(cur + 1);
    });
    let x0 = null;
    lb.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (x0 === null || imgs.length < 2) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) showLb(cur + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }
}
