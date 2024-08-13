// Example: Image hover effect
document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.img-fluid');

    image.addEventListener('mouseover', function() {
        image.style.filter = 'blur(5px)';
    });

    image.addEventListener('mouseout', function() {
        image.style.filter = 'none';
    });
});
