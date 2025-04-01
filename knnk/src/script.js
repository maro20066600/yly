// Egyptian governorates data (participants) for each category
const participants = {
    singing: [
        "Cairo", "Alexandria", "Giza", "Luxor", "Aswan", 
        "Hurghada", "Port Said", "Damietta", "Suez", "Ismailia", 
        "Mansoura", "Tanta", "Zagazig", "Fayoum", "Beni Suef", 
        "Minya", "Asyut", "Sohag", "Qena", "Aswan"
    ],
    theater: [
        "Cairo", "Alexandria", "Giza", "Sharm El Sheikh", "Hurghada", 
        "Luxor", "Aswan", "Port Said", "Suez", "Ismailia", 
        "Mansoura", "Tanta", "Zagazig", "Fayoum", "Beni Suef", 
        "Minya", "Asyut", "Sohag", "Qena", "Damietta"
    ],
    presentation: [
        "Cairo", "Alexandria", "Giza", "Luxor", "Aswan", 
        "Mansoura", "Tanta", "Zagazig", "Port Said", "Suez", 
        "Ismailia", "Fayoum", "Beni Suef", "Minya", "Asyut", 
        "Sohag", "Qena", "Damietta", "Hurghada", "Sharm El Sheikh"
    ],
    sports: [
        "Cairo", "Alexandria", "Giza", "Port Said", "Ismailia", 
        "Mansoura", "Suez", "Tanta", "Zagazig", "Fayoum", 
        "Beni Suef", "Minya", "Asyut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Damietta", "Hurghada", "Sharm El Sheikh"
    ],
    culture: [
        "Cairo", "Alexandria", "Luxor", "Aswan", "Giza", 
        "Fayoum", "Minya", "Asyut", "Mansoura", "Tanta", 
        "Port Said", "Suez", "Ismailia", "Damietta", "Zagazig", 
        "Beni Suef", "Sohag", "Qena", "Hurghada", "Sharm El Sheikh"
    ],
    arts: [
        "Cairo", "Alexandria", "Giza", "Luxor", "Aswan", 
        "Mansoura", "Fayoum", "Minya", "Asyut", "Port Said", 
        "Damietta", "Tanta", "Zagazig", "Suez", "Ismailia", 
        "Beni Suef", "Sohag", "Qena", "Hurghada", "Sharm El Sheikh"
    ],
    creativity: [
        "Cairo", "Alexandria", "Giza", "Mansoura", "Tanta", 
        "Zagazig", "Port Said", "Suez", "Ismailia", "Fayoum", 
        "Beni Suef", "Minya", "Asyut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Damietta", "Hurghada", "Sharm El Sheikh"
    ],
    literature: [
        "Cairo", "Alexandria", "Giza", "Fayoum", "Minya", 
        "Asyut", "Luxor", "Aswan", "Mansoura", "Tanta", 
        "Zagazig", "Port Said", "Damietta", "Suez", "Ismailia", 
        "Beni Suef", "Sohag", "Qena", "Hurghada", "Sharm El Sheikh"
    ],
    innovation: [
        "Cairo", "Alexandria", "Giza", "Mansoura", "Tanta", 
        "Port Said", "Suez", "Damietta", "Zagazig", "Ismailia", 
        "Fayoum", "Beni Suef", "Minya", "Asyut", "Sohag", 
        "Qena", "Luxor", "Aswan", "Hurghada", "Sharm El Sheikh"
    ]
};

// Group colors
const groupColors = {
    singing: { primary: '#cc0000', secondary: '#ffd700' },
    theater: { primary: '#0044cc', secondary: '#c0c0c0' },
    presentation: { primary: '#006600', secondary: '#c0c0c0' },
    sports: { primary: '#ffcc00', secondary: '#000000' },
    culture: { primary: '#660066', secondary: '#ffd700' },
    arts: { primary: '#00ccff', secondary: '#c0c0c0' },
    creativity: { primary: '#004d00', secondary: '#ffd700' },
    literature: { primary: '#800000', secondary: '#c0c0c0' },
    innovation: { primary: '#000000', secondary: '#ffd700' }
};

// Sound effects
const sounds = {
    background: new Audio('https://soundbible.com/mp3/Magical_Mystical_Chime-JP_Scrip-2123872310.mp3'),
    cardFlip: new Audio('audio/spell-sound-1.mp3'),
    spellCast: new Audio('audio/spell-sound-2.mp3'),
    success: new Audio('audio/spell-sound-3.mp3')
};

// Set sound volumes
sounds.background.volume = 0.3;
sounds.background.loop = true;
sounds.cardFlip.volume = 0.6;
sounds.spellCast.volume = 0.6;
sounds.success.volume = 0.7;

// Current state
let currentGroup = null;
// Store results for each group separately
const groupResults = {
    singing: [],
    theater: [],
    presentation: [],
    sports: [],
    culture: [], 
    arts: [],
    creativity: [],
    literature: [],
    innovation: []
};
let isDrawing = false;

