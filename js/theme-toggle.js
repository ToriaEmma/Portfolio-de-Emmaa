// Script pour le changement de mode jour/nuit
(function() {
  function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    if (!themeToggle || !moonIcon || !sunIcon) return;
    
    // Fonction pour mettre à jour l'affichage des icônes
    function updateIcons(isDark) {
      if (isDark) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
      } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
      }
    }
    
    // Vérifier le mode actuel
    function getCurrentMode() {
      const html = document.documentElement;
      return html.classList.contains('dark');
    }
    
    // Initialiser l'affichage
    updateIcons(getCurrentMode());
    
    // Gestionnaire de clic
    themeToggle.addEventListener('click', function() {
      const html = document.documentElement;
      const isDarkMode = html.classList.contains('dark');
      
      if (isDarkMode) {
        // Passer en mode clair
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('nuxt-color-mode', 'light');
        updateIcons(false);
      } else {
        // Passer en mode sombre
        html.classList.remove('light');
        html.classList.add('dark');
        localStorage.setItem('nuxt-color-mode', 'dark');
        updateIcons(true);
      }
      
      // Mettre à jour la préférence globale Nuxt
      if (window.__NUXT_COLOR_MODE__) {
        window.__NUXT_COLOR_MODE__.preference = isDarkMode ? 'light' : 'dark';
        window.__NUXT_COLOR_MODE__.value = isDarkMode ? 'light' : 'dark';
      }
    });
  }
  
  // Initialiser quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
