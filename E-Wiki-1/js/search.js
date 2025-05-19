/* filepath: c:\Users\Ryan\OneDrive\Desktop\E-Wiki-1\js\search.js */
// Search functionality with enhanced features
function searchAdditive() {
    const searchInput = document.getElementById('search-input').value.trim();
    const resultContainer = document.getElementById('result-container');
    
    // Clear previous results
    resultContainer.innerHTML = '';
    
    // Reset animation
    resultContainer.classList.remove('active');
    void resultContainer.offsetWidth; // Force reflow to restart animation
    
    // If empty search, hide results and return
    if (!searchInput) {
        resultContainer.style.display = 'none';
        return;
    }
    
    // Show the result container with animation
    resultContainer.style.display = 'block';
    setTimeout(() => {
        resultContainer.classList.add('active');
    }, 10);
    
    // Normalize input (remove any spaces and ensure E prefix)
    let normalizedInput = searchInput.replace(/\s+/g, '').toUpperCase();
    if (!normalizedInput.startsWith('E')) {
        normalizedInput = 'E' + normalizedInput;
    }
    
    // First try exact match
    let additive = additives.find(item => item.code.toUpperCase() === normalizedInput);
    
    // If no exact match, try name search (more flexible)
    if (!additive && searchInput.length > 2) {
        const searchTerms = searchInput.toLowerCase().split(' ');
        additive = additives.find(item => {
            const itemName = item.name.toLowerCase();
            return searchTerms.some(term => itemName.includes(term) && term.length > 2);
        });
    }
    
    if (additive) {
        // Get the appropriate safety icon
        const safetyIcon = getSafetyIcon(additive.safetyLevel);
        
        // Display additive information with enhanced UI
        const additiveHTML = `
            <div class="additive additive-${additive.safetyLevel}">
                <div class="additive-header">
                    <div class="additive-code-wrapper">
                        <div class="additive-icon ${additive.safetyLevel}">
                            ${safetyIcon}
                        </div>
                        <div>
                            <div class="additive-code">${additive.code}</div>
                            <div class="additive-name">${additive.name}</div>
                        </div>
                    </div>
                    <span class="additive-status status-${additive.safetyLevel}">
                        ${getSafetyLabel(additive.safetyLevel)}
                    </span>
                </div>
                
                
                <div class="additive-meta">
                    <div class="meta-item">
                        <h4>Tip</h4>
                        <p>${additive.type}</p>
                    </div>
                    
                <div class="meta-item">
                        <h4>Formula Chimică</h4>
                        <p class="formula-chimica">${additive.formula || 'N/A'}</p>
                    </div>

                    <div class="meta-item">
                        <h4>Origine</h4>
                        <p>${additive.origin}</p>
                    </div>
                    
                    <div class="meta-item">
                        <h4>Permis în UE</h4>
                        <p>${additive.permittedInEU ? '<i class="fas fa-check-circle" style="color: var(--safe-color);"></i> Da' : '<i class="fas fa-times-circle" style="color: var(--dangerous-color);"></i> Nu'}</p>
                    </div>
                </div>
                
                <div class="additive-details">
                    <div class="additive-section">
                        <h3><i class="fas fa-shopping-basket"></i> Produse în care se găsește</h3>
                        <p>${additive.products}</p>
                    </div>
                    
                    <div class="additive-section">
                        <h3><i class="fas fa-heartbeat"></i> Efecte asupra sănătății</h3>
                        <p>${additive.healthEffects}</p>
                    </div>
                </div>
                
                ${additive.funFact ? `
                <div class="fun-fact">
                    <h3><i class="fas fa-lightbulb"></i> Fun fact</h3>
                    <p>${additive.funFact}</p>
                </div>
                ` : ''}
            </div>
        `;
        
        resultContainer.innerHTML = additiveHTML;
    } else {
        // Display enhanced error message
        resultContainer.innerHTML = `
            <div class="error-message">
                <span><i class="fas fa-exclamation-circle"></i></span>
                Nu am găsit aditivul cu codul "${searchInput}". 
                <p>Verifică codul și încearcă din nou.</p>
                <p class="search-tip">Încearcă să cauți un cod E valid, cum ar fi E330, E100, etc.</p>
            </div>
        `;
    }
}

// Rest of your existing functions remain the same
function getSafetyLabel(safetyLevel) {
    switch(safetyLevel) {
        case 'safe':
            return '<i class="fas fa-shield-alt"></i> Sigur';
        case 'controversial':
            return '<i class="fas fa-exclamation-triangle"></i> Controversat';
        case 'dangerous':
            return '<i class="fas fa-radiation-alt"></i> Periculos';
        default:
            return '<i class="fas fa-question-circle"></i> Necunoscut';
    }
}

function getSafetyIcon(safetyLevel) {
    switch(safetyLevel) {
        case 'safe':
            return '<i class="fas fa-check"></i>';
        case 'controversial':
            return '<i class="fas fa-exclamation"></i>';
        case 'dangerous':
            return '<i class="fas fa-times"></i>';
        default:
            return '<i class="fas fa-question"></i>';
    }
}