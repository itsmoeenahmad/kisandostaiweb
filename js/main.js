/**
 * KissanDostAIWeb - Main JavaScript
 * Handles component loading, Lucide icon initialization, and interactions
 */

// ============================================================================
// Component Loader
// ============================================================================

/**
 * Dynamically load HTML components into the page
 * @param {string} componentName - Name of the component (without .html)
 * @param {string} selector - CSS selector where to insert the component
 */
async function loadComponent(componentName, selector) {
    try {
        const response = await fetch(`./components/${componentName}.html`);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentName}: ${response.status}`);
        }
        const html = await response.text();
        const targetElement = document.querySelector(selector);
        if (targetElement) {
            targetElement.innerHTML = html;
            console.log(`✓ Loaded ${componentName}`);
        } else {
            console.error(`Target element not found for ${componentName}: ${selector}`);
        }
    } catch (error) {
        console.error(`Error loading component ${componentName}:`, error);
        // Show user-friendly error
        const targetElement = document.querySelector(selector);
        if (targetElement) {
            targetElement.innerHTML = `<div style="padding: 20px; text-align: center; color: #ef4444;">Failed to load ${componentName}</div>`;
        }
    }
}

/**
 * Load all components on page initialization
 */
async function loadAllComponents() {
    console.log('Starting to load components...');
    const components = [
        { name: 'navbar', selector: '#navbar-placeholder' },
        { name: 'hero', selector: '#hero-placeholder' },
        { name: 'about', selector: '#about-placeholder' },
        { name: 'mission', selector: '#mission-placeholder' },
        { name: 'how-it-works', selector: '#how-it-works-placeholder' },
        { name: 'features', selector: '#features-placeholder' },
        { name: 'faq', selector: '#faq-placeholder' },
        { name: 'contact', selector: '#contact-placeholder' },
        { name: 'footer', selector: '#footer-placeholder' }
    ];

    try {
        // Load components sequentially to maintain order
        for (const component of components) {
            await loadComponent(component.name, component.selector);
        }

        // Reinitialize Lucide icons after components are loaded
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
            console.log('✓ Icons initialized');
        }
        
        console.log('✓ All components loaded');
    } catch (error) {
        console.error('Error loading components:', error);
    } finally {
        // Always hide loading screen, even if there are errors
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.3s';
            setTimeout(() => loadingScreen.remove(), 300);
        }
    }
}

// ============================================================================
// Lucide Icons Initialization
// ============================================================================

/**
 * Initialize Lucide icons
 * This is called after the DOM is ready and after components are loaded
 */
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ============================================================================
// Smooth Scroll Behavior
// ============================================================================

/**
 * Smooth scroll to element
 */
function smoothScrollToElement(elementId) {
    const element = document.querySelector(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============================================================================
// Form Handling
// ============================================================================

/**
 * Handle contact form submission
 */
function handleFormSubmit(event) {
    // Allow default form submission to Formspree
    // Formspree handles the submission automatically
}

// ============================================================================
// DOM Ready & Initialization
// ============================================================================

document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Load all components
        await loadAllComponents();

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    smoothScrollToElement(href);
                }
            });
        });
        
        // Initialize modals after components are loaded
        initializeModals();
    } catch (error) {
        console.error('Critical error during initialization:', error);
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <p style="color: #ef4444; font-size: 18px; margin-bottom: 10px;">Failed to load website</p>
                    <p style="color: #6b7280; font-size: 14px;">${error.message}</p>
                    <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer;">Reload Page</button>
                </div>
            `;
        }
    }
});

// ============================================================================
// Window Load Event
// ============================================================================

window.addEventListener('load', function () {
    // Ensure icons are initialized after all resources load
    initializeLucideIcons();
});

// ============================================================================
// Privacy & Terms Modal Handlers
// ============================================================================

function initializeModals() {
    // Privacy modal
    const privacyLink = document.getElementById('privacy-link');
    const privacyModal = document.getElementById('privacy-modal');
    const closePrivacy = document.getElementById('close-privacy');
    
    // Terms modal
    const termsLink = document.getElementById('terms-link');
    const termsModal = document.getElementById('terms-modal');
    const closeTerms = document.getElementById('close-terms');
    
    // Open privacy modal
    if (privacyLink && privacyModal) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            privacyModal.classList.remove('hidden');
            privacyModal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            setTimeout(() => lucide.createIcons(), 100);
        });
    }
    
    // Close privacy modal
    if (closePrivacy && privacyModal) {
        closePrivacy.addEventListener('click', () => {
            privacyModal.classList.add('hidden');
            privacyModal.classList.remove('flex');
            document.body.style.overflow = '';
        });
        
        privacyModal.addEventListener('click', (e) => {
            if (e.target === privacyModal) {
                privacyModal.classList.add('hidden');
                privacyModal.classList.remove('flex');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Open terms modal
    if (termsLink && termsModal) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            termsModal.classList.remove('hidden');
            termsModal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            setTimeout(() => lucide.createIcons(), 100);
        });
    }
    
    // Close terms modal
    if (closeTerms && termsModal) {
        closeTerms.addEventListener('click', () => {
            termsModal.classList.add('hidden');
            termsModal.classList.remove('flex');
            document.body.style.overflow = '';
        });
        
        termsModal.addEventListener('click', (e) => {
            if (e.target === termsModal) {
                termsModal.classList.add('hidden');
                termsModal.classList.remove('flex');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ESC key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (privacyModal && !privacyModal.classList.contains('hidden')) {
                privacyModal.classList.add('hidden');
                privacyModal.classList.remove('flex');
                document.body.style.overflow = '';
            }
            if (termsModal && !termsModal.classList.contains('hidden')) {
                termsModal.classList.add('hidden');
                termsModal.classList.remove('flex');
                document.body.style.overflow = '';
            }
        }
    });
}

// ============================================================================
// Call Now Button Handler
// ============================================================================

function handleCallNow() {
    const phoneNumber = '+15551234567'; // Replace with actual KisanDostAI US phone number (no dashes for tel: link)
    const displayNumber = '00 1 (555) 123-4567'; // Formatted display number
    
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Open phone dialer on mobile with number pre-filled
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // Show toast notification on desktop
        showToast(displayNumber);
    }
}

// Toast Notification Function
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'fixed top-8 right-8 z-[150] animate-slide-down';
    toast.innerHTML = `
        <div class="bg-white border border-gray-200 px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-md">
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div class="flex-1">
                <p class="text-sm font-semibold text-gray-900 mb-1">Call from Mobile</p>
                <p class="text-xs text-gray-600 leading-relaxed">${message}</p>
            </div>
            <button onclick="this.closest('.fixed').remove()" class="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center flex-shrink-0 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Remove toast after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-20px)';
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
}