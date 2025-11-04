# 2025 Mayoral Election Tracker

A professional, broadcast-quality election tracking website featuring real-time results, news updates, and expert analysis.

## Features

### Live Election Coverage
- **Real-time Vote Counting**: Watch as votes are tallied with smooth, animated updates
- **Interactive Visualizations**: Bar charts showing vote distribution across candidates
- **Live Statistics**: Precincts reporting, total votes cast, and voter turnout percentages

### Professional Newscast Design
- **Red, White & Blue Color Scheme**: Patriotic American colors throughout
- **Breaking News Banner**: Rotating headlines at the top of the page
- **Live Indicator**: Animated "LIVE" badge showing active coverage
- **News Ticker**: Scrolling updates at the bottom of the page

### Comprehensive Information
- **Candidate Profiles**: Four candidates with party affiliations and real-time vote counts
- **News Feed**: Latest updates with timestamps and categories
- **Expert Analysis**: Commentary from political analysts and strategists
- **Social Media Pulse**: Real-time social media engagement tracking
- **Key Issues**: Overview of major campaign topics

## Technology Stack

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Advanced animations, gradients, and responsive design
- **JavaScript (ES6+)**: Dynamic updates and interactive features
- **Chart.js**: Professional data visualization

## How to Use

### Local Deployment
1. Simply open `index.html` in any modern web browser
2. No server setup required - runs entirely in the browser

### Features in Action
- **Automatic Updates**: Vote counts update every 3 seconds
- **News Rotation**: Breaking news headlines rotate every 8 seconds
- **Live Clock**: Current date and time displayed in the header
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Customization

### Modify Candidates
Edit the `electionData.candidates` array in `script.js`:
```javascript
candidates: [
    {
        id: 1,
        name: "Your Candidate Name",
        party: "Party Name",
        initials: "YN",
        votes: 0,
        percentage: 0,
        color: "#C8102E"
    }
]
```

### Add News Updates
Update the `newsUpdates` array in `script.js`:
```javascript
newsUpdates.push({
    time: "8:00 PM",
    category: "BREAKING",
    headline: "Your headline here"
});
```

### Change Colors
Modify CSS variables in `styles.css`:
```css
:root {
    --red-primary: #C8102E;
    --blue-primary: #002868;
    --white: #FFFFFF;
}
```

## Visual Elements

### Animated Components
- Pulsing "BREAKING NEWS" banner
- Blinking "LIVE" indicator
- Rotating background gradients on vote statistics
- Scrolling news ticker
- Smooth vote bar animations
- Shimmer effects on key elements

### Layout Sections
1. **Top Banner**: Breaking news with animated text
2. **Header**: Election branding and live indicator
3. **Left Sidebar**: Latest news updates
4. **Center Panel**: Main results and visualizations
5. **Right Sidebar**: Expert analysis and social media
6. **Bottom Ticker**: Scrolling news updates
7. **Footer**: Disclaimers and timestamps

## Performance

- Lightweight and fast loading
- Smooth animations at 60fps
- Efficient DOM updates
- Responsive to all screen sizes

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Future Enhancements

Potential additions for live deployment:
- Connect to real election API
- WebSocket for live updates
- Historical comparison charts
- County/district breakdown maps
- Live video streams
- Push notifications

## Credits

Created as a demonstration of modern web development techniques for election coverage visualization.

## License

Open source - feel free to modify and use for your own election tracking needs.
