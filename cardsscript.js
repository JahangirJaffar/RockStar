function filterCards() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var cards = document.querySelectorAll('.card');
    var noResultsMessage = document.getElementById('noResults');
    var foundResults = false;

    cards.forEach(function(card) {
        var title = card.getAttribute('data-title').toLowerCase();
        var cardHeader = card.querySelector('.card-header').textContent.toLowerCase();
        var tags = card.getAttribute('data-tags').toLowerCase();
        
        if (title.includes(input) || cardHeader.includes(input) || tags.includes(input)) {
            card.style.display = '';
            foundResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!foundResults) {
        noResultsMessage.style.display = 'block';
        // Show cards containing "ad" in header as suggestions
        cards.forEach(function(card) {
            var cardHeader = card.querySelector('.card-header').textContent.toLowerCase();
            if (cardHeader.includes('ad')) {
                card.style.display = '';
            }
        });
    } else {
        noResultsMessage.style.display = 'none';
    }
}

function filterByTag(tag) {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        var tags = card.getAttribute('data-tags').toLowerCase();
        if (tags.includes(tag)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
