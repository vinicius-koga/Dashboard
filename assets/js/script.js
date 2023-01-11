function switchTheme() {
    let checkbox = document.querySelector('.switchThemeBtn');
    if (checkbox.classList.contains('unselected')) {
        checkbox.classList.remove('unselected');
        checkbox.classList.add('selected');
        //DARKTHEME
    } else if (checkbox.classList.contains('selected')) {
        checkbox.classList.remove('selected');
        checkbox.classList.add('unselected');
        //LIGHTTHEME
    }
}