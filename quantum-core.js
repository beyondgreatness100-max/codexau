/**
 * ========================================
 * QUANTUM CORE - Year 3250 Framework
 * Advanced JavaScript Engine
 * ========================================
 */

// Quantum Particle System
class QuantumParticleSystem {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.particles = [];
        this.particleCount = 100;
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 25;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';
        
        // Random colors
        const colors = ['#C6A962', '#E8DCC4', '#FFD700', '#D4AF37'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        if (this.container) {
            this.container.appendChild(particle);
        }
        
        this.particles.push(particle);
    }
}

// Neural Network Background
class NeuralNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.nodeCount = 50;
        this.connections = [];
        this.mouse = { x: null, y: null };
        
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        for (let i = 0; i < this.nodeCount; i++) {
            this.nodes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw nodes
        this.nodes.forEach((node, i) => {
            node.x += node.vx;
            node.y += node.vy;
            
            if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;
            
            // Draw node
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(198,169,98,0.8)';
            this.ctx.fill();
            
            // Draw connections
            this.nodes.forEach((otherNode, j) => {
                if (i !== j) {
                    const dx = node.x - otherNode.x;
                    const dy = node.y - otherNode.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 150) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(node.x, node.y);
                        this.ctx.lineTo(otherNode.x, otherNode.y);
                        this.ctx.strokeStyle = `rgba(198,169,98,${0.2 * (1 - dist / 150)})`;
                        this.ctx.lineWidth = 1;
                        this.ctx.stroke();
                    }
                }
            });
            
            // Mouse interaction
            if (this.mouse.x && this.mouse.y) {
                const dx = node.x - this.mouse.x;
                const dy = node.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 200) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(node.x, node.y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.strokeStyle = `rgba(232,220,196,${0.3 * (1 - dist / 200)})`;
                    this.ctx.lineWidth = 2;
                    this.ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Holographic Scanner Effect
class HolographicScanner {
    constructor() {
        this.scanLine = document.createElement('div');
        this.scanLine.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #C6A962, transparent);
            box-shadow: 0 0 20px #C6A962;
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
        `;
        document.body.appendChild(this.scanLine);
        this.scan();
    }

    scan() {
        this.scanLine.style.opacity = '0.7';
        this.scanLine.style.transition = 'top 2s linear, opacity 0.5s';
        this.scanLine.style.top = '0';
        
        setTimeout(() => {
            this.scanLine.style.top = '100%';
        }, 100);
        
        setTimeout(() => {
            this.scanLine.style.opacity = '0';
            setTimeout(() => this.scan(), 5000);
        }, 2000);
    }
}

// Quantum Cursor Trail
class QuantumCursor {
    constructor() {
        this.trail = [];
        this.maxTrail = 20;
        
        document.addEventListener('mousemove', (e) => {
            this.addTrailDot(e.clientX, e.clientY);
        });
    }

    addTrailDot(x, y) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #C6A962, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            left: ${x - 4}px;
            top: ${y - 4}px;
            opacity: 0.6;
            animation: fade-out 1s forwards;
        `;
        
        document.body.appendChild(dot);
        
        setTimeout(() => {
            dot.remove();
        }, 1000);
    }
}

// Typing Effect
class QuantumTyper {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Data Matrix Rain (like Matrix code)
class DataMatrix {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        
        this.resize();
        this.init();
        
        window.addEventListener('resize', () => this.resize());
        setInterval(() => this.draw(), 50);
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.init();
    }

    init() {
        this.drops = Array(this.columns).fill(1);
    }

    draw() {
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#C6A962';
        this.ctx.font = this.fontSize + 'px monospace';
        
        for (let i = 0; i < this.drops.length; i++) {
            const char = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.ctx.fillText(char, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
    }
}

// Smooth Scroll Reveal Animations
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-left, .reveal-right');
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translate(0, 0) scale(1)';
                }
            });
        }, { threshold: 0.1 });
        
        this.elements.forEach(el => this.observer.observe(el));
    }
}

// Audio Visualizer (simulated)
class AudioVisualizer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.bars = 64;
        this.barData = Array(this.bars).fill(0);
        
        this.resize();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = 200;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const barWidth = this.canvas.width / this.bars;
        
        for (let i = 0; i < this.bars; i++) {
            // Simulate audio data
            this.barData[i] = Math.random() * this.canvas.height * 0.8;
            
            const gradient = this.ctx.createLinearGradient(0, this.canvas.height, 0, 0);
            gradient.addColorStop(0, '#C6A962');
            gradient.addColorStop(0.5, '#E8DCC4');
            gradient.addColorStop(1, '#FFD700');
            
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(
                i * barWidth + 2,
                this.canvas.height - this.barData[i],
                barWidth - 4,
                this.barData[i]
            );
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize all systems
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-out animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fade-out {
            to { opacity: 0; transform: scale(0); }
        }
        .reveal-up, .reveal-scale, .reveal-left, .reveal-right {
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
    
    // Initialize systems
    new QuantumParticleSystem('quantum-particles');
    new HolographicScanner();
    new QuantumCursor();
    new ScrollReveal();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth anchor scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Add glitch effect to certain elements
    document.querySelectorAll('.glitch').forEach(el => {
        el.setAttribute('data-text', el.textContent);
    });
    
    // Console easter egg
    console.log('%c⚡ QUANTUM SYSTEM ONLINE ⚡', 'color: #C6A962; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #C6A962;');
    console.log('%cWelcome to the Year 3250', 'color: #E8DCC4; font-size: 14px;');
    console.log('%cNeural Networks: ACTIVE', 'color: #FFD700;');
    console.log('%cHolographic Display: ENABLED', 'color: #FFD700;');
    console.log('%cQuantum Core: OPERATIONAL', 'color: #FFD700;');
});

// Export classes for external use
window.QuantumCore = {
    ParticleSystem: QuantumParticleSystem,
    NeuralNetwork: NeuralNetwork,
    Scanner: HolographicScanner,
    Cursor: QuantumCursor,
    Typer: QuantumTyper,
    DataMatrix: DataMatrix,
    ScrollReveal: ScrollReveal,
    AudioVisualizer: AudioVisualizer
};
