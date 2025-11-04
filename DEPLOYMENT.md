# GitHub Pages Deployment Instructions 🚀

## Quick Start

Your anniversary scavenger hunt is now ready to deploy to GitHub Pages!

## Option 1: Automatic Deployment (Recommended) ✨

### First Time Setup

1. **Enable GitHub Pages**:
   - Go to: https://github.com/JaiGarg314/FourYearAnniversary/settings/pages
   - Under "Build and deployment"
   - Set **Source** to: `GitHub Actions`
   - Click Save

2. **Push your changes**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

3. **Wait for deployment** (1-2 minutes):
   - Go to the "Actions" tab in your repository
   - You'll see the deployment workflow running
   - Once complete (green checkmark), your site is live!

4. **Visit your site**:
   ```
   https://jaigarg314.github.io/FourYearAnniversary/
   ```

### Future Updates

Every time you push to the main branch, the site will automatically update!

```bash
# Make your changes, then:
git add .
git commit -m "Updated riddles"
git push origin main
```

## Option 2: Manual Deployment 🔧

If you prefer manual control:

```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Make your site live

**Note**: For manual deployment, set GitHub Pages source to "Deploy from branch" and select the `gh-pages` branch.

## Troubleshooting

### Site not loading?
- Make sure GitHub Pages is enabled in repository settings
- Check that the source is set to "GitHub Actions"
- Wait a few minutes for DNS propagation

### Seeing old version?
- Clear your browser cache (Cmd+Shift+R on Mac)
- Check the Actions tab to ensure deployment completed

### Build failing?
- Make sure all dependencies are installed: `npm install`
- Test locally first: `npm run build`
- Check the Actions tab for error details

## Important Notes

✅ The site is configured for the repository: `FourYearAnniversary`
✅ Base URL is set to: `/FourYearAnniversary/`
✅ All assets will load correctly on GitHub Pages

🎉 Once deployed, share the link with your partner and enjoy the scavenger hunt!

## Need Help?

Check the GitHub Actions tab in your repository to see deployment status and logs.
