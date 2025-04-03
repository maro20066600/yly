// Egyptian governorates data (participants) for each category
const participants = {
    tiktok: [
        "Cairo", "Giza", "Alexandria", "Qalyubia", "Beheira", 
        "Kafr El-Sheikh", "Gharbia", "Monufia", "Dakahlia", "Sharqia", 
        "Damietta", "Port Said", "Ismailia", "Suez", "Fayoum", 
        "Beni Suef", "Minya", "Assiut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh",
        "North Sinai", "South Sinai", "ministry", "5g", "capital"
    ],
    topchef: [
        "Cairo", "Giza", "Alexandria", "Qalyubia", "Beheira", 
        "Kafr El-Sheikh", "Gharbia", "Monufia", "Dakahlia", "Sharqia", 
        "Damietta", "Port Said", "Ismailia", "Suez", "Fayoum", 
        "Beni Suef", "Minya", "Assiut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh",
        "North Sinai", "South Sinai", "ministry", "5g", "capital"
    ],
    advertisements: [
        "Cairo", "Giza", "Alexandria", "Qalyubia", "Beheira", 
        "Kafr El-Sheikh", "Gharbia", "Monufia", "Dakahlia", "Sharqia", 
        "Damietta", "Port Said", "Ismailia", "Suez", "Fayoum", 
        "Beni Suef", "Minya", "Assiut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh",
        "North Sinai", "South Sinai", "ministry", "5g", "capital"
    ],
    contentcreator: [
        "Cairo", "Giza", "Alexandria", "Qalyubia", "Beheira", 
        "Kafr El-Sheikh", "Gharbia", "Monufia", "Dakahlia", "Sharqia", 
        "Damietta", "Port Said", "Ismailia", "Suez", "Fayoum", 
        "Beni Suef", "Minya", "Assiut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh",
        "North Sinai", "South Sinai", "ministry", "5g", "capital"
    ],
    minipodcast: [
        "Cairo", "Giza", "Alexandria", "Qalyubia", "Beheira", 
        "Kafr El-Sheikh", "Gharbia", "Monufia", "Dakahlia", "Sharqia", 
        "Damietta", "Port Said", "Ismailia", "Suez", "Fayoum", 
        "Beni Suef", "Minya", "Assiut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh",
        "North Sinai", "South Sinai", "ministry", "5g", "capital"
    ],
    vlog: [
        "Cairo", "Giza", "Alexandria", "Qalyubia", "Beheira", 
        "Kafr El-Sheikh", "Gharbia", "Monufia", "Dakahlia", "Sharqia", 
        "Damietta", "Port Said", "Ismailia", "Suez", "Fayoum", 
        "Beni Suef", "Minya", "Assiut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh",
        "North Sinai", "South Sinai", "ministry", "5g", "capital"
    ],
    design: [
        "Cairo", "Giza", "Alexandria", "Qalyubia", "Beheira", 
        "Kafr El-Sheikh", "Gharbia", "Monufia", "Dakahlia", "Sharqia", 
        "Damietta", "Port Said", "Ismailia", "Suez", "Fayoum", 
        "Beni Suef", "Minya", "Assiut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh",
        "North Sinai", "South Sinai", "ministry", "5g", "capital"
    ],
    minimovie: [
        "Cairo", "Giza", "Alexandria", "Qalyubia", "Beheira", 
        "Kafr El-Sheikh", "Gharbia", "Monufia", "Dakahlia", "Sharqia", 
        "Damietta", "Port Said", "Ismailia", "Suez", "Fayoum", 
        "Beni Suef", "Minya", "Assiut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh",
        "North Sinai", "South Sinai", "ministry", "5g", "capital"
    ],
    karaoke: [
        "Cairo", "Giza", "Alexandria", "Qalyubia", "Beheira", 
        "Kafr El-Sheikh", "Gharbia", "Monufia", "Dakahlia", "Sharqia", 
        "Damietta", "Port Said", "Ismailia", "Suez", "Fayoum", 
        "Beni Suef", "Minya", "Assiut", "Sohag", "Qena", 
        "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh",
        "North Sinai", "South Sinai", "ministry", "5g", "capital"
    ]
};

