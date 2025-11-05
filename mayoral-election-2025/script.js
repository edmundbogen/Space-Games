// ===== ELECTION DATA =====
let electionData = {
    totalRegisteredVoters: 425000,
    totalVotesCast: 0,
    precinctsReporting: 0,
    candidates: [
        {
            id: 1,
            name: "Sarah Mitchell",
            party: "Independent",
            initials: "SM",
            votes: 0,
            percentage: 0,
            color: "#C8102E"
        },
        {
            id: 2,
            name: "James Rodriguez",
            party: "Reform Party",
            initials: "JR",
            votes: 0,
            percentage: 0,
            color: "#002868"
        },
        {
            id: 3,
            name: "Emily Chen",
            party: "Progressive Alliance",
            initials: "EC",
            votes: 0,
            percentage: 0,
            color: "#4A90E2"
        },
        {
            id: 4,
            name: "Michael Thompson",
            party: "Community First",
            initials: "MT",
            votes: 0,
            percentage: 0,
            color: "#E74C3C"
        }
    ]
};

// News feed data
const newsUpdates = [
    { time: "7:45 PM", category: "POLLS", headline: "Final polling stations close across the city" },
    { time: "7:30 PM", category: "TURNOUT", headline: "Record voter turnout reported in downtown districts" },
    { time: "7:15 PM", category: "BREAKING", headline: "Early results show tight race between top two candidates" },
    { time: "7:00 PM", category: "UPDATE", headline: "Campaign headquarters preparing for potential victory speeches" },
    { time: "6:45 PM", category: "ANALYSIS", headline: "Exit polls suggest economy is top voter concern" },
    { time: "6:30 PM", category: "REPORT", headline: "No major incidents reported at polling locations" },
    { time: "6:15 PM", category: "TURNOUT", headline: "Suburban precincts seeing higher than expected turnout" },
    { time: "6:00 PM", category: "UPDATE", headline: "First results expected within the hour" }
];

// Analysis content
const analysisContent = [
    {
        analyst: "Dr. Patricia Williams - Political Science Professor",
        text: "The high turnout in suburban districts could be a game-changer. These voters historically lean toward fiscal responsibility candidates."
    },
    {
        analyst: "Marcus Johnson - Election Analyst",
        text: "We're seeing unprecedented engagement among younger voters. This demographic could decide this election."
    },
    {
        analyst: "Linda Park - Campaign Strategist",
        text: "The candidates who focused on local issues are performing better than those who ran on national talking points."
    },
    {
        analyst: "Robert Chang - Data Journalist",
        text: "Early data shows education and public safety are nearly tied as the top concerns for voters tonight."
    }
];

// Social media feed
const socialUpdates = [
    {
        user: "@CityVoter2025",
        text: "Just cast my vote! So proud to be part of this process. <span class='social-hashtag'>#MayoralElection2025</span>"
    },
    {
        user: "@LocalNewsDesk",
        text: "Massive lines still forming at polling stations downtown. <span class='social-hashtag'>#Election2025</span>"
    },
    {
        user: "@FirstTimeVoter",
        text: "First time voting in a local election - this matters so much! <span class='social-hashtag'>#YourVoteMatters</span>"
    },
    {
        user: "@CivicEngagement",
        text: "Democracy in action! Inspiring to see our community so engaged. <span class='social-hashtag'>#MayoralElection2025</span>"
    }
];

// Key issues
const keyIssues = [
    {
        title: "Economic Development",
        description: "Plans to attract new businesses and create jobs while supporting local enterprises"
    },
    {
        title: "Public Transportation",
        description: "Proposals to expand metro lines and improve bus service across the city"
    },
    {
        title: "Education Funding",
        description: "Initiatives to increase school budgets and reduce classroom sizes"
    },
    {
        title: "Affordable Housing",
        description: "Strategies to address housing crisis and increase affordable units"
    },
    {
        title: "Public Safety",
        description: "Community policing reforms and emergency services expansion"
    },
    {
        title: "Climate Action",
        description: "Green energy initiatives and carbon emission reduction targets"
    }
];

