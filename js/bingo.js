const BingoModule = (() => {
  const FREE_INDEX = 12;
  const GRID_SIZE = 25;

  const WIN_LINES = [
    [0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],
    [0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],
    [0,6,12,18,24],[4,8,12,16,20]
  ];

  let state = { words: [], marked: [] };

  function init() {
    state = loadState() || generateCard();
    renderCard();
    document.getElementById('new-card-btn').addEventListener('click', newCard);
    document.getElementById('win-close-btn').addEventListener('click', newCard);
  }

  function generateCard() {
    const pool = [...BINGO_WORDS].sort(() => Math.random() - 0.5).slice(0, GRID_SIZE - 1);
    pool.splice(FREE_INDEX, 0, FREE_CELL_TEXT);
    const marked = Array(GRID_SIZE).fill(false);
    marked[FREE_INDEX] = true;
    return { words: pool, marked };
  }

  function renderCard() {
    const grid = document.getElementById('bingo-grid');
    grid.innerHTML = '';
    state.words.forEach((word, i) => {
      const cell = document.createElement('div');
      const isFree = i === FREE_INDEX;
      cell.className = 'bingo-cell' + (state.marked[i] ? ' marked' : '') + (isFree ? ' free' : '');
      cell.setAttribute('role', 'gridcell');
      cell.setAttribute('aria-label', word + (state.marked[i] ? ' — markeret' : ''));
      cell.innerHTML = `<span class="bingo-cell-text">${escHtml(word)}</span>`;
      if (!isFree) cell.addEventListener('click', () => tapCell(i, cell));
      grid.appendChild(cell);
    });
  }

  function tapCell(index, cell) {
    state.marked[index] = !state.marked[index];
    cell.classList.toggle('marked', state.marked[index]);
    cell.setAttribute('aria-label', state.words[index] + (state.marked[index] ? ' — markeret' : ''));

    cell.classList.remove('just-marked');
    void cell.offsetWidth;
    cell.classList.add('just-marked');

    saveState();
    if (checkWin()) showWin();
  }

  function checkWin() {
    return WIN_LINES.some(line => line.every(i => state.marked[i]));
  }

  function showWin() {
    const overlay = document.getElementById('bingo-win-overlay');
    overlay.hidden = false;

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#C9A84C', '#E8C97A', '#1B2A4A', '#F5F5F0', '#a88838']
      });
      setTimeout(() => {
        confetti({ particleCount: 60, spread: 50, origin: { x: 0.1, y: 0.6 }, colors: ['#C9A84C','#E8C97A'] });
        confetti({ particleCount: 60, spread: 50, origin: { x: 0.9, y: 0.6 }, colors: ['#C9A84C','#E8C97A'] });
      }, 300);
    }
  }

  function newCard() {
    document.getElementById('bingo-win-overlay').hidden = true;
    state = generateCard();
    saveState();
    renderCard();
  }

  function saveState() {
    try { localStorage.setItem('lbs_bingo_state', JSON.stringify(state)); } catch (_) {}
  }

  function loadState() {
    try {
      const s = JSON.parse(localStorage.getItem('lbs_bingo_state'));
      if (s && Array.isArray(s.words) && s.words.length === GRID_SIZE && Array.isArray(s.marked)) return s;
    } catch (_) {}
    return null;
  }

  function escHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  return { init };
})();
