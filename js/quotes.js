const QuotesModule = (() => {
  let activeStyle = null;
  let activeTheme = null;

  function init() {
    renderFilters();
    renderQuotes();
  }

  function renderFilters() {
    const styleBar = document.getElementById('style-filters');
    const themeBar = document.getElementById('theme-filters');

    STYLES.forEach(style => {
      const btn = document.createElement('button');
      btn.className = 'filter-pill';
      btn.textContent = style;
      btn.addEventListener('click', () => toggleStyle(style, btn));
      styleBar.appendChild(btn);
    });

    THEMES.forEach(theme => {
      const btn = document.createElement('button');
      btn.className = 'filter-pill';
      btn.textContent = theme;
      btn.addEventListener('click', () => toggleTheme(theme, btn));
      themeBar.appendChild(btn);
    });
  }

  function toggleStyle(style, btn) {
    const wasActive = activeStyle === style;
    document.querySelectorAll('#style-filters .filter-pill').forEach(p => p.classList.remove('active'));
    activeStyle = wasActive ? null : style;
    if (!wasActive) btn.classList.add('active');
    renderQuotes();
  }

  function toggleTheme(theme, btn) {
    const wasActive = activeTheme === theme;
    document.querySelectorAll('#theme-filters .filter-pill').forEach(p => p.classList.remove('active'));
    activeTheme = wasActive ? null : theme;
    if (!wasActive) btn.classList.add('active');
    renderQuotes();
  }

  function renderQuotes() {
    const list = document.getElementById('quotes-list');
    const filtered = QUOTES.filter(q => {
      const styleMatch = !activeStyle || q.style === activeStyle;
      const themeMatch = !activeTheme || q.theme === activeTheme;
      return styleMatch && themeMatch;
    });

    list.innerHTML = '';

    if (filtered.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <p class="empty-label">Ingen citater matcher det valgte filter.</p>
          <p>Juster din søgning for at se relevante ledelsesperspektiver.</p>
        </div>`;
      return;
    }

    const favs = getFavorites();
    filtered.forEach(q => {
      const card = buildCard(q, favs.includes(q.id));
      list.appendChild(card);
    });
  }

  function buildCard(q, isFav) {
    const card = document.createElement('div');
    card.className = 'quote-card animate__animated animate__fadeIn';
    card.dataset.id = q.id;

    const canShare = !!navigator.share;

    card.innerHTML = `
      <p class="quote-text">${escHtml(q.text)}</p>
      <div class="quote-meta">
        <span class="quote-author">— ${escHtml(q.author)}</span>
        <div class="quote-tags">
          <span class="tag-pill">${escHtml(q.style)}</span>
          <span class="tag-pill">${escHtml(q.theme)}</span>
        </div>
      </div>
      <div class="quote-actions">
        ${canShare ? `
        <button class="action-btn share-btn" aria-label="Del citat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
          </svg>
          Del
        </button>` : `
        <button class="action-btn copy-btn" aria-label="Kopiér citat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
          Kopiér
        </button>`}
        <button class="action-btn fav-btn ${isFav ? 'active' : ''}" aria-label="${isFav ? 'Fjern fra favoritter' : 'Gem som favorit'}">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="${isFav ? 'currentColor' : 'none'}">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
          </svg>
          <span>${isFav ? 'Gemt' : 'Gem'}</span>
        </button>
      </div>`;

    const shareBtn = card.querySelector('.share-btn');
    const copyBtn = card.querySelector('.copy-btn');
    const favBtn = card.querySelector('.fav-btn');

    if (shareBtn) shareBtn.addEventListener('click', () => shareQuote(q));
    if (copyBtn) copyBtn.addEventListener('click', () => copyQuote(q));
    favBtn.addEventListener('click', () => toggleFav(q.id, favBtn));

    return card;
  }

  async function shareQuote(q) {
    const text = `"${q.text}" — ${q.author}`;
    try {
      await navigator.share({ text });
    } catch (_) {
      copyToClipboard(text);
      showToast('Kopi klar til næste ledergruppe-møde');
    }
  }

  async function copyQuote(q) {
    const text = `"${q.text}" — ${q.author}`;
    await copyToClipboard(text);
    showToast('Kopi klar til næste ledergruppe-møde');
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0;top:-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
  }

  function toggleFav(id, btn) {
    const favs = getFavorites();
    const idx = favs.indexOf(id);
    const adding = idx === -1;
    if (adding) favs.push(id); else favs.splice(idx, 1);
    localStorage.setItem('lbs_favorites', JSON.stringify(favs));

    btn.classList.toggle('active', adding);
    btn.setAttribute('aria-label', adding ? 'Fjern fra favoritter' : 'Gem som favorit');
    btn.querySelector('svg').setAttribute('fill', adding ? 'currentColor' : 'none');
    btn.querySelector('span').textContent = adding ? 'Gemt' : 'Gem';

    showToast(adding ? 'Føjet til din ledelsesportefølje' : 'Fjernet fra ledelsesportefølje');
  }

  function getFavorites() {
    try { return JSON.parse(localStorage.getItem('lbs_favorites')) || []; }
    catch (_) { return []; }
  }

  function escHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  return { init };
})();
