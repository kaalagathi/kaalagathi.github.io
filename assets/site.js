const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

// UI translations. Course-specific Telugu descriptions already present in the pages are retained.
const TE = {
  'Ancient wisdom • Clear direction':'ప్రాచీన జ్ఞానం • స్పష్టమైన దిశ',
  'Home':'హోమ్', 'Courses':'కోర్సులు', 'Registration Guide':'రిజిస్ట్రేషన్ మార్గదర్శిని',
  'About Guruji':'గురూజీ గురించి', 'Join a Course':'కోర్సులో చేరండి', 'Choose a Course':'కోర్సును ఎంచుకోండి',
  'LEARN • REFLECT • GROW':'నేర్చుకోండి • ఆలోచించండి • ఎదగండి',
  'Find your direction.':'మీ దిశను కనుగొనండి.', 'Understand your journey.':'మీ ప్రయాణాన్ని అర్థం చేసుకోండి.',
  'Explore traditional knowledge through Telugu courses in astrology, Vaasthu, Ayurveda and more — with':'జ్యోతిష్యం, వాస్తు, ఆయుర్వేదం తదితర సంప్రదాయ జ్ఞానాన్ని తెలుగు కోర్సుల ద్వారా నేర్చుకోండి —',
  'Explore Courses':'కోర్సులను చూడండి', 'How to Register':'ఎలా నమోదు చేసుకోవాలి',
  'Online learning · Telugu instruction · Learn from wherever you are':'ఆన్‌లైన్ అభ్యాసం · తెలుగు బోధన · ఎక్కడి నుంచైనా నేర్చుకోండి',
  'THE COSMIC CYCLE':'విశ్వ చక్రం', 'KNOWLEDGE • BALANCE • PURPOSE':'జ్ఞానం • సమతుల్యత • లక్ష్యం',
  '01 / KNOWLEDGE':'01 / జ్ఞానం', 'TIMELESS TRADITIONS, THOUGHTFULLY TAUGHT':'కాలాతీత సంప్రదాయాలు — ఆలోచనాత్మక బోధన', 'SCROLL TO EXPLORE ↓':'మరింత తెలుసుకోవడానికి క్రిందికి స్క్రోల్ చేయండి ↓',
  'WELCOME TO KAALAGATHI':'కాలగతికి స్వాగతం', 'Tradition that helps you':'మీకు తోడ్పడే సంప్రదాయం', 'see with clarity.':'స్పష్టంగా అర్థం చేసుకోవడానికి.',
  'Kaalagathi is a learning space for people curious about traditional Indian knowledge and its place in everyday life.':'భారతీయ సంప్రదాయ జ్ఞానం మరియు దైనందిన జీవితంలో దాని ప్రాముఖ్యతను తెలుసుకోవాలనుకునే వారి కోసం కాలగతి ఒక అభ్యాస వేదిక.',
  'Learn step by step in Telugu, revisit the foundations, and explore practical ways to understand the subjects more deeply. Course schedules and fees are shown below and can be updated by the Kaalagathi team.':'తెలుగులో దశలవారీగా నేర్చుకోండి, ప్రాథమిక అంశాలను మళ్లీ తెలుసుకోండి, విషయాలను లోతుగా అర్థం చేసుకునే ఆచరణాత్మక మార్గాలను అన్వేషించండి. కోర్సుల షెడ్యూల్‌లు, ఫీజులు క్రింద ఉన్నాయి; కాలగతి బృందం వాటిని నవీకరించవచ్చు.',
  'Visit Kaalagathi on YouTube ↗':'యూట్యూబ్‌లో కాలగతిని చూడండి ↗', 'LEARNING PATHS':'అభ్యాస మార్గాలు', 'Explore our':'మా', 'courses':'కోర్సులను',
  'Choose a subject to view course details, schedule, fee and video resources.':'కోర్సు వివరాలు, షెడ్యూల్, ఫీజు మరియు వీడియోల కోసం ఒక అంశాన్ని ఎంచుకోండి.',
  'FOUNDATION':'ప్రాథమిక స్థాయి', 'Basics in Astrology':'జ్యోతిష్యం — ప్రాథమికాలు', 'Build a clear foundation in astrological concepts.':'జ్యోతిష్య భావనలపై స్పష్టమైన పునాది ఏర్పరచుకోండి.',
  'Explore course':'కోర్సు వివరాలు చూడండి', 'ADVANCED':'ఉన్నత స్థాయి', 'Advanced Astrology':'ఉన్నత జ్యోతిష్యం', 'Continue your learning with deeper astrological study.':'జ్యోతిష్యాన్ని మరింత లోతుగా అధ్యయనం చేయండి.',
  'SPACE & BALANCE':'స్థలం & సమతుల్యత', 'Vaasthu':'వాస్తు', 'Explore traditional principles of space and orientation.':'స్థలం మరియు దిశలకు సంబంధించిన సంప్రదాయ సూత్రాలను తెలుసుకోండి.',
  'POPULAR COURSE':'ప్రజాదరణ పొందిన కోర్సు', 'Marriage Astrology':'వివాహ జ్యోతిష్యం', 'Learn traditional chart-reading concepts related to marriage.':'వివాహానికి సంబంధించిన జాతక విశ్లేషణ సంప్రదాయ భావనలను నేర్చుకోండి.',
  'WELLBEING TRADITIONS':'ఆరోగ్య సంప్రదాయాలు', 'Ayurveda':'ఆయుర్వేదం', 'An introduction to traditional Ayurvedic knowledge.':'ఆయుర్వేద సంప్రదాయ జ్ఞానానికి పరిచయం.',
  'PERSONAL GUIDANCE':'వ్యక్తిగత మార్గదర్శనం', 'Consultation':'వ్యక్తిగత సంప్రదింపు', 'Learn how to enquire about a personal consultation.':'వ్యక్తిగత సంప్రదింపుల గురించి ఎలా అడగాలో తెలుసుకోండి.', 'View details':'వివరాలు చూడండి',
  'Course fees and schedules are maintained in':'కోర్సుల ఫీజులు, షెడ్యూల్‌లు ఈ ఫైల్‌లో నిర్వహించబడతాయి:',
  'READY TO BEGIN?':'ప్రారంభించడానికి సిద్ధమా?', 'Make registration':'రిజిస్ట్రేషన్‌ను', 'simple.':'సులభం చేసుకోండి.',
  'Follow our step-by-step guide for Google Forms and Zoom, from registration to joining your live class.':'రిజిస్ట్రేషన్ నుంచి లైవ్ క్లాస్‌లో చేరే వరకు Google Forms, Zoom కోసం మా దశలవారీ మార్గదర్శిని అనుసరించండి.',
  'Open Registration Guide':'రిజిస్ట్రేషన్ మార్గదర్శిని తెరవండి', 'Guidance through learning, tradition and reflection.':'అభ్యాసం, సంప్రదాయం మరియు ఆలోచన ద్వారా మార్గదర్శనం.',
  'YouTube ↗':'యూట్యూబ్ ↗', 'Course information is provided for learning purposes.':'కోర్సు సమాచారం విద్యా ప్రయోజనాల కోసం అందించబడింది.',
  'Choose your course':'మీ కోర్సును ఎంచుకోండి', 'Open the Home page, choose the course you want, and read the Telugu course description, current fee, batch dates and class timings.':'హోమ్ పేజీని తెరిచి, మీకు కావలసిన కోర్సును ఎంచుకుని, తెలుగు వివరణ, ప్రస్తుత ఫీజు, బ్యాచ్ తేదీలు మరియు తరగతి సమయాలను చదవండి.',
  'Browse all courses ↗':'అన్ని కోర్సులను చూడండి ↗', 'Submit the registration form':'రిజిస్ట్రేషన్ ఫారమ్‌ను సమర్పించండి',
  'Open the registration link shown on the relevant course page. Enter your details carefully and submit the form. Keep a note of the name and phone number you registered with.':'సంబంధిత కోర్సు పేజీలోని రిజిస్ట్రేషన్ లింక్‌ను తెరవండి. మీ వివరాలను జాగ్రత్తగా నమోదు చేసి ఫారమ్‌ను సమర్పించండి. నమోదు చేసిన పేరు, ఫోన్ నంబర్‌ను గుర్తుంచుకోండి.',
  'Marriage Astrology:':'వివాహ జ్యోతిష్యం:', 'Open registration form ↗':'రిజిస్ట్రేషన్ ఫారమ్ తెరవండి ↗', 'Install Zoom':'Zoom‌ను ఇన్‌స్టాల్ చేయండి',
  'Use the official Zoom website or app store for your device. Install Zoom Workplace on your computer or mobile phone.':'మీ పరికరానికి అనుగుణంగా అధికారిక Zoom వెబ్‌సైట్ లేదా యాప్ స్టోర్‌ను ఉపయోగించండి. కంప్యూటర్ లేదా మొబైల్‌లో Zoom Workplace‌ను ఇన్‌స్టాల్ చేయండి.',
  'Download Zoom ↗':'Zoom డౌన్‌లోడ్ చేయండి ↗', 'Sign up or sign in':'సైన్ అప్ లేదా సైన్ ఇన్ చేయండి',
  'If you are new to Zoom, open Zoom and choose':'మీరు Zoom‌ను మొదటిసారి ఉపయోగిస్తుంటే, Zoom తెరిచి ఎంచుకోండి:', 'Sign Up':'సైన్ అప్',
  'Follow the verification instructions.':'ధృవీకరణ సూచనలను అనుసరించండి.', 'If you already have an account, choose':'మీకు ఇప్పటికే ఖాతా ఉంటే, ఎంచుకోండి:', 'Sign In':'సైన్ ఇన్',
  'and enter your login details.':'ఆపై మీ లాగిన్ వివరాలను నమోదు చేయండి.', 'You may usually join a meeting from an invitation link without creating an account, unless the host requires sign-in.':'హోస్ట్ సైన్ ఇన్ తప్పనిసరి చేయకపోతే, సాధారణంగా ఖాతా సృష్టించకుండానే ఆహ్వాన లింక్ ద్వారా సమావేశంలో చేరవచ్చు.',
  'Zoom sign-in ↗':'Zoom సైన్ ఇన్ ↗', 'Have you chosen a course?':'మీరు కోర్సును ఎంచుకున్నారా?', 'Go back to the course list to view current details.':'ప్రస్తుత వివరాలను చూడటానికి కోర్సుల జాబితాకు తిరిగి వెళ్లండి.',
  'Zoom Downloads ↗':'Zoom డౌన్‌లోడ్‌లు ↗', 'Course Details':'కోర్సు వివరాలు', 'Register Now ↗':'ఇప్పుడే నమోదు చేసుకోండి ↗',
  'Please confirm current fee and schedule before payment.':'చెల్లించే ముందు ప్రస్తుత ఫీజు, షెడ్యూల్‌ను నిర్ధారించుకోండి.',
  'Ready to take the next step?':'తదుపరి దశకు సిద్ధంగా ఉన్నారా?', 'Read the registration guide before joining an online class.':'ఆన్‌లైన్ తరగతిలో చేరే ముందు రిజిస్ట్రేషన్ మార్గదర్శిని చదవండి.',
  'All Courses':'అన్ని కోర్సులు', 'Personal Consultation':'వ్యక్తిగత సంప్రదింపు', 'ADVANCED LEARNING':'ఉన్నత అభ్యాసం', 'TRADITIONAL WELLBEING':'సంప్రదాయ ఆరోగ్య సంరక్షణ',
  'FOUNDATION COURSE':'ప్రాథమిక కోర్సు', 'SPECIAL COURSE':'ప్రత్యేక కోర్సు', 'Online LIVE':'ఆన్‌లైన్ లైవ్', 'Telugu':'తెలుగు',
  'Personal guidance':'వ్యక్తిగత మార్గదర్శనం', 'Explore our ':'మా ', 'course':'కోర్సు',
};

