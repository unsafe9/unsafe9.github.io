// Theme live update handler - responds to system preference changes
// Initial theme is set inline in head.html to prevent FOUC
(function() {
    const html = document.documentElement;

    // Apply theme based on system preference
    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
    };

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        applyTheme(e.matches ? 'dark' : 'light');
    });
})();