// Group colors
const groupColors = {
    tiktok: { primary: '#000000', secondary: '#00f2ea' },
    topchef: { primary: '#cc0000', secondary: '#ffffff' },
    advertisements: { primary: '#4a90e2', secondary: '#ffffff' },
    contentcreator: { primary: '#ff6b6b', secondary: '#ffffff' },
    minipodcast: { primary: '#8e44ad', secondary: '#ffffff' },
    vlog: { primary: '#2ecc71', secondary: '#ffffff' },
    design: { primary: '#e67e22', secondary: '#ffffff' },
    minimovie: { primary: '#34495e', secondary: '#ffffff' },
    karaoke: { primary: '#e91e63', secondary: '#ffffff' }
};

// Sound effects
const sounds = {
    background: new Audio('https://soundbible.com/mp3/Magical_Mystical_Chime-JP_Scrip-2123872310.mp3'),
    cardFlip: new Audio('audio/spell-sound-1.mp3'),
    spellCast: new Audio('audio/spell-sound-2.mp3'),
    success: new Audio('audio/spell-sound-3.mp3'),
    buttonClick: new Audio('audio/⚡10 Harry Potter Spells (Sound Effects) (mp3cut.net) (2).mp3')
};

// Set sound volumes
sounds.background.volume = 0.3;
sounds.background.loop = true;
sounds.cardFlip.volume = 0.6;
sounds.spellCast.volume = 0.6;
sounds.success.volume = 0.7;
sounds.buttonClick.volume = 0.5;

