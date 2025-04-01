# YLY Competition - Magical Lottery System

A Harry Potter-themed lottery system for selecting participants from Egyptian governorates across different competition categories.

## Features

- 🪄 **Magical Harry Potter-themed UI** with blue neon elements
- 🎴 **Card Deck Mechanism**: 20 cards per category with animated card drawing
- 🎭 **9 Competition Categories**: Singing, Theater, Presentation, Sports, Culture, Arts, Creativity, Literature, and Innovation
- ✨ **Magical Effects**: Card rotations, flips, and more magical animations
- 🔊 **Sound Effects**: Magical sounds for background, card flips, and successful draws
- 📜 **Printable Results**: Generate a magical parchment scroll with results
- 🔄 **Independent Results**: Each category maintains its own independent lottery results

## How to Use

1. Open `index.html` in a web browser
2. Click the "START MAGIC" button on the landing page
3. Select one of the magical groups (categories)
4. Click "Start the Magic Lottery" to begin the magical draw
5. Watch as the cards rotate and four random cards flip to reveal the selected governorates
6. View the results on the magical parchment scroll
7. Use the "Print Results" button to save or print the results
8. Use "Redraw" to perform a new lottery draw or "Back to Groups" to change categories

## Setting Up the Background Image

You need to add a local Hogwarts castle image for the background:

1. Create an `images` folder in the project directory (if not already present)
2. Save a Hogwarts castle image as `hogwarts.jpg` in the images folder
3. The system will automatically use this local image for the background

If the local image is not found, the system will fall back to using an online image.

## Deployment

### GitHub Deployment
1. Create a GitHub repository
2. Push this project to GitHub:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/maro20066600/yly.git
   git push -u origin main
   ```

### Vercel Deployment
1. Sign up for a Vercel account
2. Connect your GitHub account to Vercel
3. Import the GitHub repository
4. Vercel will automatically detect the project configuration
5. Click "Deploy" to make the site live

## Sound Credits

Sound effects from SoundBible:
- Magical Mystical Chime by JP Scrip
- Card Flip Sound Effect
- Magic Chime by Kevan

## Customization

The code allows for easy customization of:
- Card colors for each category
- Card animations and timings
- Sound effects
- Participant names
- Background images

## Technical Details

- Built with vanilla JavaScript, HTML, and CSS
- No external libraries required
- Fully responsive design
- Custom animations using CSS keyframes 