/* Page loader — Umang Singh portfolio
 * Full-bleed black panel with brand mark; slides up to reveal content.
 * Plays once per session (sessionStorage). Removes itself from DOM after exit.
 *
 * Usage: <script src="lib/page-loader.js" defer></script>
 * Optional: <body data-loader="off"> to disable on a page.
 */
(function () {
  if (document.body.dataset.loader === 'off') return;
  if (sessionStorage.getItem('us-loader-shown') === '1') return;

  const overlay = document.createElement('div');
  overlay.className = 'us-loader';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <div class="us-loader__inner">
      <div class="us-loader__mark">
        <span class="us-loader__char" style="--i:0">U</span><span class="us-loader__char" style="--i:1">m</span><span class="us-loader__char" style="--i:2">a</span><span class="us-loader__char" style="--i:3">n</span><span class="us-loader__char" style="--i:4">g</span><span class="us-loader__char us-loader__space" style="--i:5">&nbsp;</span><span class="us-loader__char" style="--i:6">S</span><span class="us-loader__char" style="--i:7">i</span><span class="us-loader__char" style="--i:8">n</span><span class="us-loader__char" style="--i:9">g</span><span class="us-loader__char" style="--i:10">h</span>
      </div>
      <div class="us-loader__bar"><span></span></div>
    </div>
  `;
  if (!document.getElementById('us-loader-style')) {
    const s = document.createElement('style');
    s.id = 'us-loader-style';
    s.textContent = `
      .us-loader{position:fixed;inset:0;background:#0F0F1E;z-index:9999;display:flex;align-items:center;justify-content:center;transform:translateY(0);transition:transform 1.2s cubic-bezier(.65,0,.35,1)}
      .us-loader.is-out{transform:translateY(-100%)}
      .us-loader__inner{display:flex;flex-direction:column;align-items:center;gap:32px}
      .us-loader__mark{font-family:'Rokkitt',Georgia,serif;font-size:clamp(40px,7vw,96px);font-weight:700;letter-spacing:-.02em;color:#fff;display:flex;overflow:hidden;line-height:1}
      .us-loader__char{display:inline-block;transform:translateY(110%);animation:usLoaderUp .9s cubic-bezier(.19,1,.22,1) forwards;animation-delay:calc(var(--i) * 60ms + 100ms)}
      .us-loader__space{width:.3em}
      .us-loader__bar{width:200px;height:1px;background:rgba(255,255,255,.15);overflow:hidden}
      .us-loader__bar>span{display:block;height:100%;width:100%;background:#fff;transform-origin:left;transform:scaleX(0);animation:usLoaderBar 1s cubic-bezier(.65,0,.35,1) .8s forwards}
      @keyframes usLoaderUp{to{transform:translateY(0)}}
      @keyframes usLoaderBar{to{transform:scaleX(1)}}
      @media (prefers-reduced-motion: reduce){.us-loader{display:none}}
    `;
    document.head.appendChild(s);
  }
  document.documentElement.appendChild(overlay);
  document.documentElement.style.overflow = 'hidden';

  const exit = () => {
    overlay.classList.add('is-out');
    document.documentElement.style.overflow = '';
    sessionStorage.setItem('us-loader-shown', '1');
    setTimeout(() => overlay.remove(), 1300);
  };
  // 1.8s feels luxurious without testing patience
  setTimeout(exit, 1800);
})();
