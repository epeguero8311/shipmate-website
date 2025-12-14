
(function() {

  const icons = {
    light: 'assets/icons/iconBlack.png', 
    dark: 'assets/icons/icon.png'         
  };


  function updateFavicon(isDark) {
    const iconPath = isDark ? icons.dark : icons.light;
    

    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = iconPath;
    }
  }

  function detectAndApplyTheme() {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateFavicon(prefersDark);
  }


  detectAndApplyTheme();


  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  

  if (darkModeMediaQuery.addEventListener) {
    darkModeMediaQuery.addEventListener('change', (e) => {
      updateFavicon(e.matches);
    });
  } 

  else if (darkModeMediaQuery.addListener) {
    darkModeMediaQuery.addListener((e) => {
      updateFavicon(e.matches);
    });
  }


  console.log('ShipMate Favicon Theme:', darkModeMediaQuery.matches ? 'Dark' : 'Light');
})();