// Current state
let currentGroup = null;
// Store results for each group separately
const groupResults = {
    tiktok: [],
    topchef: [],
    advertisements: [],
    contentcreator: [],
    minipodcast: [],
    vlog: [],
    design: [],
    minimovie: [],
    karaoke: []
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
            
            // Hide YLY text on the front
            const cardFront = card.querySelector('.card-front');
            const cardContent = cardFront.querySelector('.card-content');
            
            if (cardContent) {
                const ylyText = cardContent.querySelector('.card-title');
                const competitionText = cardContent.querySelector('.card-text');
                
                if (ylyText) ylyText.style.opacity = '0';
                if (competitionText) competitionText.style.opacity = '0';
            }
            
            // Add the flipped class
            card.classList.add('flipped');
            
            // Create fancy display for city name with spans for each character
            if (cityNameEl) {
                const cityName = selectedParticipants[index];
                cityNameEl.innerHTML = '';
                
                // Create a character by character display
                [...cityName].forEach((char, i) => {
                    const charSpan = document.createElement('span');
                    charSpan.className = 'magic-char';
                    charSpan.style.animation = 'none'; // No animation for pre-loaded cards
                    charSpan.style.opacity = '1';
                    charSpan.style.transform = 'translateY(0) scale(1)';
                    charSpan.textContent = char;
                    cityNameEl.appendChild(charSpan);
                });
                
                // Add the complete class for the underline effect
                cityNameEl.classList.add('name-complete');
            }
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
    
    // جمع كل المحافظات المختارة مسبقًا من جميع الفئات الأخرى
    const allSelectedGovernorates = [];
    for (const group in groupResults) {
        if (group !== currentGroup && groupResults[group].length > 0) {
            allSelectedGovernorates.push(...groupResults[group]);
        }
    }
    
    // Create and animate the magic wand for lottery selection
    const magicWand = document.createElement('div');
    magicWand.className = 'lottery-wand';
    document.body.appendChild(magicWand);
    
    // Create element for yellow magic effect
    const yellowMagic = document.createElement('div');
    yellowMagic.className = 'yellow-magic-effect';
    document.body.appendChild(yellowMagic);
    
    // Position the wand initially at the button
    const buttonRect = drawButton.getBoundingClientRect();
    magicWand.style.left = `${buttonRect.left + buttonRect.width/2}px`;
    magicWand.style.top = `${buttonRect.top + buttonRect.height/2}px`;
    
    // Make the wand visible with animation
    setTimeout(() => {
        magicWand.classList.add('active');
        
        // Define card positions
        const cards = document.querySelectorAll('.magic-card');
        const cardPositions = [];
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            cardPositions.push({
                element: card,
                x: rect.left + rect.width/2,
                y: rect.top + rect.height/2
            });
            
            // Start all cards rotating
            card.classList.add('rotating');
            card.classList.remove('flipped');
            const cityNameEl = card.querySelector('.city-name');
            if (cityNameEl) cityNameEl.textContent = '';
        });
        
        // استبعاد المحافظات المختارة مسبقًا
        const availableParticipants = participants[currentGroup].filter(
            governorate => !allSelectedGovernorates.includes(governorate)
        );
        
        // استخدم المحافظات المتاحة دائمًا حتى لو كان عددها أقل من 4
        const participantsToUse = availableParticipants.length > 0 ? 
            availableParticipants : [...participants[currentGroup]];
        
        // Shuffle the deck
        const shuffled = [...participantsToUse].sort(() => 0.5 - Math.random());
        
        // Select available participants (up to 4)
        const maxToSelect = Math.min(4, shuffled.length);
        const selected = shuffled.slice(0, maxToSelect);
        groupResults[currentGroup] = selected; // Store results for this group
        
        // Select random card positions to flip (based on number of selected)
        const positions = Array.from({length: 20}, (_, i) => i)
            .sort(() => 0.5 - Math.random())
            .slice(0, maxToSelect);
        
        // Animate wand flying around cards
        let currentCardIndex = 0;
        const totalCircles = 2; // Number of circles around all cards
        const totalCardCount = cardPositions.length;
        const cardsPerCircle = Math.ceil(totalCardCount / totalCircles);
        
        // Create sparkle container for wand trail
        const wandSparkles = document.createElement('div');
        wandSparkles.className = 'wand-sparkles';
        document.body.appendChild(wandSparkles);
        
        function animateWandToNextCard() {
            if (currentCardIndex >= totalCardCount * totalCircles) {
                // Wand finished circling, now animate to final positions
                animateToSelectedCards();
                return;
            }
            
            // Calculate which card to move to next
            const cardIndex = currentCardIndex % totalCardCount;
            const card = cardPositions[cardIndex];
            
            // Update wand position with animation
            magicWand.style.transition = 'transform 0.3s ease-out, left 0.3s ease-out, top 0.3s ease-out';
            magicWand.style.left = `${card.x}px`;
            magicWand.style.top = `${card.y}px`;
            
            // Add angle based on movement direction
            const nextCardIndex = (currentCardIndex + 1) % totalCardCount;
            const nextCard = cardPositions[nextCardIndex];
            const dx = nextCard.x - card.x;
            const dy = nextCard.y - card.y;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            magicWand.style.transform = `translate(-50%, -50%) rotate(${angle + 30}deg)`;
            
            // Move yellow magic effect to wand tip (adjusted for new wand position)
            yellowMagic.style.left = `${card.x}px`;
            yellowMagic.style.top = `${card.y}px`;
            
            currentCardIndex++;
            setTimeout(animateWandToNextCard, 150);
        }
        
        function animateToSelectedCards() {
            // Stop the rotation for non-selected cards
            cards.forEach(card => card.classList.remove('rotating'));
            
            // Animate wand to each selected card and perform "magic"
            let selectedIndex = 0;
            
            function selectNextCard() {
                if (selectedIndex >= positions.length) {
                    // Remove wand when done
                    magicWand.style.opacity = '0';
                    yellowMagic.style.opacity = '0';
                    setTimeout(() => {
                        magicWand.remove();
                        yellowMagic.remove();
                        wandSparkles.remove();
                    }, 1000);
                    
                    // Continue with the normal card flipping logic
                    setTimeout(() => {
                        flipSelectedCards();
                    }, 500);
                    
                    return;
                }
                
                const cardIndex = positions[selectedIndex];
                const card = cards[cardIndex];
                const rect = card.getBoundingClientRect();
                
                // Move wand to selected card with faster animation
                magicWand.style.transition = 'transform 0.6s ease-out, left 0.6s ease-out, top 0.6s ease-out';
                magicWand.style.left = `${rect.left + rect.width/2}px`;
                magicWand.style.top = `${rect.top + rect.height/2}px`;
                
                // Position yellow magic effect at the wand tip (adjusted for new wand image)
                yellowMagic.style.left = `${rect.left + rect.width/2}px`;
                yellowMagic.style.top = `${rect.top + rect.height/2}px`;
                
                // Increase the size of the yellow magic effect 
                yellowMagic.style.transform = 'scale(1.5)';
                yellowMagic.style.opacity = '1';
                
                // Add "charging" effect
                card.classList.add('anticipation');
                
                // Add magic blast effect
                const magicBlast = document.createElement('div');
                magicBlast.className = 'magic-blast';
                card.appendChild(magicBlast);
                
                // Create a container for the inner sparkles
                const innerSparkles = document.createElement('div');
                innerSparkles.className = 'card-inner-sparkles';
                card.appendChild(innerSparkles);
                
                // Add inner sparkles effect (continuous falling sparkles)
                function createInnerSparkles() {
                    // Create 30 sparkles inside the card
                    for (let i = 0; i < 30; i++) {
                        setTimeout(() => {
                            if (!innerSparkles.isConnected) return;
                            
                            const sparkle = document.createElement('div');
                            sparkle.className = 'inner-sparkle';
                            
                            // Random position within the card
                            const randomX = Math.random() * 100;
                            sparkle.style.left = `${randomX}%`;
                            
                            // Random size
                            const size = Math.random() * 6 + 2;
                            sparkle.style.width = `${size}px`;
                            sparkle.style.height = `${size}px`;
                            
                            // Random animation delay
                            sparkle.style.animationDelay = `${Math.random() * 0.5}s`;
                            
                            innerSparkles.appendChild(sparkle);
                            
                            // Remove sparkle after animation completes
                            setTimeout(() => {
                                if (sparkle.isConnected) {
                                    sparkle.remove();
                                }
                            }, 2000);
                        }, i * 60); // Stagger the creation of sparkles
                    }
                }
                
                // Start creating inner sparkles and continue for a while
                createInnerSparkles();
                const sparkleInterval = setInterval(createInnerSparkles, 1500);
                
                // Stop creating new sparkles after a few seconds
                setTimeout(() => {
                    clearInterval(sparkleInterval);
                }, 6000);
                
                // Add special yellow sparkle effect around the card
                for (let i = 0; i < 12; i++) {
                    const angle = (i / 12) * 360;
                    const sparkle = document.createElement('div');
                    sparkle.className = 'wand-sparkle card-select-sparkle';
                    
                    // Position sparkle in a circle around the card
                    const radius = Math.max(rect.width, rect.height) * 0.7;
                    const sparkleX = rect.left + rect.width/2 + radius * Math.cos(angle * Math.PI / 180);
                    const sparkleY = rect.top + rect.height/2 + radius * Math.sin(angle * Math.PI / 180);
                    
                    sparkle.style.left = `${sparkleX}px`;
                    sparkle.style.top = `${sparkleY}px`;
                    
                    // Random delay for sparkle appearance
                    sparkle.style.animationDelay = `${Math.random() * 0.5}s`;
                    
                    wandSparkles.appendChild(sparkle);
                    
                    // Remove sparkle after animation
                    setTimeout(() => {
                        sparkle.remove();
                    }, 2000);
                }
                
                // Play a magical sound
                const wandSound = sounds.cardFlip.cloneNode(true);
                wandSound.volume = 0.5;
                wandSound.play().catch(e => console.log('Audio play was prevented'));
                
                selectedIndex++;
                
                // Reset yellow magic effect size after delay
                setTimeout(() => {
                    yellowMagic.style.transform = 'scale(1)';
                }, 800);
                
                // Move to next card after delay
                setTimeout(selectNextCard, 1000);
            }
            
            // Start selecting cards
            selectNextCard();
        }
        
        function flipSelectedCards() {
            // Proceed with the regular card flipping animation
            positions.forEach((pos, index) => {
                setTimeout(() => {
                    const card = cards[pos];
                    card.classList.remove('anticipation');
                    const cityNameEl = card.querySelector('.city-name');
                    
                    // Clear any text
                    if (cityNameEl) cityNameEl.textContent = '';
                    
                    // Find and hide YLY text from card front
                    const cardFront = card.querySelector('.card-front');
                    const cardContent = cardFront.querySelector('.card-content');
                    
                    if (cardContent) {
                        const ylyText = cardContent.querySelector('.card-title');
                        const competitionText = cardContent.querySelector('.card-text');
                        
                        if (ylyText) {
                            ylyText.style.transition = 'opacity 0.5s ease-out';
                            ylyText.style.opacity = '0';
                        }
                        
                        if (competitionText) {
                            competitionText.style.transition = 'opacity 0.5s ease-out';
                            competitionText.style.opacity = '0';
                        }
                    }
                    
                    // Add a yellow magic glow effect before flipping
                    const yellowGlow = document.createElement('div');
                    yellowGlow.className = 'yellow-magic-effect';
                    yellowGlow.style.position = 'absolute';
                    yellowGlow.style.left = '50%';
                    yellowGlow.style.top = '50%';
                    yellowGlow.style.transform = 'translate(-50%, -50%)';
                    yellowGlow.style.width = '100%';
                    yellowGlow.style.height = '100%';
                    yellowGlow.style.opacity = '0.9';
                    card.appendChild(yellowGlow);
                    
                    // Create another burst of inner sparkles
                    const finalSparkles = document.createElement('div');
                    finalSparkles.className = 'card-inner-sparkles';
                    card.appendChild(finalSparkles);
                    
                    // Create a burst of sparkles right before flipping
                    for (let i = 0; i < 15; i++) {
                        const sparkle = document.createElement('div');
                        sparkle.className = 'inner-sparkle';
                        
                        // Random position within the card
                        const randomX = Math.random() * 100;
                        const randomY = Math.random() * 100;
                        sparkle.style.left = `${randomX}%`;
                        sparkle.style.top = `${randomY}%`;
                        
                        // Random size
                        const size = Math.random() * 6 + 2;
                        sparkle.style.width = `${size}px`;
                        sparkle.style.height = `${size}px`;
                        
                        // Random animation delay
                        sparkle.style.animationDelay = `${Math.random() * 0.3}s`;
                        
                        finalSparkles.appendChild(sparkle);
                    }
                    
                    // Flip the card
                    setTimeout(() => {
                        // Fade out the yellow glow
                        yellowGlow.style.transition = 'opacity 0.5s ease-out';
                        yellowGlow.style.opacity = '0';
                        
                        card.classList.add('flipped');
                        
                        // Play full volume flip sound
                        const flipSound = sounds.cardFlip.cloneNode(true);
                        flipSound.volume = 0.6;
                        flipSound.play().catch(e => console.log('Audio play was prevented'));
                        
                        // Remove the glow effect after transition
                        setTimeout(() => {
                            yellowGlow.remove();
                        }, 500);
                        
                        // Remove final sparkles after some time
                        setTimeout(() => {
                            finalSparkles.remove();
                        }, 2000);
                        
                        // Show city name with delay
                        setTimeout(() => {
                            if (cityNameEl) {
                                const cityName = selected[index];
                                let charIndex = 0;
                                
                                cityNameEl.innerHTML = '';
                                
                                // Add a magical sparkling effect before typing
                                const sparkleEffect = document.createElement('div');
                                sparkleEffect.className = 'name-sparkle-effect';
                                cityNameEl.appendChild(sparkleEffect);
                                
                                // Start typing after a short delay
                                setTimeout(() => {
                                    const typeInterval = setInterval(() => {
                                        if (charIndex < cityName.length) {
                                            // Create a span for each character to animate it individually
                                            const charSpan = document.createElement('span');
                                            charSpan.className = 'magic-char';
                                            charSpan.textContent = cityName[charIndex];
                                            charSpan.style.animationDelay = `${charIndex * 0.1}s`;
                                            cityNameEl.appendChild(charSpan);
                                            charIndex++;
                                        } else {
                                            clearInterval(typeInterval);
                                            // Add a magical class to the entire name after typing is complete
                                            cityNameEl.classList.add('name-complete');
                                            
                                            // Add final sparkles around the text
                                            const nameSparkles = document.createElement('div');
                                            nameSparkles.className = 'card-inner-sparkles';
                                            nameSparkles.style.zIndex = '6';
                                            cityNameEl.appendChild(nameSparkles);
                                            
                                            for (let i = 0; i < 10; i++) {
                                                const sparkle = document.createElement('div');
                                                sparkle.className = 'inner-sparkle';
                                                sparkle.style.animation = 'none';
                                                sparkle.style.opacity = '1';
                                                
                                                // Random position around the text
                                                const randomX = Math.random() * 100;
                                                const randomY = Math.random() * 100;
                                                sparkle.style.left = `${randomX}%`;
                                                sparkle.style.top = `${randomY}%`;
                                                
                                                // Random size
                                                const size = Math.random() * 4 + 1;
                                                sparkle.style.width = `${size}px`;
                                                sparkle.style.height = `${size}px`;
                                                
                                                nameSparkles.appendChild(sparkle);
                                                
                                                // Make the sparkles twinkle
                                                setInterval(() => {
                                                    sparkle.style.opacity = (Math.random() * 0.5 + 0.5).toString();
                                                }, 500 + Math.random() * 300);
                                            }
                                        }
                                    }, 100); // Type a character every 100ms
                                }, 400); // Start typing after 400ms
                            }
                        }, 1000);
                        
                        // After last card is flipped
                        if (index === positions.length - 1) {
                            setTimeout(() => {
                                displayResults();
                                isDrawing = false;
                            }, 3000);
                        }
                    }, 500);
                }, index * 2000); // 2 second delay between cards
            });
        }
        
        // Start the wand animation
        setTimeout(animateWandToNextCard, 500);
        
    }, 500);
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
    
    // Save results to localStorage
    saveResultsToLocalStorage();
    
    sounds.success.play().catch(e => console.log('Audio play was prevented'));
}

