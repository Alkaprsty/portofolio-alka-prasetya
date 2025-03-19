 // Smooth scrolling to pages
 function scrollToPage(pageNumber) {
    const page = document.getElementById(`page${pageNumber}`);
    window.scrollTo({
        top: page.offsetTop,
        behavior: 'smooth'
    });
    
    // Update active nav dot
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
        if (index === pageNumber - 1) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Go to next page when page indicator is clicked
function goToNextPage(currentPage) {
    const totalPages = 7;
    const nextPage = currentPage < totalPages ? currentPage + 1 : 1;
    scrollToPage(nextPage);
}

// Update active nav dot on scroll
window.addEventListener('scroll', function() {
    const pages = document.querySelectorAll('.page');
    const dots = document.querySelectorAll('.nav-dot');
    
    pages.forEach((page, index) => {
        const rect = page.getBoundingClientRect();
        if (rect.top >= -window.innerHeight/2 && rect.top <= window.innerHeight/2) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }
    });
});

// Add animation to grid background
document.addEventListener('mousemove', function(e) {
    const grid = document.querySelector('.grid-background');
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    
    grid.style.transform = `perspective(500px) rotateX(${30 + y * 5}deg) rotateY(${x * 5}deg)`;
});