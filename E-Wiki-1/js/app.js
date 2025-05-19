// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // Adaugă starea de încărcare
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    
    // Dezactivează căutarea până se încarcă datele
    searchButton.disabled = true;
    searchInput.disabled = true;
    searchButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    
    // Când datele sunt încărcate, activează căutarea
    document.addEventListener('dataLoaded', function() {
        searchButton.disabled = false;
        searchInput.disabled = false;
        searchButton.innerHTML = '<i class="fas fa-search"></i> Search';
        searchButton.addEventListener('click', searchAdditive);
        
        // Add event listener for pressing Enter in the search input
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchAdditive();
            }
        });
        
        // Focus on search input when data is loaded
        searchInput.focus();
    });
    
    // În caz de eroare, folosește datele din database.js
    document.addEventListener('dataLoadError', function() {
        console.log('Se folosesc datele din backup (database.js)');
        searchButton.disabled = false;
        searchInput.disabled = false;
        searchButton.innerHTML = '<i class="fas fa-search"></i> Search';
        searchButton.addEventListener('click', searchAdditive);
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchAdditive();
            }
        });
        
        searchInput.focus();
    });
});