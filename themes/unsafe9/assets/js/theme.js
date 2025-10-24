// Theme management with system preference detection and local storage
// Initial theme is set inline in head.html to prevent FOUC
(function() {
    const html = document.documentElement;
    const STORAGE_KEY = 'theme-preference';
    const SYSTEM_PREF_KEY = 'system-theme-preference';

    // Get system preference
    const getSystemPreference = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Apply theme to document
    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        updateThemeIcon(theme);
    };

    // Update theme toggle icon
    const updateThemeIcon = (theme) => {
        const sunIcon = document.getElementById('theme-icon-sun');
        const moonIcon = document.getElementById('theme-icon-moon');
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }
    };

    // Get current theme (user preference or system preference)
    const getCurrentTheme = () => {
        const userPref = localStorage.getItem(STORAGE_KEY);
        if (userPref) {
            return userPref;
        }
        return getSystemPreference();
    };

    // Initialize theme on page load
    const initTheme = () => {
        const currentTheme = getCurrentTheme();
        applyTheme(currentTheme);

        // Store current system preference
        localStorage.setItem(SYSTEM_PREF_KEY, getSystemPreference());
    };

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const newSystemPref = e.matches ? 'dark' : 'light';
        const oldSystemPref = localStorage.getItem(SYSTEM_PREF_KEY);

        // If system preference changed, reset user preference and apply new system preference
        if (oldSystemPref && oldSystemPref !== newSystemPref) {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.setItem(SYSTEM_PREF_KEY, newSystemPref);
            applyTheme(newSystemPref);
        }
    });

    // Theme toggle button handler
    document.addEventListener('DOMContentLoaded', () => {
        initTheme();

        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                const currentTheme = html.getAttribute('data-theme') || 'light';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

                // Save user preference
                localStorage.setItem(STORAGE_KEY, newTheme);
                applyTheme(newTheme);
            });
        }
    });
})();
