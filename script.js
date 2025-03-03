// script.js
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');
    
    if (sidebar.classList.contains('minimized')) {
        sidebar.classList.remove('minimized');
        mainContent.classList.remove('expanded');
    } else {
        sidebar.classList.add('minimized');
        mainContent.classList.add('expanded');
    }
}


document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll to the element with a smooth effect
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Optional: Highlight the active link
        document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});
