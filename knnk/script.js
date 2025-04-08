// Egyptian governorates data (participants) for each category
// Fixed lottery scenarios data
const scenarios = {
    // Scenario 1 (previously 3)
    1: {
        tiktok: ["5G", "Fayoum", "Minya", "Aswan"],
        film: ["Damietta", "Ismailia", "Dakahlia", "North Sinai"],
        contentcreator: ["Ministry", "Qalyubia", "Cairo", "Red Sea"],
        singing: ["Luxor", "Capital"],
        dubbing: ["Matrouh", "Beheira", "Sharqia", "Beni Suef"],
        design: ["Monufia", "Assiut", "Sohag", "Giza"],
        ads: ["New Valley", "Gharbia", "Suez", "South Sinai"],
        reel: ["Qena", "Port Said", "Alexandria", "Kafr El-Sheikh"]
    },
    
    // Scenario 2
    2: {
        tiktok: ["5G", "North Sinai", "Fayoum", "Kafr El-Sheikh"],
        film: ["Port Said", "Dakahlia", "Matrouh", "Damietta"],
        contentcreator: ["Qalyubia", "Sohag", "Red Sea"],
        singing: ["South Sinai", "Luxor", "Capital"],
        dubbing: ["Giza", "Beheira", "Beni Suef", "Sharqia"],
        design: ["Ministry", "Alexandria", "Monufia", "Assiut"],
        ads: ["Gharbia", "Suez", "Cairo", "New Valley"],
        reel: ["Qena", "Ismailia", "Minya", "Aswan"]
    },
    
    // Scenario 3 (previously 1)
    3: {
        tiktok: ["Damietta", "Fayoum", "Qena", "New Valley"],
        film: ["Port Said", "Dakahlia", "Kafr El-Sheikh", "5G"],
        contentcreator: ["Beheira", "Giza", "Red Sea", "Sohag"],
        singing: ["South Sinai", "Luxor", "Capital"],
        dubbing: ["Matrouh", "Sharqia", "Beni Suef"],
        design: ["Monufia", "Alexandria", "Assiut", "Ministry"],
        ads: ["Gharbia", "Qalyubia", "Suez", "Cairo"],
        reel: ["North Sinai", "Ismailia", "Aswan", "Minya"]
    }
};

// Get current scenario from localStorage or start with scenario 1
let currentScenario = parseInt(localStorage.getItem('lotteryScenario') || '1');
if (currentScenario < 1 || currentScenario > 3) currentScenario = 1;

// Set participants to the active scenario
const participants = scenarios[currentScenario];

// Store results for each group separately
const groupResults = {
    tiktok: [],
    design: [],
    ads: [],
    contentcreator: [],
    dubbing: [],
    singing: [],
    reel: [],
    film: []
};

