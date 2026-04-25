/**
 * @file webicons.js
 * @product    Webecon — Premium Animated Icon Engine
 * @author     Aditya Divte Production (aka Aditya Diwate)
 * @company    adityadivte.com
 * @watermark  Webecon by Aditya Divte Production (aka Aditya Diwate) — support@adityadivte.com
 * @license    Free for commercial use. Standalone asset resale strictly prohibited.
 * @version    17.2 PRO
 * @copyright  © 2026 Aditya Divte Production (aka Aditya Diwate). All rights reserved.
 * @see        https://adityadivte.com
 * @info       Visit webecon.adityadivte.com for more info
 */
import icons from './icons.js';

// --- WEBECON PROFESSIONAL PROVENANCE & TELEMETRY ---
(function() {
    if (window.__WEBICONS_BRANDED__) return;
    window.__WEBICONS_BRANDED__ = true;

    const VERSION = '17.2 PRO';
    const BRAND   = 'Webecon by Aditya Divte Production (aka Aditya Diwate) — support@adityadivte.com';
    const msg = ` %c 🚀 WEBECON v${VERSION} %c © Webecon by Aditya Divte Production (aka Aditya Diwate) %c adityadivte.com `;
    console.log(msg,
        'color: #000; background: #00f2fe; padding: 5px 10px; border-radius: 4px 0 0 4px; font-weight: bold;',
        'color: #fff; background: #6366f1; padding: 5px 10px; font-weight: bold;',
        'color: #6366f1; background: #000; padding: 5px 10px; border-radius: 0 4px 4px 0; border: 1px solid #6366f1;');

    console.log(`[Webecon] ${BRAND}`);
    console.log(`[Webecon] Free for commercial use — credit appreciated but not required.`);
    console.log(`[Webecon] Standalone icon resale is strictly prohibited.`);

    try {
        const host = window.location.hostname;
        if (host && !['localhost', '127.0.0.1'].includes(host)) {
            console.log(`[Webecon] Authenticated for ${host}. ${BRAND}`);
        }
    } catch(e) {}
})();

