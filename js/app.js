import { MotionSystem } from './motion-system.js';
import { Navigation } from './navigation.js';
import { Interactions } from './interactions.js';
import { Animations } from './animations.js';
import { WebGLBackground } from './webgl-bg.js';
import { Cursor } from './cursor.js';
import { Performance } from './performance.js';
import { Analytics } from './analytics.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Core Systems
    Performance.init();
    Analytics.init();
    MotionSystem.init();
    
    // 2. UI & Interactions
    Cursor.init();
    Navigation.init();
    Interactions.init();
    
    // 3. Conditional Systems (Code Splitting strategy)
    if (document.querySelector('.hero-image') || document.getElementById('home')) {
        WebGLBackground.init();
    }
    
    if (document.querySelectorAll('.scroll-reveal').length > 0) {
        Animations.init();
    }
    
    console.log("App initialized.");
});
