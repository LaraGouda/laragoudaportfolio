/* Edit this array to update projects or add another build. Use null for an
   unconfirmed URL: the corresponding button will stay hidden. No fetch or
   JavaScript modules are needed, so index.html also works over file://. */
const PROJECTS = [
  {
    name: 'Blue Nile Catering Platform',
    date: 'July 2026',
    datetime: '2026-07',
    kind: 'FULL-STACK CATERING PLATFORM',
    image: 'assets/bluenile.png',
    imageAlt: 'Blue Nile Catering website home page',
    imageType: 'screenshot',
    imageWidth: 2934,
    imageHeight: 1442,
    artNote: 'An ordering platform for an operating catering business.',
    description: 'Built and launched a full-stack ordering platform for a real catering business, with a searchable menu, shopping cart, and owner dashboard.',
    accomplishments: [
      'Built and launched a full-stack platform for a live catering business, with a searchable menu, cart, and owner dashboard.',
      'Engineered a Stripe authorization-and-capture workflow across seven payment states using custom REST APIs and webhooks, allowing the kitchen to approve orders before customers are charged.',
      'Automated orders via Google Sheets API and Resend: eight transactional email workflows, secure access codes, and reminders.'
    ],
    technologies: ['React', 'TypeScript', 'Stripe', 'Google APIs', 'Resend', 'REST APIs'],
    liveUrl: 'https://www.bluenilecatering.net',
    githubUrl: 'https://github.com/LaraGouda/BlueNileCatering'
  },
  {
    name: 'Wallsense',
    date: 'February 2026',
    datetime: '2026-02',
    kind: 'HARDWARE MEETS MACHINE LEARNING',
    image: 'assets/wallsense.png',
    imageAlt: 'WallSense project image showing Wi-Fi sensing through a wall',
    imageType: 'screenshot',
    imageWidth: 2940,
    imageHeight: 1624,
    artNote: 'Turning invisible wireless signals into something useful.',
    description: 'A hardware and machine learning project that uses Wi-Fi Channel State Information (CSI) to detect people through walls, processing wireless signal information in real time.',
    accomplishments: [
      'Won Best Hardware at HopperHacks, a hackathon with over 160 participants, for through-wall people detection with Wi-Fi CSI.',
      'Built a real-time processing pipeline handling approximately 100 CSI packets per second from two ESP32-S3 devices, achieving sub-second latency.',
      'Fine-tuned an open-source PyTorch model on a public Wi-Fi CSI dataset, reaching 95% classification accuracy.'
    ],
    technologies: ['C++', 'Python', 'PyTorch', 'MediaPipe', 'ESP-IDF'],
    hardware: 'Dual ESP32-S3 microcontrollers',
    award: { title: 'BEST HARDWARE', event: 'HOPPERHACKS' },
    liveUrl: null,
    githubUrl: 'https://github.com/LaraGouda/WallSense'
  },
  {
    name: 'FollowUp',
    date: 'November 2025',
    datetime: '2025-11',
    kind: 'AI MEETING ASSISTANT',
    image: 'assets/followup.png',
    imageAlt: 'FollowUp results showing a meeting summary, email drafts, tasks, and calendar events',
    imageType: 'screenshot',
    imageWidth: 2940,
    imageHeight: 3084,
    artNote: 'From meeting notes to the things that happen next.',
    description: 'A full-stack AI meeting assistant that turns meeting transcripts into actionable outputs, including action items, email drafts, and calendar events.',
    accomplishments: [
      'Deployed a full-stack AI meeting assistant that turns transcripts into action items, email drafts, and calendar events.',
      'Built a Supabase backend using Edge Functions and PostgreSQL, integrating Google OAuth with Gmail and Calendar APIs to create drafts and events.',
      'Orchestrated five NeuralSeek agents and engineered structured-JSON prompts, refined across more than 20 meeting transcripts.'
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'NeuralSeek', 'Google APIs', 'SQL'],
    liveUrl: 'https://www.followup.codes',
    githubUrl: 'https://github.com/LaraGouda/FollowUp'
  },
  {
    name: 'CookStack',
    compact: true,
    // No project date was supplied. Add date and datetime here if desired.
    kind: 'DESKTOP RECIPE MANAGER',
    image: 'assets/other-original-artwork/recipe-book.svg',
    imageAlt: 'Original pixel illustration of an open recipe book with ingredients and a wooden spoon',
    imageType: 'artwork',
    imageWidth: 320,
    imageHeight: 240,
    description: 'A desktop app for saving, finding, and organizing recipes.',
    accomplishments: [
      'Built a Java/JavaFX desktop recipe manager with a responsive GUI and serialization-based data persistence for saving and loading recipes.',
      'Implemented efficient recipe searching and organization using HashMaps and arrays to improve lookup performance.'
    ],
    technologies: ['Java', 'JavaFX', 'HashMaps', 'Serialization'],
    liveUrl: null,
    githubUrl: 'https://github.com/LaraGouda/CookStack'
  },
  {
    name: 'World Happiness',
    compact: true,
    kind: 'DATA SCIENCE + VISUALIZATION',
    // Replace this original illustration with your screenshot when ready.
    image: 'assets/other-original-artwork/world-happiness.svg',
    imageAlt: 'Pixel globe illustration for World Happiness; a project screenshot will be added later',
    imageType: 'artwork',
    imageWidth: 320,
    imageHeight: 240,
    description: 'Exploring global happiness trends and the factors behind them.',
    accomplishments: [
      'Cleaned and combined 5 years of World Happiness data from ~150 countries yearly for analysis.',
      'Used Linear Regression, Random Forest, and Gradient Boosting models to predict and identify happiness patterns across countries.',
      'Built an interactive Streamlit/Plotly dashboard to explore global trends and model performance.'
    ],
    technologies: ['Python', 'Streamlit', 'Plotly', 'Machine Learning'],
    liveUrl: null,
    githubUrl: 'https://github.com/LaraGouda/WorldHappiness'
  }
];