let originalTextNodes = [];
function setLanguage(lang) {
  const language = lang === 'te' ? 'te' : 'en';
  document.documentElement.lang = language;
  // Restore original text first, then apply translations, allowing users to switch either way.
  originalTextNodes.forEach(({node, original}) => {
    if (node.isConnected) node.nodeValue = original;
  });
  if (language === 'te') {
    originalTextNodes.forEach(({node, original}) => {
      if (!node.isConnected) return;
      const trimmed = original.trim();
      if (TE[trimmed]) node.nodeValue = original.replace(trimmed, TE[trimmed]);
    });
  }
  document.querySelectorAll('#language-select').forEach(select => select.value = language);
  document.querySelectorAll('[data-lang-label]').forEach(el => el.textContent = language === 'te' ? 'తెలుగు' : 'English');
  localStorage.setItem('kaalagathi-language', language);
}

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
  originalTextNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim() || node.parentElement?.closest('script,style,select,option,code,textarea')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) originalTextNodes.push({node: walker.currentNode, original: walker.currentNode.nodeValue});
  const languageSelect = $('#language-select');
  if (languageSelect) languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));

  // Read plain key=value configuration from the repository.
  let config = {};
  try {
    const configPath = document.body.dataset.course ? '../courses.properties' : 'courses.properties';
    const response = await fetch(new URL(configPath, document.baseURI));
    if (response.ok) config = parseProperties(await response.text());
  } catch (e) { console.info('Course configuration could not be loaded; using page defaults.'); }
  $$('[data-config]').forEach(el => { const key = el.dataset.config; if (config[key]) el.textContent = config[key]; });

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
    if (frame && video) { const id = youtubeId(video); if (id) frame.src = `https://www.youtube-nocookie.com/embed/${id}`; else frame.closest('div').hidden = true; }
    else if (frame) frame.closest('div').hidden = true;
    const extra = p('videoUrl2');
    const frame2 = $('[data-course-video-frame-2]');
    if (frame2 && extra) { const id = youtubeId(extra); if (id) frame2.src = `https://www.youtube-nocookie.com/embed/${id}`; else frame2.closest('div').hidden = true; }
    else if (frame2) frame2.closest('div').hidden = true;
    const intro = p('intro'); const introEl = $('[data-course-intro]'); if (introEl && intro) introEl.textContent = intro;
  }
  setLanguage(localStorage.getItem('kaalagathi-language') || 'en');
});

function parseProperties(raw) {
  const result = {};
  raw.split(/\r?\n/).forEach(line => { const trimmed = line.trim(); if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('!')) return; const i = trimmed.search(/[:=]/); if (i < 0) return; result[trimmed.slice(0, i).trim()] = trimmed.slice(i + 1).trim(); });
  return result;
}
function youtubeId(url) {
  try { const u = new URL(url); if (u.hostname.includes('youtu.be')) return u.pathname.slice(1); if (u.searchParams.get('v')) return u.searchParams.get('v'); const m = u.pathname.match(/\/embed\/([^/]+)/); return m ? m[1] : ''; } catch { return ''; }
}