// Save all results to localStorage
function saveResultsToLocalStorage() {
    localStorage.setItem('ylySavedResults', JSON.stringify(groupResults));
}

// Redraw button
redrawButton.addEventListener('click', () => {
    drawButton.click();
});

// Print button
printButton.addEventListener('click', () => {
    printResults();
});

// Print results function
function printResults() {
    const selectedParticipants = groupResults[currentGroup];
    if (!selectedParticipants || selectedParticipants.length === 0) return;
    
    // Create a printable version
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>YLY Competition - ${currentGroup.charAt(0).toUpperCase() + currentGroup.slice(1)} Results</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f5f5f5;
                }
                .print-container {
                    max-width: 800px;
                    margin: 0 auto;
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                h1 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 20px;
                }
                h2 {
                    color: #555;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 10px;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    padding: 10px 15px;
                    margin-bottom: 10px;
                    background-color: #f9f9f9;
                    border-radius: 5px;
                    border-left: 4px solid #555;
                }
                .print-footer {
                    text-align: center;
                    margin-top: 30px;
                    font-size: 12px;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="print-container">
                <h1>YLY Competition Results</h1>
                <h2>${currentGroup.charAt(0).toUpperCase() + currentGroup.slice(1)} Category Results</h2>
                <ul>
                    ${selectedParticipants.map(participant => `<li>${participant}</li>`).join('')}
                </ul>
                <div class="print-footer">
                    <p>Printed on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
                </div>
            </div>
            <script>
                window.onload = function() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// Back button
backButton.addEventListener('click', () => {
    document.querySelector('.card-draw-area').style.display = 'none';
    document.querySelector('.group-selection').style.display = 'block';
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

// Magic Wand Cursor Effect
function createMagicWand() {
    const cursorContainer = document.createElement('div');
    cursorContainer.className = 'magic-wand-container';
    document.body.appendChild(cursorContainer);
    
    // Create wand element
    const wand = document.createElement('div');
    wand.className = 'magic-wand';
    cursorContainer.appendChild(wand);
    
    // Create sparkles container
    const sparklesContainer = document.createElement('div');
    sparklesContainer.className = 'sparkles-container';
    cursorContainer.appendChild(sparklesContainer);
    
    // Create initial sparkles
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'magic-sparkle';
        sparkle.style.width = `${Math.random() * 8 + 3}px`;
        sparkle.style.height = sparkle.style.width;
        sparklesContainer.appendChild(sparkle);
    }
    
    const sparkles = document.querySelectorAll('.magic-sparkle');
    let mouseX = 0, mouseY = 0;
    let prevMouseX = 0, prevMouseY = 0;
    let cursorVisible = false;
    
    // Track mouse position
    document.addEventListener('mousemove', e => {
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update wand position and rotation
        const dx = mouseX - prevMouseX;
        const dy = mouseY - prevMouseY;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        wand.style.left = `${mouseX}px`;
        wand.style.top = `${mouseY}px`;
        wand.style.transform = `translate(-80%, -20%) rotate(${angle}deg)`;
        
        if (!cursorVisible) {
            cursorVisible = true;
            wand.style.opacity = '1';
        }
        
        // Create sparkle effect on movement
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
            createSparkleTrail(mouseX, mouseY, angle);
        }
    });
    
    // Mouse leave window
    document.addEventListener('mouseout', () => {
        cursorVisible = false;
        wand.style.opacity = '0';
    });
    
    // Create sparkle trail following the wand
    function createSparkleTrail(x, y, angle) {
        sparkles.forEach((sparkle, index) => {
            if (sparkle.dataset.active !== 'true') {
                // Position at the wand tip (adjusted for new wand image)
                const wandTipX = x + Math.cos((angle + 20) * Math.PI / 180) * 20;
                const wandTipY = y + Math.sin((angle + 20) * Math.PI / 180) * 20;
                
                // Random offset from wand tip
                const offsetX = (Math.random() - 0.5) * 30;
                const offsetY = (Math.random() - 0.5) * 30;
                
                sparkle.style.left = `${wandTipX + offsetX}px`;
                sparkle.style.top = `${wandTipY + offsetY}px`;
                sparkle.style.opacity = '1';
                sparkle.dataset.active = 'true';
                
                // Random color
                const colors = ['#f5d442', '#42a7f5', '#f542f2', '#42f584'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                sparkle.style.backgroundColor = randomColor;
                sparkle.style.boxShadow = `0 0 8px ${randomColor}`;
                
                // Fade out effect
                setTimeout(() => {
                    sparkle.style.opacity = '0';
                    sparkle.dataset.active = 'false';
                }, Math.random() * 800 + 200);
                
                // Only use a few sparkles per movement to avoid overcrowding
                return;
            }
        });
    }
}

// Initialize magic wand
document.addEventListener('DOMContentLoaded', createMagicWand);

// Add click sound to all buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add click sound to all buttons
    const buttons = document.querySelectorAll('button, .group-card');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Clone the audio to allow multiple overlapping sounds
            const clickSound = sounds.buttonClick.cloneNode();
            clickSound.volume = sounds.buttonClick.volume;
            clickSound.play().catch(e => console.log('Audio play prevented'));
        });
    });

    // Add event listener for view all results button in group selection page
    const viewAllResultsButton = document.getElementById('viewAllResultsButton');
    if (viewAllResultsButton) {
        viewAllResultsButton.addEventListener('click', function() {
            window.location.href = 'results.html';
        });
    }
});

