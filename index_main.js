function toggle(elm) {
  if (!elm.style.display) {
    elm.style.display = 'none';
  } else if (elm.style.display == 'none') {
    elm.style.display = null; 
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const kuwashiku = document.getElementById('kuwashiku');
  const butn      = document.getElementById('kuwashiku_toggle');
  const plus      = document.getElementById('kuwashiku_plus');
  const minus     = document.getElementById('kuwashiku_minus');    
  kuwashiku.style.display = 'none';
  butn.addEventListener('click', () => {
    toggle(kuwashiku);
    toggle(plus);
    toggle(minus);
  });
});