// Treat even locally edited project strings as text, never executable HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function projectLink(url, label, name) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return '';
    const variant = label === 'VIEW GITHUB' ? 'button-secondary' : 'button-primary';
    return `<a class="button ${variant}" href="${escapeHTML(parsed.href)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(label + ': ' + name)}">${escapeHTML(label)} <span aria-hidden="true">↗</span></a>`;
  } catch {
    return '';
  }
}

function projectMedia(project) {
  return `<a class="project-media" href="${escapeHTML(project.image)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML('View ' + project.name + ' image in a new tab')}">
    <img class="project-image project-image--${escapeHTML(project.imageType)}" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt)}" width="${project.imageWidth}" height="${project.imageHeight}" loading="lazy">
  </a>`;
}

function projectCard(project, index) {
  const links = projectLink(project.liveUrl, 'VISIT WEBSITE', project.name) +
    projectLink(project.githubUrl, 'VIEW GITHUB', project.name);
  const title = `<h3 class="project-title" id="project-${index}-title">${escapeHTML(project.name)}</h3>`;
  const date = project.date ? `<time class="project-date" datetime="${escapeHTML(project.datetime)}">${escapeHTML(project.date)}</time>` : '';
  const buildNumber = `BUILD ${String(index + 1).padStart(2, '0')}`;
  const visual = project.compact
    ? `<div class="compact-project-heading">
        ${projectMedia(project)}
        <div><p class="build-label">${buildNumber}</p>${title}<p class="project-kind">${escapeHTML(project.kind)}</p></div>
      </div>`
    : `<div class="project-visual">
        <div class="build-label"><span>${buildNumber}</span><span class="signal-icon" aria-hidden="true">${project.award ? '⌁' : '✦'}</span></div>
        ${projectMedia(project)}
        <p class="project-kind">${escapeHTML(project.kind)}</p>
        <p class="project-art-note">${escapeHTML(project.artNote)}</p>
        ${project.award ? `<div class="award-badge"><span aria-hidden="true">🏆</span><div><strong>${escapeHTML(project.award.title)}</strong><small>— ${escapeHTML(project.award.event)}</small></div></div>` : ''}
      </div>`;

  return `<article class="project-card asset-frame reveal${project.compact ? ' project-card--compact' : ''}" aria-labelledby="project-${index}-title">
    ${visual}
    <div class="project-content">
      ${project.compact ? '' : `<div class="project-title-line">${title}${date}</div>`}
      <p class="project-description">${escapeHTML(project.description)}</p>
      <ul class="detail-list">${project.accomplishments.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>
      <ul class="tech-tags" aria-label="${escapeHTML(project.name)} technologies">${project.technologies.map(tech => `<li>${escapeHTML(tech)}</li>`).join('')}</ul>
      ${project.hardware ? `<p class="hardware-note"><strong>Hardware:</strong> ${escapeHTML(project.hardware)}</p>` : ''}
      ${links ? `<div class="project-actions">${links}</div>` : ''}
    </div>
  </article>`;
}

