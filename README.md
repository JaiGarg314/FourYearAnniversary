# 4 Year Anniversary Scavenger Hunt 💕

A cute and romantic React-based scavenger hunt website for celebrating your 4-year anniversary!

## Features

- 🎯 **Interactive Riddles**: A series of customizable riddles that unlock sequentially
- 💝 **Progress Tracking**: Visual progress bar with heart indicators
- 🎨 **White & Red Theme**: Beautiful, romantic color scheme
- ✨ **Smooth Animations**: Engaging transitions and celebrations
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎁 **Final Prize Reveal**: Special celebration when all riddles are complete

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. The dependencies are already installed
2. The development server is running at `http://localhost:5173/`

### Running the Project

```bash
npm run dev
```

Then open [http://localhost:5173/](http://localhost:5173/) in your browser.

## Customization

### Edit the Riddles

Open `src/App.jsx` and modify the `riddles` array (around line 8):

```javascript
const riddles = [
  {
    id: 1,
    question: "Your riddle question here 🎯",
    answer: "the answer", // Case insensitive
    hint: "Your helpful hint..."
  },
  // Add more riddles...
];
```

### Change the Final Prize

Edit `src/components/FinalPrize.jsx` to customize:
- Prize description
- Love note message
- Your signature

### Adjust Colors

Main colors are defined in:
- `src/App.css`
- `src/components/RiddleCard.css`
- `src/components/ProgressTracker.css`
- `src/components/FinalPrize.css`

Primary colors used:
- `#c41e3a` - Deep red
- `#e75480` - Pink
- `#ffe6e6` - Light pink
- `#fff` - White

## Project Structure

```
4YearAnniversary/
├── src/
│   ├── components/
│   │   ├── RiddleCard.jsx          # Individual riddle display
│   │   ├── RiddleCard.css
│   │   ├── ProgressTracker.jsx     # Progress bar and hearts
│   │   ├── ProgressTracker.css
│   │   ├── FinalPrize.jsx          # Final celebration screen
│   │   └── FinalPrize.css
│   ├── App.jsx                      # Main app logic
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deploying to GitHub Pages

This project is configured to deploy to GitHub Pages automatically!

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys when you push to the main branch.

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click `Settings` → `Pages`
   - Under "Build and deployment", set Source to `GitHub Actions`

2. **Push your changes**:
   ```bash
   git add .
   git commit -m "Update scavenger hunt"
   git push origin main
   ```

3. **Access your site**:
   - Your site will be live at: `https://jaigarg314.github.io/FourYearAnniversary/`
   - The deployment takes about 1-2 minutes

### Manual Deployment

Alternatively, you can deploy manually:

```bash
npm run deploy
```

This will build and deploy directly to the `gh-pages` branch.

## Tips

1. **Test all riddles**: Make sure all answers work correctly (they're case-insensitive)
2. **Personalize it**: Add specific memories, inside jokes, and personal touches
3. **Set up the prize**: Have the actual prize ready before starting the hunt!
4. **Mobile friendly**: Your partner can complete it on their phone
5. **Preview before sharing**: Test the deployed version before sending the link!

## Made with Love ❤️

Created with React + Vite for an unforgettable anniversary celebration!
