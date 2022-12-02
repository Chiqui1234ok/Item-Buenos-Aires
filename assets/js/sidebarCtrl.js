// Checks if header's disclaimer is present and act in consequence
if(!document.getElementById('disclaimer')) {
    document.getElementById('sidebar').classList.add('noDisclaimer');
}

function toggleSidebar() {
    // let sidebarOpened = document.getElementById('sidebar').classList.length > 1 ? true : false;
    let sidebarOpened = checkIfClassExists('sidebar', 'open') ;
    if(sidebarOpened) {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('hamburger').classList.remove('active');
        document.getElementById('header').classList.remove('open');
        // sidebarLock = false;
    } else {
        document.getElementById('sidebar').classList.add('open');
        document.getElementById('hamburger').classList.add('active');
        document.getElementById('header').classList.add('open');
        // sidebarLock = true;
    }
}