// DOM elements
const startButton = document.getElementById('startButton');
const drawButton = document.getElementById('drawButton');
const redrawButton = document.getElementById('redrawButton');
const printButton = document.getElementById('printButton');
const backButton = document.getElementById('backButton');
const cardsContainer = document.querySelector('.cards-container');
const resultsContent = document.getElementById('resultsContent');
const resultsScroll = document.querySelector('.results-scroll');

// Landing page transition
startButton.addEventListener('click', () => {
    sounds.background.play().catch(e => console.log('Audio autoplay was prevented'));
    document.querySelector('.landing-container').style.display = 'none';
    document.querySelector('.lottery-container').style.display = 'block';
});

// Group selection
document.querySelectorAll('.group-card').forEach(card => {
    card.addEventListener('click', () => {
        currentGroup = card.getAttribute('data-group');
        document.getElementById('currentGroup').textContent = currentGroup.charAt(0).toUpperCase() + currentGroup.slice(1);
        document.querySelector('.group-selection').style.display = 'none';
        document.querySelector('.card-draw-area').style.display = 'block';
        
        // Create cards
        createCards();
        
        // Check if this group already has results
        if (groupResults[currentGroup] && groupResults[currentGroup].length > 0) {
            // Show previous results
            displaySavedResults();
            redrawButton.style.display = 'inline-block';
            printButton.style.display = 'inline-block';
        } else {
            // Hide results
            resultsScroll.style.display = 'none';
            redrawButton.style.display = 'none';
            printButton.style.display = 'none';
        }
    });
});

// Create cards for the current group
function createCards() {
    cardsContainer.innerHTML = '';
    
    // Create 20 cards
    for (let i = 0; i < 20; i++) {
        const card = document.createElement('div');
        card.className = 'magic-card';
        card.setAttribute('data-index', i);
        
        // Card front (back of the card, facing the user initially)
        const cardFront = document.createElement('div');
        cardFront.className = 'card-face card-front';
        
        // Create card content container
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        
        // Add YLY text
        const ylyText = document.createElement('div');
        ylyText.className = 'card-title';
        ylyText.textContent = 'YLY';
        
        // Add competition text
        const competitionText = document.createElement('div');
        competitionText.className = 'card-text';
        competitionText.textContent = 'competition';
        
        // Assemble the card front
        cardContent.appendChild(ylyText);
        cardContent.appendChild(competitionText);
        cardFront.appendChild(cardContent);
        
        // Card back (will show the city name when flipped)
        const cardBack = document.createElement('div');
        cardBack.className = 'card-face card-back';
        
        // Add city name container
        const cityNameSpan = document.createElement('span');
        cityNameSpan.className = 'city-name';
        cardBack.appendChild(cityNameSpan);
        
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        cardsContainer.appendChild(card);
    }
    
    // If this group already has results, show flipped cards
    if (groupResults[currentGroup] && groupResults[currentGroup].length > 0) {
        showFlippedCards();
    }
}

// Show previously selected cards as flipped
function showFlippedCards() {
    const selectedParticipants = groupResults[currentGroup];
    if (!selectedParticipants || selectedParticipants.length === 0) return;
    
    // Select random card positions to show flipped (4 out of 20)
    const positions = Array.from({length: 20}, (_, i) => i)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
    
    const cards = document.querySelectorAll('.magic-card');
    positions.forEach((pos, index) => {
        if (index < selectedParticipants.length) {
            const card = cards[pos];
            const cityNameEl = card.querySelector('.city-name');
            if (cityNameEl) cityNameEl.textContent = selectedParticipants[index];
            card.classList.add('flipped');
        }
    });
}

// Start the magical draw
drawButton.addEventListener('click', () => {
    if (isDrawing) return;
    isDrawing = true;
    
    // Reset
    resultsScroll.style.display = 'none';
    redrawButton.style.display = 'none';
    printButton.style.display = 'none';
    
    // Play the spell casting sound
    sounds.spellCast.play();
    
    // Start the magical animation
    const cards = document.querySelectorAll('.magic-card');
    cards.forEach(card => {
        card.classList.add('rotating');
        card.classList.remove('flipped');
        const cityNameEl = card.querySelector('.city-name');
        if (cityNameEl) cityNameEl.textContent = '';
    });
    
    // Shuffle the deck
    const shuffled = [...participants[currentGroup]].sort(() => 0.5 - Math.random());
    
    // Select 4 random participants
    const selected = shuffled.slice(0, 4);
    groupResults[currentGroup] = selected; // Store results for this group
    
    // Select random card positions to flip (4 out of 20)
    const positions = Array.from({length: 20}, (_, i) => i)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
    
    // After rotation animation, flip cards one by one
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('rotating'));
        
        // Flip cards with delay
        positions.forEach((pos, index) => {
            setTimeout(() => {
                const card = cards[pos];
                const cityNameEl = card.querySelector('.city-name');
                if (cityNameEl) cityNameEl.textContent = selected[index];
                card.classList.add('flipped');
                sounds.cardFlip.cloneNode(true).play().catch(e => console.log('Audio play was prevented'));
                
                // After last card is flipped
                if (index === positions.length - 1) {
                    setTimeout(() => {
                        displayResults();
                        isDrawing = false;
                    }, 1000);
                }
            }, index * 1000);
        });
    }, 2000);
});

