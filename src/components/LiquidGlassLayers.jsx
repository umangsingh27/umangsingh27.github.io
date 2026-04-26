import React from 'react';

export default function LiquidGlassLayers() {
  return (
    <>
      {/* 
        1. REFRACTION & 4. FROST
        Refraction: Bending of light, achieved by slight background distortion.
        Frost: Surface roughness, achieved by backdrop blur and saturation.
      */}
      <div className="glass-layer glass-refraction-frost" />
      
      {/* 
        2. DEPTH & 3. DISPERSION
        Depth: The physical thickness, created by dual inner shadows.
        Dispersion: Chromatic aberration (prism effect) at the edges, 
        simulated with layered RGB inset shadows and a subtle chromatic gradient.
      */}
      <div className="glass-layer glass-depth-dispersion" />
      
      {/* 
        Physical Frost Texture (Micro-surface scattering)
      */}
      <div className="glass-layer glass-noise" />
      
      {/* 
        5. SPLAY
        Splay: The spread of light across the curved glass surface.
        This is our specular highlight that dynamically tracks the mouse 
        and spreads softly across the geometry.
      */}
      <div className="glass-layer glass-splay" />
    </>
  );
}
