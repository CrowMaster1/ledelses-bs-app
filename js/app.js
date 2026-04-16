let toastTimer = null;

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

(function init() {
  QuotesModule.init();
  BingoModule.init();
  FavoritesModule.init();

  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabs.forEach(t => {
        t.classList.toggle('active', t.dataset.tab === target);
        t.setAttribute('aria-selected', t.dataset.tab === target ? 'true' : 'false');
      });

      panels.forEach(p => {
        const isTarget = p.id === `tab-${target}`;
        p.hidden = !isTarget;
      });

      document.body.dataset.activeTab = target;

      if (target === 'favoritter') FavoritesModule.render();
    });
  });
})();
