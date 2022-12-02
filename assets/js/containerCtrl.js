// Checks if header's disclaimer is present and act in consequence
if(!document.getElementById('disclaimer')) {
    const container = document.getElementsByClassName('container');
    if(container[0]) {
        document.getElementsByClassName('container')[0].classList.add('noDisclaimer');
    }
}