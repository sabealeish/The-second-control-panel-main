
function show_menu() {
        document.querySelector('.heder-right').classList.add('show_menue');
}

function close_menu() {
     document.querySelector('.heder-right').classList.remove('show_menue');
}

function show_menu_2() {
        document.querySelector('.heder-left').classList.toggle('show_menue_2');
        document.querySelector('.open-nav_2').classList.toggle('close-menue_2')
}       