function renderProjects() {
  const featured = document.getElementById('project-list');
  const additional = document.getElementById('additional-project-list');
  if (!featured || !additional) return;
  featured.innerHTML = PROJECTS.map((project, index) => project.compact ? '' : projectCard(project, index)).join('');
  additional.innerHTML = PROJECTS.map((project, index) => project.compact ? projectCard(project, index) : '').join('');
  document.querySelector('.additional-builds').hidden = !PROJECTS.some(project => project.compact);
  const count = document.querySelector('.build-count');
  if (count) count.textContent = `${PROJECTS.length} BUILDS, MANY LESSONS`;
}

renderProjects();

document.documentElement.classList.add('js-enabled');

// Day / night mode. Storage failures (including strict file:// settings)
// never prevent the visitor from using the theme switch.
const themeButton = document.getElementById('theme-toggle');
function applyTheme(theme) {
  const night = theme === 'night';
  document.documentElement.dataset.theme = night ? 'night' : 'day';
  themeButton.setAttribute('aria-pressed', String(night));
  themeButton.setAttribute('aria-label', night ? 'Switch to day mode' : 'Switch to night mode');
  document.querySelector('meta[name="theme-color"]').content = night ? '#1c2728' : '#f7f4e9';
}
try {
  const savedTheme = localStorage.getItem('lara-portfolio-theme');
  applyTheme(savedTheme === 'night' ? 'night' : 'day');
} catch {
  applyTheme('day');
}
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'night' ? 'day' : 'night';
  applyTheme(theme);
  try { localStorage.setItem('lara-portfolio-theme', theme); } catch { /* Optional storage. */ }
});

// Mobile navigation: native buttons, keyboard focus, Escape, and link closing.
const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu(returnFocus = false) {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});
document.addEventListener('focusin', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});
window.matchMedia('(min-width: 641px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

// Highlight the section at the reading line. A single passive scroll handler
// uses requestAnimationFrame, including the short contact section at page end.
const sections = [...document.querySelectorAll('main > section[id]')];
const navLinks = [...navigation.querySelectorAll('.nav-link')];
let navigationFrame = false;
function updateActiveNavigation() {
  let active = sections[0].id;
  const readingLine = window.scrollY + 160;
  for (const section of sections) {
    if (section.offsetTop <= readingLine) active = section.id;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) active = 'contact';
  for (const link of navLinks) {
    const current = link.hash === `#${active}`;
    link.classList.toggle('active', current);
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  navigationFrame = false;
}
window.addEventListener('scroll', () => {
  if (!navigationFrame) {
    navigationFrame = true;
    requestAnimationFrame(updateActiveNavigation);
  }
}, { passive: true });
window.addEventListener('resize', updateActiveNavigation);
window.addEventListener('load', updateActiveNavigation);
updateActiveNavigation();

// Subtle entrance animations are optional; all content starts visible.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(element => {
    element.classList.add('reveal-ready');
    revealObserver.observe(element);
  });
}
