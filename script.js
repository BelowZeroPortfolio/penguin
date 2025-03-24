// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    let isSearchOpen = false;

    // Toggle search input
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isSearchOpen = !isSearchOpen;
        
        if (isSearchOpen) {
            // Open search
            searchInput.classList.remove('w-0', 'px-0', 'opacity-0');
            searchInput.classList.add('w-64', 'px-4', 'opacity-100', 'mr-2');
            searchInput.focus();
        } else {
            // Close search
            searchInput.classList.remove('w-64', 'px-4', 'opacity-100', 'mr-2');
            searchInput.classList.add('w-0', 'px-0', 'opacity-0');
            searchInput.value = ''; // Clear input when closing
        }
    });

    // Close search when clicking outside
    document.addEventListener('click', function(event) {
        const searchContainer = document.getElementById('searchContainer');
        if (!searchContainer.contains(event.target) && isSearchOpen) {
            isSearchOpen = false;
            searchInput.classList.remove('w-64', 'px-4', 'opacity-100', 'mr-2');
            searchInput.classList.add('w-0', 'px-0', 'opacity-0');
            searchInput.value = '';
        }
    });

    // Handle search input
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // Handle search here
            console.log('Searching for:', searchInput.value);
            // You can add your search logic here
        }
    });
});