console.log('[Webecon] Defining Webecon class...');
class Webecon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._iconData = null;
        this._animationStyles = null;
        this._clickHandler = this._handleClick.bind(this);
    }

    static get observedAttributes() {
        return ['name', 'size', 'color', 'secondary-color', 'secondary-opacity', 'stroke', 'animation', 'animation-mode', 'theme'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal === newVal) return;
        if (['name', 'theme'].includes(name)) {
            this.render();
        } else {
            this._updateStyles();
        }
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', this._clickHandler);
    }

    disconnectedCallback() {
        this.removeEventListener('click', this._clickHandler);
    }

    _handleClick() {
        const mode = this.getAttribute('animation-mode') || 'infinite';
        if (mode !== 'click') return;

        const animation = this.getAttribute('animation') || 'none';
        if (animation === 'none') return;
        const motionWrapper = this.shadowRoot.querySelector('.motion-wrapper');
        if (!motionWrapper) return;
        
        // Force restart animation
        motionWrapper.style.animation = 'none';
        void motionWrapper.offsetWidth; // Trigger reflow
        
        const config = this._getAnimationConfig(animation);
        // Explicitly set 1 iteration for click mode
        motionWrapper.style.animation = `${animation} ${config.duration} ${config.timing} 1`;
        
        // Reset after duration to allow re-triggering
        setTimeout(() => {
            if (this.getAttribute('animation-mode') === 'click') {
                motionWrapper.style.animation = 'none';
            }
        }, parseFloat(config.duration) * 1000);
    }

    _getAnimationConfig(name) {
        const configs = {
            'spin': { duration: '2s', timing: 'linear' },
            'spin-slow': { duration: '4s', timing: 'linear' },
            'pulse': { duration: '2s', timing: 'ease-in-out' },
            'heartbeat': { duration: '1.2s', timing: 'ease-in-out' },
            'bounce': { duration: '1s', timing: 'ease-in-out' },
            'shake': { duration: '0.6s', timing: 'ease-in-out' },
            'ring': { duration: '2s', timing: 'ease-in-out' },
            'swing': { duration: '2s', timing: 'ease-in-out' },
            'float': { duration: '3s', timing: 'ease-in-out' },
            'flash': { duration: '1.5s', timing: 'ease-in-out' },
            'rubber-band': { duration: '1s', timing: 'ease-in-out' },
            'tada': { duration: '1s', timing: 'ease-in-out' },
            'jello': { duration: '1s', timing: 'ease-in-out' },
            'fade': { duration: '1.5s', timing: 'ease-in-out' },
            'flip': { duration: '1.5s', timing: 'ease-in-out' },
            'flip-v': { duration: '1.5s', timing: 'ease-in-out' },
            'rotate-90': { duration: '0.4s', timing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' },
            'zoom-in': { duration: '0.5s', timing: 'ease-out' },
            'zoom-out': { duration: '0.5s', timing: 'ease-in' },
            'slide-up': { duration: '0.5s', timing: 'ease-out' }
        };
        return configs[name] || { duration: '1s', timing: 'ease-in-out' };
    }

    _updateStyles() {
        const color = this.getAttribute('color') || 'currentColor';
        const secondary = this.getAttribute('secondary-color') || 'rgba(255, 255, 255, 0.2)';
        const size = this.getAttribute('size') || '24';
        const stroke = this.getAttribute('stroke') || '2';
        const animation = this.getAttribute('animation') || 'none';
        const mode = this.getAttribute('animation-mode') || 'infinite';
        const config = this._getAnimationConfig(animation);

        this.style.width = `${size}px`;
        this.style.height = `${size}px`;
        this.style.color = color;
        this.style.setProperty('--webecon-primary', color);
        this.style.setProperty('--webecon-secondary', secondary);
        this.style.setProperty('--anim-name', animation);
        this.style.setProperty('--anim-duration', config.duration);
        this.style.setProperty('--anim-timing', config.timing);

        const motionWrapper = this.shadowRoot.querySelector('.motion-wrapper');
        if (motionWrapper) {
            motionWrapper.className = `motion-wrapper anim-${animation} mode-${mode}`;
        }

        const svgs = this.shadowRoot.querySelectorAll('svg');
        svgs.forEach(svg => svg.style.strokeWidth = stroke);

        const duoBg = this.shadowRoot.querySelector('.duo-layer-bg');
        if (duoBg) {
            duoBg.style.stroke = secondary;
            duoBg.style.strokeWidth = (parseFloat(stroke) * 1.5).toString();
        }

        const fillLayer = this.shadowRoot.querySelector('.fill-layer');
        if (fillLayer) {
            if (secondary === 'transparent' || secondary === 'none') {
                fillLayer.style.display = 'none';
            } else {
                fillLayer.style.display = 'block';
                fillLayer.style.fill = secondary;
                const opacity = this.getAttribute('secondary-opacity') || '0.35';
                fillLayer.style.fillOpacity = opacity;
            }
        }

        const bloby = this.shadowRoot.querySelector('.blobify');
        if (bloby) bloby.style.background = secondary;

        const halo = this.shadowRoot.querySelector('.halo-ring');
        if (halo) {
            halo.style.borderColor = color;
            halo.style.boxShadow = `0 0 15px ${color}`;
        }
    }

    render() {
        const name = this.getAttribute('name') || 'home';
        const theme = this.getAttribute('theme') || 'line';
        const iconPath = icons[name] || icons['home'];
        const gradId = `g-${Math.random().toString(36).substr(2, 5)}`;
        const maskId = `m-${Math.random().toString(36).substr(2, 5)}`;

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: inline-flex; align-items: center; justify-content: center; cursor: pointer; position: relative; }
                
                .theme-wrapper { 
                    position: relative; width: 100%; height: 100%; 
                    display: flex; align-items: center; justify-content: center;
                }
                
                .motion-wrapper { 
                    position: relative; width: 100%; height: 100%; 
                    display: flex; align-items: center; justify-content: center; 
                    transform-origin: center;
                }

                svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; transition: stroke 0.3s ease; }

                /* --- ADVANCED THEMES --- */
                
                :host([theme="neon"]) .motion-wrapper { filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor); }
                
                .duo-layer-bg { display: none; position: absolute; inset: 0; opacity: 0.25; transition: stroke 0.3s ease; }
                :host([theme="duo"]) .duo-layer-bg { display: block; }

                .fill-layer { display: block; position: absolute; inset: 0; z-index: 0; opacity: var(--webecon-fill-opacity, 0.2); }
                .fill-layer path { stroke: none !important; }

                .glass-bg { display: none; position: absolute; inset: -15%; background: rgba(255,255,255,0.05); backdrop-filter: blur(8px); border-radius: 25%; border: 1px solid rgba(255,255,255,0.1); z-index: -1; }
                :host([theme="glass"]) .glass-bg { display: block; }

                :host([theme="shine"]) .main-svg { mask: url(#${maskId}); }
                .shine-gradient { animation: shine-move 2s infinite linear; }
                @keyframes shine-move { from { transform: translateX(-100%) translateY(-100%); } to { transform: translateX(100%) translateY(100%); } }

                :host([theme="3d"]) .theme-wrapper { transform: perspective(500px) rotateX(20deg) rotateY(-15deg); }
                :host([theme="3d"]) .motion-wrapper { filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.3)); }

                :host([theme="solid"]) .main-svg { fill: currentColor; }
                :host([theme="brutalist"]) .motion-wrapper { stroke-width: 4 !important; filter: drop-shadow(4px 4px 0px #000); }
                
                :host([theme="cyberpunk"]) .motion-wrapper { filter: drop-shadow(-2px 0 #ff003c) drop-shadow(2px 0 #00f0ff); animation: glitch 0.4s infinite; }
                @keyframes glitch { 0%, 100% { transform: translate(0); } 20% { transform: translate(-1px, 1px); } 60% { transform: translate(1px, -1px); } }

                .halo-ring { display: none; position: absolute; inset: -10%; border: 2px solid currentColor; border-radius: 50%; opacity: 0.4; animation: halo-pulse 2s infinite; pointer-events: none; }
                @keyframes halo-pulse { 0% { transform: scale(0.8); opacity: 0.6; } 100% { transform: scale(1.5); opacity: 0; } }
                :host([theme="halo"]) .halo-ring { display: block; }

                .blobify { display: none; position: absolute; inset: -20%; background: currentColor; opacity: 0.15; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; animation: blobify 6s infinite ease-in-out; z-index: -1; }
                @keyframes blobify { 0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; } 50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; } }
                :host([theme="blob"]) .blobify { display: block; }

                /* --- ANIMATION ENGINE --- */
                .mode-infinite { animation: var(--anim-name) var(--anim-duration) var(--anim-timing) infinite; }
                :host(:hover) .mode-hover { animation: var(--anim-name) var(--anim-duration) var(--anim-timing) infinite; }
                .mode-click { animation: none; } /* Click mode is handled via JS */

                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
                @keyframes heartbeat { 0%, 100% { transform: scale(1); } 20% { transform: scale(1.25); } 40% { transform: scale(1.15); } 60% { transform: scale(1.25); } }
                @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-30%); } 60% { transform: translateY(-15%); } }
                @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15%); } }
                @keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-10%); } 40%, 80% { transform: translateX(10%); } }
                @keyframes ring { 0%, 100% { transform: rotate(0); } 10%, 30%, 50%, 70%, 90% { transform: rotate(-10deg); } 20%, 40%, 60%, 80% { transform: rotate(10deg); } }
                @keyframes swing { 0%, 100% { transform: rotate(0); } 20% { transform: rotate(15deg); } 40% { transform: rotate(-10deg); } 60% { transform: rotate(5deg); } 80% { transform: rotate(-5deg); } }
                @keyframes flash { 0%, 50%, 100% { opacity: 1; } 25%, 75% { opacity: 0.2; } }
                @keyframes rubber-band { 0% { transform: scale(1); } 30% { transform: scaleX(1.25) scaleY(0.75); } 40% { transform: scaleX(0.75) scaleY(1.25); } 50% { transform: scaleX(1.15) scaleY(0.85); } 100% { transform: scale(1); } }
                @keyframes tada { 0% { transform: scale(1); } 10%, 20% { transform: scale(0.9) rotate(-3deg); } 30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); } 40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); } 100% { transform: scale(1) rotate(0); } }
                @keyframes jello { 11.1% { transform: translate(0); } 22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); } 33.3% { transform: skewX(6.25deg) skewY(6.25deg); } 44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); } 55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); } 100% { transform: translate(0); } }
                @keyframes fade { 0% { opacity: 0; } 100% { opacity: 1; } }
                @keyframes flip { from { transform: perspective(400px) rotateY(0); } to { transform: perspective(400px) rotateY(360deg); } }
                @keyframes flip-v { from { transform: perspective(400px) rotateX(0); } to { transform: perspective(400px) rotateX(360deg); } }
                @keyframes rotate-90 { to { transform: rotate(90deg); } }
                @keyframes zoom-in { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                @keyframes zoom-out { from { transform: scale(1.2); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                @keyframes slide-up { from { transform: translateY(20%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            </style>
            <div class="theme-wrapper">
                <div class="glass-bg"></div>
                <div class="blobify"></div>
                <div class="halo-ring"></div>
                
                <div class="motion-wrapper">
                    <svg class="fill-layer" viewBox="0 0 24 24">${iconPath}</svg>
                    <svg class="duo-layer-bg" viewBox="0 0 24 24">${iconPath}</svg>
                    <svg class="main-svg" viewBox="0 0 24 24">
                        <defs>
                            <mask id="${maskId}">
                                <rect width="100%" height="100%" fill="white" />
                                <rect class="shine-gradient" width="200%" height="200%" fill="url(#shine-grad)" transform="rotate(45)" />
                            </mask>
                            <linearGradient id="shine-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="white" stop-opacity="0" />
                                <stop offset="50%" stop-color="white" stop-opacity="0.8" />
                                <stop offset="100%" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                        ${iconPath}
                    </svg>
                </div>
            </div>
        `;
        this._updateStyles();
    }
}
if (!customElements.get('webecon-icon')) { 
    console.log('[Webecon] Registering custom element <webecon-icon>...');
    customElements.define('webecon-icon', Webecon); 
}