// Display saved results
function displaySavedResults() {
    const selectedParticipants = groupResults[currentGroup];
    if (!selectedParticipants || selectedParticipants.length === 0) return;
    
    resultsContent.innerHTML = '';
    
    const groupTitle = document.createElement('h4');
    groupTitle.textContent = `${currentGroup.charAt(0).toUpperCase() + currentGroup.slice(1)} House Selected`;
    resultsContent.appendChild(groupTitle);
    
    const list = document.createElement('ul');
    selectedParticipants.forEach(participant => {
        const item = document.createElement('li');
        item.textContent = participant;
        list.appendChild(item);
    });
    
    resultsContent.appendChild(list);
    resultsScroll.style.display = 'block';
}

// Display results on the scroll
function displayResults() {
    const selectedParticipants = groupResults[currentGroup];
    resultsContent.innerHTML = '';
    
    const groupTitle = document.createElement('h4');
    groupTitle.textContent = `${currentGroup.charAt(0).toUpperCase() + currentGroup.slice(1)} House Selected`;
    resultsContent.appendChild(groupTitle);
    
    const list = document.createElement('ul');
    selectedParticipants.forEach(participant => {
        const item = document.createElement('li');
        item.textContent = participant;
        list.appendChild(item);
    });
    
    resultsContent.appendChild(list);
    resultsScroll.style.display = 'block';
    redrawButton.style.display = 'inline-block';
    printButton.style.display = 'inline-block';
    
    sounds.success.play().catch(e => console.log('Audio play was prevented'));
}

// Redraw button
redrawButton.addEventListener('click', () => {
    drawButton.click();
});

// Back button
backButton.addEventListener('click', () => {
    document.querySelector('.card-draw-area').style.display = 'none';
    document.querySelector('.group-selection').style.display = 'block';
});

// Print results
printButton.addEventListener('click', () => {
    const printWindow = window.open('', '_blank');
    const colors = groupColors[currentGroup];
    const selectedParticipants = groupResults[currentGroup];
    
    printWindow.document.write(`
        <html>
        <head>
            <title>Magical Lottery Results</title>
            <style>
                body {
                    font-family: 'Times New Roman', serif;
                    background-color: #f9f3e0;
                    color: #4a2511;
                    padding: 40px;
                    background-image: url('https://www.transparenttextures.com/patterns/parchment.png');
                }
                .scroll {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px;
                    border: 2px solid #8b4513;
                    border-radius: 10px;
                    box-shadow: 0 0 15px rgba(139, 69, 19, 0.3);
                }
                h1 {
                    text-align: center;
                    color: #5c3317;
                    font-size: 28px;
                    margin-bottom: 30px;
                }
                h2 {
                    color: ${colors.primary};
                    text-align: center;
                    margin-bottom: 20px;
                    font-size: 24px;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    padding: 10px 20px;
                    margin-bottom: 10px;
                    background-color: rgba(255, 255, 255, 0.5);
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    font-size: 18px;
                }
                .footer {
                    text-align: center;
                    margin-top: 40px;
                    font-style: italic;
                    font-size: 16px;
                    color: #8b4513;
                }
                .seal {
                    text-align: center;
                    margin-top: 30px;
                }
                .seal img {
                    width: 100px;
                    height: 100px;
                }
            </style>
        </head>
        <body>
            <div class="scroll">
                <h1>The Magical YLY Lottery</h1>
                <h2>${currentGroup.charAt(0).toUpperCase() + currentGroup.slice(1)} Group Selected Participants</h2>
                <ul>
                    ${selectedParticipants.map(p => `<li>${p}</li>`).join('')}
                </ul>
                <div class="footer">
                    Selected through the ancient magical lottery on ${new Date().toLocaleDateString()}.
                </div>
                <div class="seal">
                    <img src="https://i.imgur.com/JIsbJq1.png" alt="Magical Seal">
                </div>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
        printWindow.print();
    }, 500);
});

// Helper function to adjust color brightness
function adjustColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const r = (num >> 16) + percent;
    const g = ((num >> 8) & 0x00FF) + percent;
    const b = (num & 0x0000FF) + percent;
    
    const newR = r < 0 ? 0 : r > 255 ? 255 : r;
    const newG = g < 0 ? 0 : g > 255 ? 255 : g;
    const newB = b < 0 ? 0 : b > 255 ? 255 : b;
    
    return "#" + (newB | (newG << 8) | (newR << 16)).toString(16).padStart(6, '0');
} 