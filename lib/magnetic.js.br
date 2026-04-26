/* Magnetic buttons — Umang Singh portfolio
 * Cursor pulls element toward it within a radius. Pure transform, no layout.
 *
 * Usage:
 *   <a class="btn" data-magnetic data-magnetic-strength="0.4" data-magnetic-radius="80">…</a>
 *   <script src="lib/magnetic.js" defer></script>
 *
 * Defaults: strength 0.35, radius 60px. Auto-disables on touch / reduced-motion.
 */
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const attach = el => {
    const strength = parseFloat(el.dataset.magneticStrength) || 0.35;
    const radius   = parseFloat(el.dataset.magneticRadius)   || 60;
    let raf, tx = 0, ty = 0, currX = 0, currY = 0;

    const apply = () => {
      currX += (tx - currX) * 0.18;
      currY += (ty - currY) * 0.18;
      el.style.transform = `translate3d(${currX}px, ${currY}px, 0)`;
      if (Math.abs(tx - currX) > 0.1 || Math.abs(ty - currY) > 0.1) {
        raf = requestAnimationFrame(apply);
      } else {
        raf = null;
      }
    };

    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > Math.max(r.width, r.height) / 2 + radius) return;
      tx = dx * strength;
      ty = dy * strength;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    el.addEventListener('mouseleave', () => {
      tx = 0; ty = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    // Smooth transition only while easing back home
    el.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1)';
  };

  const init = () => document.querySelectorAll('[data-magnetic]').forEach(attach);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // Re-scan on demand
  window.usMagneticScan = init;
})();
