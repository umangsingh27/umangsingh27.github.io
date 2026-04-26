/* Custom cursor — Umang Singh portfolio
 * Vanilla JS, no deps. Inverts under any background via mix-blend-mode: difference.
 * Auto-attaches to elements with [data-cursor] (link | media | hide).
 *
 * Usage:
 *   <script src="lib/cursor.js" defer></script>
 *   <a href="..." data-cursor="link">View work</a>
 *   <img data-cursor="media" />
 *   <input data-cursor="hide" />
 */
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return;        // skip touch
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const root = document.createElement('div');
  root.className = 'us-cursor';
  root.innerHTML = `<span class="us-cursor__dot"></span><span class="us-cursor__label"></span>`;
  document.documentElement.appendChild(root);

  // Inject styles once
  if (!document.getElementById('us-cursor-style')) {
    const s = document.createElement('style');
    s.id = 'us-cursor-style';
    s.textContent = `
      .us-cursor{position:fixed;top:0;left:0;width:0;height:0;pointer-events:none;z-index:9998;mix-blend-mode:difference;transform:translate3d(0,0,0)}
      .us-cursor__dot{position:absolute;left:0;top:0;width:var(--cursor-size,12px);height:var(--cursor-size,12px);background:#fff;border-radius:999px;transform:translate(-50%,-50%);transition:width .35s cubic-bezier(.2,.8,.2,1),height .35s cubic-bezier(.2,.8,.2,1),background .25s ease;will-change:width,height}
      .us-cursor[data-mode="link"] .us-cursor__dot{width:var(--cursor-size-link,40px);height:var(--cursor-size-link,40px)}
      .us-cursor[data-mode="media"] .us-cursor__dot{width:var(--cursor-size-media,80px);height:var(--cursor-size-media,80px);background:#fff}
      .us-cursor[data-mode="hide"] .us-cursor__dot{width:0;height:0}
      .us-cursor__label{position:absolute;left:0;top:0;color:#fff;font:500 12px/1 'Ubuntu',sans-serif;letter-spacing:.04em;text-transform:uppercase;transform:translate(-50%,-50%);opacity:0;transition:opacity .25s ease;white-space:nowrap}
      .us-cursor[data-label]:not([data-label=""]) .us-cursor__label{opacity:1}
      html{cursor:none!important}
      a,button,[data-cursor],[role="button"]{cursor:none!important}
      input,textarea,[contenteditable]{cursor:text!important}
    `;
    document.head.appendChild(s);
  }

  // Smooth follow with rAF
  let mx = -100, my = -100, x = mx, y = my;
  const lerp = 0.22;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  (function tick() {
    x += (mx - x) * lerp;
    y += (my - y) * lerp;
    root.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(tick);
  })();

  // Mode delegation — auto-detect interactive elements
  const setMode = (mode, label) => {
    if (mode) root.dataset.mode = mode; else delete root.dataset.mode;
    root.dataset.label = label || '';
    root.querySelector('.us-cursor__label').textContent = label || '';
  };

  document.addEventListener('mouseover', e => {
    const t = e.target.closest('[data-cursor], a, button, [role="button"], img, video');
    if (!t) { setMode(null); return; }
    const explicit = t.getAttribute('data-cursor');
    const label = t.getAttribute('data-cursor-label') || '';
    if (explicit === 'hide') return setMode('hide');
    if (explicit === 'media') return setMode('media', label || 'View');
    if (t.matches('img, video') && !explicit) return setMode('media', 'View');
    setMode('link', label);
  });
  document.addEventListener('mouseout', e => {
    if (!e.relatedTarget) setMode(null);
  });
  document.addEventListener('mouseleave', () => setMode('hide'));
  document.addEventListener('mouseenter', () => setMode(null));
})();
