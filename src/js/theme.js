
const switchRef = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector('body');

switchRef.addEventListener('change', onSwitchBtnClick);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_KEY = 'theme';

firstThemeSet();

function onSwitchBtnClick(e) {
  setTheme();
  }
function setTheme() {
  if(getCurrentTheme() === Theme.LIGHT){
    localStorage.setItem(THEME_KEY , Theme.DARK);
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    localStorage.setItem(THEME_KEY , Theme.LIGHT);
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
  }

}

function firstThemeSet() { 
  if (getCurrentTheme()) {
    bodyRef.classList.add(getCurrentTheme());
    if(getCurrentTheme() === Theme.DARK ){
      switchRef.checked = true;
    }
  }
}
function getCurrentTheme() {
  return localStorage.getItem(THEME_KEY); 
} 
// function setDarkTheme() {
//   localStorage.setItem(THEME_KEY , Theme.DARK);
//   bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
// }
// function setLightTheme() {
//   localStorage.setItem(THEME_KEY , Theme.LIGHT);
//   bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
// }