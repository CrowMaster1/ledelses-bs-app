const FavoritesModule = (() => {
  function init() {}

  function render() {
    const list = document.getElementById('favorites-list');
    const favIds = getFavorites();
    const favQuotes = QUOTES.filter(q => favIds.includes(q.id));

    list.innerHTML = '';

    if (favQuotes.length === 0) {
      list.innerHTML = `
        <div class="fav-empty">
          <svg class="fav-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
          </svg>
          <p class="fav-empty-title">Din ledelsesportefølje er endnu ikke kurateret.</p>
          <p class="fav-empty-sub">Gem citater fra Citater-fanen for at opbygge din personlige samling af ledelsesvisdom.</p>
        </div>`;
      return;
    }

    favQuotes.forEach(q => {
      const card = buildFavCard(q);
      list.appendChild(card);
    });
  }

  function buildFavCard(q) {
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
        <button class="action-btn unfav-btn active" aria-label="Fjern fra favoritter">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="currentColor">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
          </svg>
          Fjern
        </button>
      </div>`;

    const shareBtn = card.querySelector('.share-btn');
    const copyBtn = card.querySelector('.copy-btn');
    const unfavBtn = card.querySelector('.unfav-btn');

    if (shareBtn) shareBtn.addEventListener('click', () => shareQuote(q));
    if (copyBtn) copyBtn.addEventListener('click', () => copyQuote(q));
    unfavBtn.addEventListener('click', () => {
      removeFav(q.id);
      card.remove();
      if (document.getElementById('favorites-list').children.length === 0) render();
    });

    return card;
  }

  async function shareQuote(q) {
    const text = `"${q.text}" — ${q.author}`;
    try { await navigator.share({ text }); }
    catch (_) { await copyToClipboard(text); showToast('Kopi klar til næste ledergruppe-møde'); }
  }

  async function copyQuote(q) {
    await copyToClipboard(`"${q.text}" — ${q.author}`);
    showToast('Kopi klar til næste ledergruppe-møde');
  }

  async function copyToClipboard(text) {
    try { await navigator.clipboard.writeText(text); }
    catch (_) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0;top:-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
  }

  function removeFav(id) {
    const favs = getFavorites().filter(f => f !== id);
    localStorage.setItem('lbs_favorites', JSON.stringify(favs));
    const quoteCard = document.querySelector(`#tab-citater .quote-card[data-id="${id}"]`);
    if (quoteCard) {
      const favBtn = quoteCard.querySelector('.fav-btn');
      if (favBtn) {
        favBtn.classList.remove('active');
        favBtn.querySelector('svg').setAttribute('fill', 'none');
        const lbl = favBtn.querySelector('span');
        if (lbl) lbl.textContent = 'Gem';
      }
    }
  }

  function getFavorites() {
    try { return JSON.parse(localStorage.getItem('lbs_favorites')) || []; }
    catch (_) { return []; }
  }

  function escHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  return { init, render };
})();