// Add blue wizard character to the lottery page
document.addEventListener('DOMContentLoaded', function() {
    // Create wizard character elements
    const blueWizard = document.createElement('div');
    blueWizard.className = 'blue-wizard';
    
    const speechBubble = document.createElement('div');
    speechBubble.className = 'speech-bubble';
    
    const messageText = document.createElement('p');
    messageText.textContent = 'Choose a magical house to begin the lottery!';
    
    speechBubble.appendChild(messageText);
    blueWizard.appendChild(speechBubble);
    
    // Add to body when lottery container is shown
    document.getElementById('startButton').addEventListener('click', function() {
        setTimeout(function() {
            document.body.appendChild(blueWizard);
        }, 500);
    });
    
    // Blue wizard reactions to different events
    document.querySelectorAll('.group-card').forEach(card => {
        card.addEventListener('click', () => {
            const group = card.getAttribute('data-group');
            messageText.textContent = `Let's find our ${group} champions!`;
        });
    });
    
    // When draw button is clicked
    if (drawButton) {
        drawButton.addEventListener('click', function() {
            messageText.textContent = "Watch the magical cards carefully!";
            
            setTimeout(function() {
                messageText.textContent = "I can feel the magic working...";
            }, 3000);
            
            setTimeout(function() {
                messageText.textContent = "And our winners are...";
            }, 6000);
        });
    }
    
    // When redraw button is clicked
    if (redrawButton) {
        redrawButton.addEventListener('click', function() {
            messageText.textContent = "Let's try another magical draw!";
        });
    }
    
    // When back button is clicked
    if (backButton) {
        backButton.addEventListener('click', function() {
            messageText.textContent = "Choose a magical house to begin the lottery!";
        });
    }
}); 