// Ticker messages
const tickerMessages = [
    "Record voter turnout across all districts",
    "All polling stations have now closed",
    "Results are unofficial until certified by election officials",
    "Stay tuned for candidate statements as results come in",
    "Voter hotline available for questions: 1-800-VOTE-2025",
    "Next update expected in 15 minutes"
];

// ===== INITIALIZATION =====
let resultsChart = null;

document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    startLiveUpdates();
});

function initializePage() {
    updateClock();
    setInterval(updateClock, 1000);

    renderNewsFeed();
    renderAnalysis();
    renderSocialFeed();
    renderIssues();
    renderCandidates();
    initializeChart();
    updateTicker();

    // Start simulated vote counting
    startVoteCounting();
}

// ===== CLOCK & TIMESTAMP =====
function updateClock() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('currentTime').textContent = now.toLocaleDateString('en-US', options);
    document.getElementById('lastUpdate').textContent = now.toLocaleTimeString('en-US');
}

// ===== NEWS FEED =====
function renderNewsFeed() {
    const container = document.getElementById('newsFeed');
    container.innerHTML = newsUpdates.map(news => `
        <div class="news-item fade-in">
            <div class="news-time">${news.time}</div>
            <div class="news-headline">${news.headline}</div>
            <span class="news-category">${news.category}</span>
        </div>
    `).join('');
}

// ===== ANALYSIS FEED =====
function renderAnalysis() {
    const container = document.getElementById('analysisContent');
    container.innerHTML = analysisContent.map(item => `
        <div class="analysis-item fade-in">
            <div class="analyst-name">${item.analyst}</div>
            <div class="analysis-text">${item.text}</div>
        </div>
    `).join('');
}

// ===== SOCIAL FEED =====
function renderSocialFeed() {
    const container = document.getElementById('socialFeed');
    container.innerHTML = socialUpdates.map(item => `
        <div class="social-item fade-in">
            <div class="social-user">${item.user}</div>
            <div class="social-text">${item.text}</div>
        </div>
    `).join('');
}

// ===== KEY ISSUES =====
function renderIssues() {
    const container = document.getElementById('issuesGrid');
    container.innerHTML = keyIssues.map(issue => `
        <div class="issue-card fade-in">
            <div class="issue-title">${issue.title}</div>
            <div class="issue-description">${issue.description}</div>
        </div>
    `).join('');
}

