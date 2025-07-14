const savedTheme = localStorage.getItem('theme') || 'theme-light';
document.getElementById('slider').checked = savedTheme === 'theme-dark';

function setTheme(name) {
    localStorage.setItem('theme', name);
    document.documentElement.className = name;

    document.getElementById('slider').checked = name === 'theme-dark';
}

function toogleTheme() {
    const isChecked = document.getElementById('slider').checked;
    setTheme(isChecked ? 'theme-dark' : 'theme-light');
}