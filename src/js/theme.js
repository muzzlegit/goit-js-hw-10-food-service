
const switchRef = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector('body');

switchRef.addEventListener('change', onSwitchBtnClick);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_KEY = 'theme';
const сurrentTheme = getCurrentTheme();

firstThemeSet();

function onSwitchBtnClick(e) {
    if(e.target.checked){
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }
function setDarkTheme() {
  localStorage.setItem(THEME_KEY , Theme.DARK);
  bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
}
function setLightTheme() {
  localStorage.setItem(THEME_KEY , Theme.LIGHT);
  bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
}
function firstThemeSet() { 
  if (сurrentTheme) {
    bodyRef.classList.add(сurrentTheme);
    if(сurrentTheme === Theme.DARK ){
      switchRef.checked = true;
    }
  }
}
function getCurrentTheme() {
  return localStorage.getItem(THEME_KEY); 
} 
