document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    let isSearchOpen = false;

    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isSearchOpen = !isSearchOpen;
        
        if (isSearchOpen) {
            searchInput.classList.remove('w-0', 'px-0', 'opacity-0');
            searchInput.classList.add('w-64', 'px-4', 'opacity-100', 'mr-2');
            searchInput.focus();
        } else {
            searchInput.classList.remove('w-64', 'px-4', 'opacity-100', 'mr-2');
            searchInput.classList.add('w-0', 'px-0', 'opacity-0');
            searchInput.value = '';
        }
    });

    document.addEventListener('click', function(event) {
        const searchContainer = document.getElementById('searchContainer');
        if (!searchContainer.contains(event.target) && isSearchOpen) {
            isSearchOpen = false;
            searchInput.classList.remove('w-64', 'px-4', 'opacity-100', 'mr-2');
            searchInput.classList.add('w-0', 'px-0', 'opacity-0');
            searchInput.value = '';
        }
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            console.log('Searching for:', searchInput.value);
        }
    });
});
