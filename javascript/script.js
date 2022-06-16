const  toggleButton = document.querySelector('#header #navbar .togglebutton');
const  navbarLink = document.querySelector('#header #navbar #menu-div');
const body = document.querySelector('#body');

toggleButton.addEventListener('click', () => {
        navbarLink.classList.toggle('active')

        // Scrollbar toggle
        if(navbarLink.className.includes('active')) {
            body.classList.toggle('HideScrollBar')
        }
        else {
            body.classList.remove('HideScrollBar')
        }
        // end code for scrollbar toggle
        
})


    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            if(navbarLink.className.includes('active')) {
                navbarLink.classList.remove('active')
            }
        }
    })