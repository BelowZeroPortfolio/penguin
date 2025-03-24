document.addEventListener('DOMContentLoaded', function() {
    // Create a placeholder div for the footer
    const footerPlaceholder = document.createElement('div');
    footerPlaceholder.id = 'footer-placeholder';
    document.body.appendChild(footerPlaceholder);

    // Fetch the footer content
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}); 