// ===== CANDIDATES DISPLAY =====
function renderCandidates() {
    const container = document.getElementById('candidatesContainer');

    // Sort candidates by votes
    const sortedCandidates = [...electionData.candidates].sort((a, b) => b.votes - a.votes);

    container.innerHTML = sortedCandidates.map((candidate, index) => {
        const isLeading = index === 0 && candidate.votes > 0;
        return `
            <div class="candidate-card ${isLeading ? 'leading' : ''} fade-in">
                <div class="candidate-photo" style="background: linear-gradient(135deg, ${candidate.color}, ${adjustColor(candidate.color, -30)})">
                    ${candidate.initials}
                </div>
                <div class="candidate-info">
                    <div class="candidate-name">${candidate.name}</div>
                    <div class="candidate-party">${candidate.party}</div>
                    <div class="vote-bar">
                        <div class="vote-fill" style="width: ${candidate.percentage}%; background: linear-gradient(90deg, ${candidate.color}, ${adjustColor(candidate.color, -20)})">
                            ${candidate.percentage > 15 ? candidate.percentage.toFixed(1) + '%' : ''}
                        </div>
                    </div>
                </div>
                <div class="candidate-stats">
                    <div class="candidate-votes">${formatNumber(candidate.votes)}</div>
                    <div class="candidate-percentage">${candidate.percentage.toFixed(1)}%</div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== CHART INITIALIZATION =====
function initializeChart() {
    const ctx = document.getElementById('resultsChart').getContext('2d');

    resultsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: electionData.candidates.map(c => c.name),
            datasets: [{
                label: 'Votes',
                data: electionData.candidates.map(c => c.votes),
                backgroundColor: electionData.candidates.map(c => c.color),
                borderColor: '#FFFFFF',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    borderColor: '#C8102E',
                    borderWidth: 2,
                    callbacks: {
                        label: function(context) {
                            return 'Votes: ' + formatNumber(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#FFFFFF',
                        callback: function(value) {
                            return formatNumber(value);
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#FFFFFF',
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ===== VOTE COUNTING SIMULATION =====
function startVoteCounting() {
    // Simulate vote counting over time
    let interval = setInterval(() => {
        if (electionData.precinctsReporting >= 100) {
            clearInterval(interval);
            return;
        }

        // Increment precincts reporting
        electionData.precinctsReporting = Math.min(100, electionData.precinctsReporting + Math.random() * 8);

        // Add votes to candidates (weighted random)
        const totalNewVotes = Math.floor(Math.random() * 8000) + 3000;

        // Distribute votes with some randomness but realistic patterns
        electionData.candidates.forEach((candidate, index) => {
            const basePercentage = [0.32, 0.28, 0.24, 0.16][index]; // Base vote share
            const variance = (Math.random() - 0.5) * 0.1;
            const candidateVotes = Math.floor(totalNewVotes * (basePercentage + variance));
            candidate.votes += candidateVotes;
        });

        // Calculate total votes and percentages
        electionData.totalVotesCast = electionData.candidates.reduce((sum, c) => sum + c.votes, 0);

        electionData.candidates.forEach(candidate => {
            candidate.percentage = (candidate.votes / electionData.totalVotesCast) * 100;
        });

        // Update displays
        updateStats();
        renderCandidates();
        updateChart();

    }, 800); // Update every 0.8 seconds
}

// ===== UPDATE STATS =====
function updateStats() {
    document.getElementById('precinctsReporting').textContent =
        electionData.precinctsReporting.toFixed(1) + '%';

    document.getElementById('totalVotes').textContent =
        formatNumber(electionData.totalVotesCast);

    const turnout = (electionData.totalVotesCast / electionData.totalRegisteredVoters) * 100;
    document.getElementById('voterTurnout').textContent =
        turnout.toFixed(1) + '%';
}

// ===== UPDATE CHART =====
function updateChart() {
    if (resultsChart) {
        resultsChart.data.datasets[0].data = electionData.candidates.map(c => c.votes);
        resultsChart.update('none'); // Update without animation for smooth updates
    }
}

// ===== TICKER =====
function updateTicker() {
    const tickerText = document.getElementById('tickerText');
    const fullText = tickerMessages.join(' • ') + ' • ';
    tickerText.textContent = fullText + fullText + fullText; // Repeat for continuous scroll
}

// ===== LIVE UPDATES =====
function startLiveUpdates() {
    // Periodically add new news items
    setInterval(() => {
        const newHeadlines = [
            "Vote counting continues across all districts",
            "Campaign teams monitoring results closely",
            "Voter enthusiasm remains high throughout the evening",
            "Election officials report smooth operation",
            "Independent observers confirm fair process"
        ];

        const randomHeadline = newHeadlines[Math.floor(Math.random() * newHeadlines.length)];
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        newsUpdates.unshift({
            time: timeStr,
            category: "UPDATE",
            headline: randomHeadline
        });

        newsUpdates.pop(); // Remove oldest
        renderNewsFeed();

    }, 10000); // Every 10 seconds
}

// ===== UTILITY FUNCTIONS =====
function formatNumber(num) {
    return num.toLocaleString('en-US');
}

function adjustColor(color, amount) {
    // Simple color adjustment
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// ===== BREAKING NEWS UPDATES =====
const breakingNewsMessages = [
    "2025 Mayoral Election - Live Coverage and Results",
    "High Voter Turnout Reported Across All Districts",
    "Race Remains Competitive as Votes Are Counted",
    "Stay Tuned for Latest Updates and Analysis"
];

let breakingNewsIndex = 0;
setInterval(() => {
    breakingNewsIndex = (breakingNewsIndex + 1) % breakingNewsMessages.length;
    document.getElementById('breakingNewsText').textContent = breakingNewsMessages[breakingNewsIndex];
}, 4000);

// ===== RESPONSIVE ADJUSTMENTS =====
window.addEventListener('resize', () => {
    if (resultsChart) {
        resultsChart.resize();
    }
});
