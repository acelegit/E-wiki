// Script pentru încărcarea datelor din JSON

let additives = []; // Variabilă globală pentru a stoca aditivii

// Funcție pentru încărcarea datelor din JSON
async function loadAdditives() {
    try {
        const response = await fetch('data/additives.json');
        if (!response.ok) {
            throw new Error('Nu s-a putut încărca fișierul JSON');
        }
        
        // Parsează datele și adaptează-le la formatul așteptat de aplicație
        const jsonData = await response.json();
        
        additives = jsonData.map(item => ({
            code: item.code,
            name: item.full_name,
            formula: item.formula_chimica,
            type: item.type,
            origin: item.origin,
            permittedInEU: item.EU_approval === "Approved",
            products: Array.isArray(item.examples) ? item.examples.join(", ") : item.examples,
            healthEffects: item.health_effects,
            safetyLevel: item.safety_level || "unknown",
            funFact: item.fun_fact
        }));
        
        console.log('Datele au fost încărcate cu succes:', additives.length, 'aditivi');
        
        // Declanșează un eveniment pentru a anunța că datele sunt gata
        document.dispatchEvent(new Event('dataLoaded'));
        
    } catch (error) {
        console.error('Eroare la încărcarea datelor:', error);
        // Folosește datele din database.js ca backup
        document.dispatchEvent(new Event('dataLoadError'));
    }
}

// Încarcă datele când pagina se încarcă
document.addEventListener('DOMContentLoaded', loadAdditives);
