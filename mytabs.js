export function tabs(myDiv, options) {
    myDiv.classList.add('tab');
    const menuItems = myDiv.querySelectorAll(':scope > ul > li > a');
    const divs      = myDiv.querySelectorAll(':scope > div');

    const active = options.active ? Number.parseInt(options.active, 10) : 0;

    menuItems.forEach((clicked, idx) => {
      if (idx == active) {
        clicked.parentNode.classList.add('item-active');
      } else {
        clicked.parentNode.classList.remove('item-active');
      } 
      clicked.addEventListener('click', e => {
        e.preventDefault();
        menuItems.forEach(item => {
          item.parentNode.classList.remove('item-active'); 
        });
        clicked.parentNode.classList.add('item-active'); 
        divs.forEach(item => {
          item.classList.remove('div-active');  
        });
        const target = clicked.href.replace(/^.*#(.*)$/, '$1');
        document.getElementById(target).classList.add('div-active');  
      }) 
    });


    divs.forEach((d, idx) => {
        if (idx == active) {
            d.classList.add('div-active');
        } else {
            d.classList.remove('div-active');
        }
    })
}
