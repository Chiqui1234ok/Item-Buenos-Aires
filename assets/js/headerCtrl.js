document.addEventListener('scroll', (e) => {
    console.log(window.scrollY);
    // Listener for disclaimer
    if(window.scrollY > 200) {
        if(document.getElementById('disclaimer') && document.getElementById('sidebar')) {
            document.getElementById('disclaimer').classList.add('inactive');
            document.getElementById('sidebar').classList.add('noDisclaimer');
        }
    } else {
        if(document.getElementById('disclaimer') && document.getElementById('sidebar')) {
            document.getElementById('disclaimer').classList.remove('inactive');
            document.getElementById('sidebar').classList.remove('noDisclaimer');
        }
    }
    // Listener for header itself
    if(window.scrollY > 1000) {
        // Only hide header if sidebar isn't displayed 👇
        if(document.getElementById('header') && !checkIfClassExists('sidebar', 'open')) {
            document.getElementById('header').classList.add('inactive');
        }
    }
    else {
        if(document.getElementById('header')) {
            document.getElementById('header').classList.remove('inactive');
        }
    }
});