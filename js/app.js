window.onscroll = () => {
    const fakeH = document.querySelector('#fakeHeader');
    const seachBar = document.querySelector('#searchBar');
    const footer = document.querySelector('.foo')
    if (window.innerWidth > 375) {
        if (window.pageYOffset >= 150) {
            fakeH.style.top = '0px';
            fakeH.style.opacity = '1';
        } else {
            fakeH.style.top = '-75px';
            fakeH.style.opacity = '0';
        }
    } else {
        if (window.pageYOffset > 45) {
            seachBar.classList.add('hide');
        } else {
            seachBar.classList.remove('hide');
        }
        if (window.pageYOffset < 45) {
            footer.classList.add('hide');
        } else {
            footer.classList.remove('hide');
        }
    }
};