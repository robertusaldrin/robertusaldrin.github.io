(function () {
    const savedTheme = localStorage.getItem('theme') || 'theme-light';
    document.documentElement.className = savedTheme;
})();