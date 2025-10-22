// Simple client-side search functionality
(function() {
    const searchInput = document.getElementById('search-input');
    const postsTimeline = document.getElementById('posts-timeline');

    if (!searchInput || !postsTimeline) return;

    let allPosts = [];
    const postCards = Array.from(postsTimeline.querySelectorAll('.post-card'));

    // Extract post data from DOM
    postCards.forEach(card => {
        const title = card.querySelector('.post-card-title')?.textContent || '';
        // Note: Summary not included in post cards, only title and tags are searchable
        const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent);

        allPosts.push({
            element: card,
            title: title.toLowerCase(),
            tags: tags.map(t => t.toLowerCase()),
            searchableText: (title + ' ' + tags.join(' ')).toLowerCase()
        });
    });

    // Search function
    function performSearch(query) {
        const searchTerm = query.toLowerCase().trim();

        if (searchTerm === '') {
            // Show all posts
            allPosts.forEach(post => {
                post.element.style.display = '';
            });
            // Remove "no results" message if it exists
            const noResultsMsg = postsTimeline.querySelector('.no-results');
            if (noResultsMsg) {
                noResultsMsg.remove();
            }
            return;
        }

        // Filter posts
        allPosts.forEach(post => {
            const matches = post.searchableText.includes(searchTerm);
            post.element.style.display = matches ? '' : 'none';
        });

        // Show "no results" message if needed
        const visiblePosts = allPosts.filter(post => post.element.style.display !== 'none');
        let noResultsMsg = postsTimeline.querySelector('.no-results');

        if (visiblePosts.length === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-posts no-results';
                noResultsMsg.innerHTML = '<p>No posts found matching your search.</p>';
                postsTimeline.appendChild(noResultsMsg);
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }

    // Add event listener with debounce
    let debounceTimer;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            performSearch(e.target.value);
        }, 300);
    });

    // Allow clearing search with Escape key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch('');
            searchInput.blur();
        }
    });
})();
