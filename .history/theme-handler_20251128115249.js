// Theme Detection and Favicon Switching for ShipMate
(function() {
  // Define icon paths
  const icons = {
    light: 'assets/icons/iconBlack.png',  // Black icon for light theme
    dark: 'assets/icons/icon.png'          // White icon for dark theme
  };

  // Function to update favicon only based on theme
  function updateFavicon(isDark) {
    const iconPath = isDark ? icons.dark : icons.light;
    
    // Update favicon only
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = iconPath;
    }
  }

  // Function to detect and apply theme
  function detectAndApplyTheme() {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateFavicon(prefersDark);
  }

  // Run on page load
  detectAndApplyTheme();

  // Listen for theme changes
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Modern way (addEventListener)
  if (darkModeMediaQuery.addEventListener) {
    darkModeMediaQuery.addEventListener('change', (e) => {
      updateFavicon(e.matches);
    });
  } 
  // Fallback for older browsers
  else if (darkModeMediaQuery.addListener) {
    darkModeMediaQuery.addListener((e) => {
      updateFavicon(e.matches);
    });
  }

  // Optional: Log current theme (for debugging)
  console.log('ShipMate Favicon Theme:', darkModeMediaQuery.matches ? 'Dark' : 'Light');
})();