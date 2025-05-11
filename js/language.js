// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add language switcher to the navigation brand
    const brandElement = document.querySelector('.nav-brand h1');
    if (brandElement) {
        brandElement.innerHTML = '<span class="lang-text">中文</span>';
        brandElement.classList.add('lang-switch');
        brandElement.addEventListener('click', switchLanguage);
    }
    
    // Initialize the language based on current page
    initLanguage();
});

// Check and initialize the language display
function initLanguage() {
    const currentPath = window.location.pathname;
    const langToggle = document.getElementById('langToggle');
    
    if (currentPath.includes('index_en.html')) {
        if (langToggle) {
            langToggle.innerHTML = 'EN / 中';
            langToggle.classList.add('en');
        }
        document.querySelector('.lang-text').textContent = 'English';
    } else {
        if (langToggle) {
            langToggle.innerHTML = '中 / EN';
            langToggle.classList.remove('en');
        }
        document.querySelector('.lang-text').textContent = ' ';
    }
}

// Function to switch between languages
function switchLanguage() {
    const currentPath = window.location.pathname;
    let newPath;
    
    if (currentPath.includes('index_en.html')) {
        newPath = currentPath.replace('index_en.html', 'index.html');
    } else {
        newPath = currentPath.replace('index.html', 'index_en.html');
        // If the path doesn't include index.html (e.g., /)
        if (newPath === currentPath) {
            if (currentPath.endsWith('/')) {
                newPath = currentPath + 'index_en.html';
            } else {
                // Handle special cases - add logic as needed
                const lastSlashIndex = currentPath.lastIndexOf('/');
                if (lastSlashIndex !== -1) {
                    newPath = currentPath.substring(0, lastSlashIndex + 1) + 'index_en.html';
                } else {
                    newPath = '/index_en.html';
                }
            }
        }
    }
    
    window.location.href = newPath;
} 