// Group colors
const groupColors = {
    tiktok: { primary: '#000000', secondary: '#00f2ea' },
    design: { primary: '#e67e22', secondary: '#ffffff' },
    ads: { primary: '#4a90e2', secondary: '#ffffff' },
    contentcreator: { primary: '#ff6b6b', secondary: '#ffffff' },
    dubbing: { primary: '#8e44ad', secondary: '#ffffff' },
    singing: { primary: '#e91e63', secondary: '#ffffff' },
    reel: { primary: '#2ecc71', secondary: '#ffffff' },
    film: { primary: '#34495e', secondary: '#ffffff' }
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
// تخزين جميع الفرق التي تم اختيارها للتأكد من عدم تكرارها
let allSelectedTeams = [];
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
        document.getElementById('currentGroup').textContent = currentGroup.toUpperCase();
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
    
    // Create 20 cards but don't display them initially
    for (let i = 0; i < 20; i++) {
        const card = document.createElement('div');
        card.className = 'magic-card';
        card.setAttribute('data-index', i);
        card.style.display = 'none'; // Hide cards initially
        
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
    
    // Display message that no cards are shown
    const messageElement = document.createElement('div');
    messageElement.style.textAlign = 'center';
    messageElement.style.padding = '30px';
    messageElement.style.color = '#e8d7b0';
    messageElement.style.fontSize = '1.5rem';
    messageElement.style.textShadow = '0 0 10px rgba(232, 215, 176, 0.6)';
    messageElement.innerHTML = 'Click the "Draw" button to start the lottery magic!';
    cardsContainer.appendChild(messageElement);
    
    // If this group already has results, show message but not the cards
    if (groupResults[currentGroup] && groupResults[currentGroup].length > 0) {
        displaySavedResults();
        redrawButton.style.display = 'inline-block';
        printButton.style.display = 'inline-block';
    }
}

// Show previously selected cards as flipped (modified to not show cards)
function showFlippedCards() {
    const selectedTeam = groupResults[currentGroup];
    if (!selectedTeam || selectedTeam.length === 0) return;
    
    // Don't actually flip or show cards here
    // Instead, this function is kept for compatibility but doesn't do anything visible
}

// Start the magical draw
drawButton.addEventListener('click', () => {
    if (isDrawing) return;
    isDrawing = true;
    
    // Reset
    resultsScroll.style.display = 'none';
    redrawButton.style.display = 'none';
    printButton.style.display = 'none';
    
    // Clear any messages in the container
    cardsContainer.innerHTML = '';
    
    // Play the spell casting sound
    sounds.spellCast.play();
    
    // Track used teams to prevent duplication across fields
    const usedTeamIds = Object.keys(groupResults).flatMap(group => 
        groupResults[group].map(team => team.toString())
    );
    
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
        
        // Filter out teams that have already been used in other categories
        const availableTeams = participants[currentGroup].filter(team => 
            !usedTeamIds.includes(team.toString())
        );
        
        // If no teams are available, use all teams for this category
        const teamsToUse = availableTeams.length > 0 ? 
            availableTeams : [...participants[currentGroup]];
        
        // Shuffle the available teams
        const shuffled = [...teamsToUse].sort(() => 0.5 - Math.random());
        
        // Select one team
        const selectedTeam = shuffled[0] || teamsToUse[0];
        
        // Verify the team exists and has members
        if (!selectedTeam || selectedTeam.length < 2) {
            alert(`Error: No valid team found for "${currentGroup}". Please try another category.`);
            isDrawing = false;
            
            // Clean up
            magicWand.remove();
            yellowMagic.remove();
            
            return;
        }
        
        // Store the selected team for this category
        groupResults[currentGroup] = selectedTeam;
        
        // Save results to localStorage
        saveResultsToLocalStorage();
        
        // Create a magical effect in the center of the container
        const magicalEffectContainer = document.createElement('div');
        magicalEffectContainer.className = 'magical-effect-container';
        magicalEffectContainer.style.position = 'relative';
        magicalEffectContainer.style.width = '100%';
        magicalEffectContainer.style.height = '300px';
        magicalEffectContainer.style.display = 'flex';
        magicalEffectContainer.style.justifyContent = 'center';
        magicalEffectContainer.style.alignItems = 'center';
        cardsContainer.appendChild(magicalEffectContainer);
        
        // Create a magical orb
        const magicalOrb = document.createElement('div');
        magicalOrb.className = 'magical-orb';
        magicalOrb.style.width = '150px';
        magicalOrb.style.height = '150px';
        magicalOrb.style.borderRadius = '50%';
        magicalOrb.style.background = 'radial-gradient(circle, rgba(255,215,0,0.7) 0%, rgba(255,140,0,0.4) 70%, transparent 100%)';
        magicalOrb.style.boxShadow = '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,140,0,0.5)';
        magicalOrb.style.position = 'relative';
        magicalOrb.style.animation = 'pulsate 2s infinite ease-in-out';
        magicalEffectContainer.appendChild(magicalOrb);
        
        // Add keyframe animation for the orb
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulsate {
                0% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.2); opacity: 0.8; }
                100% { transform: scale(1); opacity: 1; }
            }
            
            @keyframes fadeInText {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            
            .team-member-name {
                animation: fadeInText 0.8s forwards;
                opacity: 0;
            }
        `;
        document.head.appendChild(style);
        
        // Create particles around the orb
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'magical-particle';
            particle.style.position = 'absolute';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = '#ffdf85';
            particle.style.boxShadow = '0 0 10px rgba(255,215,0,0.8)';
            
            // Random position around the orb
            const angle = Math.random() * 360;
            const distance = 80 + Math.random() * 50;
            const x = Math.cos(angle * Math.PI / 180) * distance;
            const y = Math.sin(angle * Math.PI / 180) * distance;
            
            particle.style.left = `calc(50% + ${x}px)`;
            particle.style.top = `calc(50% + ${y}px)`;
            
            // Animation
            particle.style.animation = `pulsate ${1 + Math.random()}s infinite ease-in-out ${Math.random()}s`;
            
            magicalEffectContainer.appendChild(particle);
        }
        
        // Animate wand to the orb
        setTimeout(() => {
            const orbRect = magicalOrb.getBoundingClientRect();
            magicWand.style.transition = 'transform 1s ease-out, left 1s ease-out, top 1s ease-out';
            magicWand.style.left = `${orbRect.left + orbRect.width/2}px`;
            magicWand.style.top = `${orbRect.top + orbRect.height/2}px`;
            
            // Position yellow magic effect at the wand tip
            yellowMagic.style.left = `${orbRect.left + orbRect.width/2}px`;
            yellowMagic.style.top = `${orbRect.top + orbRect.height/2}px`;
            yellowMagic.style.transform = 'scale(1.5)';
            yellowMagic.style.opacity = '1';
            
            // After wand reaches the orb, show the team members
            setTimeout(() => {
                // Create team members display container
                const teamContainer = document.createElement('div');
                teamContainer.style.marginTop = '40px';
                teamContainer.style.display = 'flex';
                teamContainer.style.flexDirection = 'column';
                teamContainer.style.alignItems = 'center';
                teamContainer.style.gap = '15px';
                cardsContainer.appendChild(teamContainer);
                
                // Title for team members
                const teamTitle = document.createElement('div');
                teamTitle.style.fontSize = '1.8rem';
                teamTitle.style.color = '#e8d7b0';
                teamTitle.style.textShadow = '0 0 10px rgba(232, 215, 176, 0.6)';
                teamTitle.style.marginBottom = '15px';
                teamTitle.textContent = `${currentGroup.toUpperCase()} Team`;
                teamContainer.appendChild(teamTitle);
                
                // Show each team member with animation
                selectedTeam.forEach((member, index) => {
                    setTimeout(() => {
                        const memberElement = document.createElement('div');
                        memberElement.className = 'team-member-name';
                        memberElement.style.fontSize = '1.5rem';
                        memberElement.style.color = '#ffffff';
                        memberElement.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.8)';
                        memberElement.style.padding = '10px 20px';
                        memberElement.style.borderRadius = '10px';
                        memberElement.style.background = 'rgba(0,0,0,0.3)';
                        memberElement.style.animationDelay = `${index * 0.5}s`;
                        memberElement.style.display = 'flex';
                        memberElement.style.alignItems = 'center';
                        memberElement.style.gap = '10px';
                        
                        // Add icon based on position
                        const icons = ['👑', '🧙', '⚔️', '🔮'];
                        const iconSpan = document.createElement('span');
                        iconSpan.textContent = icons[index % icons.length];
                        iconSpan.style.fontSize = '1.8rem';
                        
                        // Add index
                        const indexSpan = document.createElement('span');
                        indexSpan.textContent = `${index + 1}ـ `;
                        indexSpan.style.opacity = '0.8';
                        indexSpan.style.fontSize = '0.9em';
                        
                        // Add name
                        const nameSpan = document.createElement('span');
                        nameSpan.textContent = member;
                        
                        memberElement.appendChild(iconSpan);
                        memberElement.appendChild(indexSpan);
                        memberElement.appendChild(nameSpan);
                        teamContainer.appendChild(memberElement);
                        
                        // Play a magical sound for each member
                        const sound = sounds.cardFlip.cloneNode(true);
                        sound.volume = 0.5;
                        sound.play().catch(e => console.log('Audio play was prevented'));
                    }, index * 800);
                });
                
                // Remove wand and effect after all members are displayed
                setTimeout(() => {
                    magicWand.style.opacity = '0';
                    yellowMagic.style.opacity = '0';
                    setTimeout(() => {
                        magicWand.remove();
                        yellowMagic.remove();
                    }, 1000);
                    
                    // Display results after animation
                    setTimeout(() => {
                        displayResults();
                        isDrawing = false;
                    }, selectedTeam.length * 800 + 500);
                }, selectedTeam.length * 800 + 1000);
            }, 1500);
        }, 1000);
    }, 500);
});

// Display saved results
function displaySavedResults() {
    const selectedParticipants = groupResults[currentGroup];
    if (!selectedParticipants || selectedParticipants.length === 0) return;
    
    resultsContent.innerHTML = '';
    
    const groupTitle = document.createElement('h4');
    groupTitle.textContent = currentGroup.toUpperCase();
    groupTitle.className = 'results-group-title';
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
    groupTitle.textContent = currentGroup.toUpperCase();
    groupTitle.className = 'results-group-title';
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
    // Clear any previous combined results to avoid stale data
    localStorage.removeItem('ylySavedResults');
    
    // حفظ نتائج كل مجموعة بشكل منفصل
    for (const group in groupResults) {
        localStorage.setItem(`results_${group}`, JSON.stringify(groupResults[group]));
    }
    
    // حفظ قائمة الفرق المختارة
    localStorage.setItem('allSelectedTeams', JSON.stringify(allSelectedTeams));
    
    // حفظ جميع النتائج كوحدة واحدة لصفحة النتائج
    const combinedResults = {};
    for (const group in groupResults) {
        if (groupResults[group] && groupResults[group].length > 0) {
            combinedResults[group] = groupResults[group];
        }
    }
    
    // Only save if we have actual results
    if (Object.keys(combinedResults).length > 0) {
        localStorage.setItem('ylySavedResults', JSON.stringify(combinedResults));
    }
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
            <title>YLY Competition - ${currentGroup.toUpperCase()} Results</title>
            <style>
                @font-face {
                    font-family: 'ParryHotter';
                    src: url('/Users/marooo/knnk/font/parry-hotter.regular.ttf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                }
                
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f5f5f5;
                    color: #333;
                }
                .print-container {
                    max-width: 800px;
                    margin: 0 auto;
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                    border: 3px solid #e8d7b0;
                }
                h1 {
                    text-align: center;
                    color: #ffb700;
                    margin-bottom: 10px;
                    font-family: 'ParryHotter', cursive;
                    font-size: 2.5rem;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
                    letter-spacing: 2px;
                }
                h2 {
                    text-align: center;
                    color: #333;
                    text-transform: uppercase;
                    font-family: 'Arial', sans-serif;
                    font-weight: bold;
                    font-size: 1.8rem;
                    border-bottom: 2px solid #ddd;
                    padding-bottom: 15px;
                    margin-bottom: 25px;
                    letter-spacing: 1px;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    padding: 12px 18px;
                    margin-bottom: 15px;
                    background-color: #f9f9f9;
                    border-radius: 5px;
                    border-left: 4px solid #ffb700;
                    font-size: 16px;
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
                <h1>THE HIDDEN KINGDOM</h1>
                <h2>${currentGroup.toUpperCase()}</h2>
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
            // Save all results to ensure we have fresh data
            saveResultsToLocalStorage();
            
            // Set flag to indicate we're coming from the main page
            localStorage.setItem('fromMainPage', 'true');
            
            // Navigate to results page
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

// تحميل النتائج المخزنة سابقاً
function loadSavedResults() {
    // Check if returning from results page to ensure fresh data
    const returnFromResults = localStorage.getItem('returnFromResults');
    if (returnFromResults) {
        // Clear the flag
        localStorage.removeItem('returnFromResults');
    }
    
    // Check if we need to cycle to the next scenario
    const shouldCycle = localStorage.getItem('cycleLotteryScenario') === 'true';
    if (shouldCycle) {
        // Cycle to the next scenario (1->2->3->1)
        localStorage.removeItem('cycleLotteryScenario');
        currentScenario = (currentScenario % 3) + 1;
        localStorage.setItem('lotteryScenario', currentScenario.toString());
        
        // Update participants to new scenario
        Object.assign(participants, scenarios[currentScenario]);
        
        // Reset results
        for (const group in groupResults) {
            groupResults[group] = [];
        }
        allSelectedTeams = [];
        
        // Clear stored results to avoid conflicts with new scenario
        localStorage.removeItem('ylySavedResults');
        for (const group in groupResults) {
            localStorage.removeItem(`results_${group}`);
        }
        localStorage.removeItem('allSelectedTeams');
        
        return; // Skip loading old results since we've reset everything
    }
    
    // استرجاع النتائج المخزنة لكل مجموعة
    for (const group in groupResults) {
        const savedResults = localStorage.getItem(`results_${group}`);
        if (savedResults) {
            groupResults[group] = JSON.parse(savedResults);
        }
    }
    
    // استرجاع قائمة الفرق المختارة
    const savedTeams = localStorage.getItem('allSelectedTeams');
    if (savedTeams) {
        allSelectedTeams = JSON.parse(savedTeams);
    }
}

// تنفيذ تحميل النتائج المخزنة عند بدء التطبيق
loadSavedResults();

// زر مسح البيانات المحفوظة (للاختبار)
const addResetButton = function() {
    // إضافة زر إعادة تعيين في أسفل الصفحة
    const resetButton = document.createElement('button');
    resetButton.id = 'resetStorageButton';
    resetButton.className = 'magic-button';
    resetButton.style.position = 'fixed';
    resetButton.style.bottom = '10px';
    resetButton.style.right = '10px';
    resetButton.style.zIndex = '9999';
    resetButton.style.fontSize = '12px';
    resetButton.style.padding = '5px 10px';
    resetButton.textContent = 'Reset All Data';
    
    resetButton.addEventListener('click', () => {
        if (confirm('هل أنت متأكد من رغبتك في مسح جميع النتائج المحفوظة؟ لن يمكن استعادتها بعد ذلك.')) {
            // مسح كل البيانات من localStorage
            for (const group in groupResults) {
                localStorage.removeItem(`results_${group}`);
                groupResults[group] = [];
            }
            localStorage.removeItem('allSelectedTeams');
            localStorage.removeItem('ylySavedResults');
            allSelectedTeams = [];
            
            // الانتقال إلى السيناريو التالي
            currentScenario = (currentScenario % 3) + 1;
            localStorage.setItem('lotteryScenario', currentScenario.toString());
            
            // تحديث المشاركين للسيناريو الجديد
            Object.assign(participants, scenarios[currentScenario]);
            
            alert('تم مسح جميع البيانات بنجاح.');
            // إعادة تحميل الصفحة
            window.location.reload();
        }
    });
    
    document.body.appendChild(resetButton);
};

// تنفيذ الدالة بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', addResetButton); 