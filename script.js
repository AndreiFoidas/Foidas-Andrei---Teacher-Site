function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    var toggleIcon = content.previousElementSibling.querySelector('.toggle-icon i');

    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';

    toggleIcon.className = (content.style.display === 'none') ? 'fas fa-plus' : 'fas fa-minus';
}
