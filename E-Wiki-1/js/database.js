// Acest fișier servește ca backup în caz că încărcarea JSON eșuează

// Declară variabila additives în scop global
let additives = [];

if (typeof additives === 'undefined' || additives.length === 0) {
    console.log('Se folosesc datele din database.js ca backup');
    // Populează array-ul existent în loc să creezi unul nou cu const
    additives = [
        {
            code: "E100",
            name: "Curcumină",
            type: "colorant",
            origin: "natural",
            permittedInEU: true,
            products: "Brânzeturi, produse de patiserie, muștar, curry",
            healthEffects: "Considerat sigur, poate avea proprietăți antiinflamatorii și antioxidante.",
            safetyLevel: "safe",
            funFact: "Curcumina este extrasă din turmeric, un condiment popular în bucătăria asiatică și este studiat pentru potențialele sale beneficii împotriva bolilor neurodegenerative."
          },
          {
            code: "E101",
            name: "Riboflavină (Vitamina B2)",
            type: "colorant",
            origin: "natural/sintetic",
            permittedInEU: true,
            products: "Cereale pentru micul dejun, produse lactate, suplimente alimentare",
            healthEffects: "Sigur. Este o vitamină esențială pentru organism.",
            safetyLevel: "safe",
            funFact: "Riboflavina este responsabilă pentru culoarea galbenă intensă a urinei după consumul de vitamine din complexul B."
          },
          {
            code: "E104",
            name: "Galben de chinolină",
            type: "colorant",
            origin: "sintetic",
            permittedInEU: true,
            products: "Băuturi răcoritoare, produse de patiserie, dulciuri",
            healthEffects: "Poate provoca reacții alergice și hiperactivitate la copii. Controversat.",
            safetyLevel: "controversial",
            funFact: "A fost interzis în SUA, Australia și Norvegia dar este permis în UE cu limitări stricte."
          },
          {
            code: "E124",
            name: "Ponceau 4R",
            type: "colorant",
            origin: "sintetic",
            permittedInEU: true,
            products: "Jeleuri, băuturi, produse de patiserie",
            healthEffects: "Poate provoca alergii, astm și hiperactivitate. Nu este recomandat copiilor.",
            safetyLevel: "controversial",
            funFact: "Acest colorant este adesea folosit în producția de dulciuri roșii și în simularea culorii fructelor în deserturi."
          },
          {
            code: "E129",
            name: "Roșu Allura AC",
            type: "colorant",
            origin: "sintetic",
            permittedInEU: true,
            products: "Băuturi carbogazoase, deserturi, dulciuri",
            healthEffects: "Poate provoca reacții alergice, hiperactivitate la copii și suspiciuni de carcinogenitate.",
            safetyLevel: "controversial",
            funFact: "Este unul dintre coloranții sintetici cei mai utilizați în industria alimentară americană, fiind prezent în multe băuturi populare."
          },
          {
            code: "E131",
            name: "Albastru Patent V",
            type: "colorant",
            origin: "sintetic",
            permittedInEU: true,
            products: "Dulciuri, deserturi, băuturi",
            healthEffects: "Poate provoca reacții alergice și a fost asociat cu risc crescut de cancer în studii pe animale.",
            safetyLevel: "dangerous",
            funFact: "În ciuda controverselor, este încă folosit pentru a crea culoarea albastră în multe bomboane și prăjituri."
          },
          {
            code: "E150",
            name: "Caramel",
            type: "colorant",
            origin: "natural",
            permittedInEU: true,
            products: "Băuturi cola, bere, sosuri, deserturi",
            healthEffects: "Considerat în general sigur, deși unele variante pot conține compuși controversați.",
            safetyLevel: "safe",
            funFact: "Este unul dintre cei mai vechi și mai utilizați coloranți alimentari din lume."
          },
          {
            code: "E171",
            name: "Dioxid de titan",
            type: "colorant",
            origin: "mineral",
            permittedInEU: false,
            products: "Produse de cofetărie, gumă de mestecat, suplimente alimentare",
            healthEffects: "Recent interzis în UE datorită potențialului genotoxic. Particulele nano pot traversa bariera intestinală.",
            safetyLevel: "dangerous",
            funFact: "Este același compus folosit în cremele cu protecție solară și în multe vopsele albe."
          },
          {
            code: "E250",
            name: "Nitrit de sodiu",
            type: "conservant",
            origin: "sintetic",
            permittedInEU: true,
            products: "Carne procesată, cârnați, șuncă, salam",
            healthEffects: "În cantități mari poate fi toxic. Poate forma nitrozamine cancerigene în organism.",
            safetyLevel: "controversial",
            funFact: "Rolul său principal este prevenirea dezvoltării bacteriei Clostridium botulinum, dar contribuie și la culoarea roz a cărnurilor procesate."
          },
          {
            code: "E300",
            name: "Acid ascorbic (Vitamina C)",
            type: "antioxidant",
            origin: "natural/sintetic",
            permittedInEU: true,
            products: "Sucuri, conserve, mezeluri, fructe",
            healthEffects: "Benefic pentru sănătate. Este o vitamină esențială.",
            safetyLevel: "safe",
            funFact: "Pe lângă rolul său nutritiv, vitamina C este folosită în industria alimentară pentru a preveni oxidarea și înnegrirea fructelor tăiate."
          },
          {
            code: "E330",
            name: "Acid citric",
            type: "antioxidant, regulator de aciditate",
            origin: "natural",
            permittedInEU: true,
            products: "Băuturi răcoritoare, gemuri, dulciuri, conserve",
            healthEffects: "Sigur în cantitățile utilizate în alimente. Prezent natural în citrice.",
            safetyLevel: "safe",
            funFact: "Acidul citric este unul dintre cei mai utilizați aditivi alimentari, fiind prezent în peste 70% din alimentele procesate."
          },
          {
            code: "E407",
            name: "Caragenan",
            type: "stabilizator, agent de îngroșare",
            origin: "natural",
            permittedInEU: true,
            products: "Produse lactate, înghețată, lapte vegetal",
            healthEffects: "Controversat, asociat cu probleme digestive și inflamații intestinale în unele studii.",
            safetyLevel: "controversial",
            funFact: "Este extras din alge roșii și este folosit în bucătăria tradițională irlandeză de sute de ani."
          },
          {
            code: "E621",
            name: "Glutamat monosodic",
            type: "potențiator de gust",
            origin: "sintetic",
            permittedInEU: true,
            products: "Supe instant, snacksuri, mâncăruri preparate, condimente",
            healthEffects: "Poate provoca reacții adverse la persoanele sensibile (sindromul restaurantului chinezesc).",
            safetyLevel: "controversial",
            funFact: "Gustul distinct al glutamatului monosodic se numește 'umami' și este considerat al cincilea gust de bază, alături de dulce, sărat, acru și amar."
          },
          {
            code: "E950",
            name: "Acesulfam K",
            type: "îndulcitor",
            origin: "sintetic",
            permittedInEU: true,
            products: "Băuturi dietetice, produse fără zahăr, gumă de mestecat",
            healthEffects: "Controversat, unele studii sugerează posibile efecte adverse asupra metabolismului.",
            safetyLevel: "controversial",
            funFact: "Este de aproximativ 200 de ori mai dulce decât zahărul și nu are calorii."
          },
          {
            code: "E951",
            name: "Aspartam",
            type: "îndulcitor",
            origin: "sintetic",
            permittedInEU: true,
            products: "Băuturi dietetice, gumă de mestecat, deserturi fără zahăr",
            healthEffects: "Controversat, asociat cu dureri de cap, amețeli și alte simptome la persoanele sensibile.",
            safetyLevel: "controversial",
            funFact: "Persoanele cu fenilcetonurie nu pot metaboliza aspartamul, motiv pentru care produsele care îl conțin trebuie să afișeze un avertisment special."
          }
    ];
} else {
    console.log('Datele au fost deja încărcate din JSON');
}
