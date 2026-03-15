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
    WebGLBackground.init();
    Interactions.init();
    
    // 3. Storytelling & Section Animations
    Animations.init();
    
    console.log("App initialized.");
});
