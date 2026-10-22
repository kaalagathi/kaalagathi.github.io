const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

document.addEventListener('DOMContentLoaded', async () => {
  const menuButton = $('.menu-toggle');
  const nav = $('.nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '×' : '☰';
    });
  }
  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // Read plain key=value configuration from the repository.
  let config = {};
  try {
    const configPath = document.body.dataset.course ? '../courses.properties' : 'courses.properties';
    const response = await fetch(new URL(configPath, document.baseURI));
    if (response.ok) config = parseProperties(await response.text());
  } catch (e) {
    console.info('Course configuration could not be loaded; using page defaults.');
  }
  $$('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (config[key]) el.textContent = config[key];
  });

  const slug = document.body.dataset.course;
  if (slug) {
    const p = (key, fallback='') => config[`${slug}.${key}`] || fallback;
    const set = (selector, value) => { const el = $(selector); if (el && value) el.textContent = value; };
    set('[data-course-fee]', p('fee', 'Contact us'));
    set('[data-course-start]', p('start', 'To be announced'));
    set('[data-course-duration]', p('duration', 'See schedule'));
    set('[data-course-days]', p('days', 'To be announced'));
    set('[data-course-time]', p('time', 'To be announced'));
    set('[data-course-mode]', p('mode', 'Online LIVE'));
    set('[data-course-language]', p('language', 'Telugu'));
    set('[data-course-early-fee]', p('earlyFee', ''));
    set('[data-course-early-deadline]', p('earlyDeadline', ''));
    set('[data-course-register]', p('registrationUrl', ''));
    set('[data-course-video]', p('videoUrl', ''));
    const reg = $('[data-course-register-link]');
    if (reg && p('registrationUrl')) reg.href = p('registrationUrl');
    const video = p('videoUrl');
    const frame = $('[data-course-video-frame]');
    if (frame && video) {
      const id = youtubeId(video);
      if (id) frame.src = `https://www.youtube-nocookie.com/embed/${id}`;
      else frame.closest('div').hidden = true;
    } else if (frame) { frame.closest('div').hidden = true; }
    const extra = p('videoUrl2');
    const frame2 = $('[data-course-video-frame-2]');
    if (frame2 && extra) {
      const id = youtubeId(extra);
      if (id) frame2.src = `https://www.youtube-nocookie.com/embed/${id}`;
      else frame2.closest('div').hidden = true;
    } else if (frame2) { frame2.closest('div').hidden = true; }
    const intro = p('intro');
    const introEl = $('[data-course-intro]');
    if (introEl && intro) introEl.textContent = intro;
  }
});

function parseProperties(raw) {
  const result = {};
  raw.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('!')) return;
    const i = trimmed.search(/[:=]/);
    if (i < 0) return;
    result[trimmed.slice(0, i).trim()] = trimmed.slice(i + 1).trim();
  });
  return result;
}
function youtubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1);
    if (u.searchParams.get('v')) return u.searchParams.get('v');
    const m = u.pathname.match(/\/embed\/([^/]+)/);
    return m ? m[1] : '';
  } catch { return ''; }
}