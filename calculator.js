const apps = {
    calculator: {
        title: "Calculator",
        content: `
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
                <button style="padding: 20px; font-size: 20px;">7</button>
                <button style="padding: 20px; font-size: 20px;">8</button>
                <button style="padding: 20px; font-size: 20px;">9</button>
                <button style="padding: 20px; font-size: 20px; background: orange; color: white;">÷</button>
                <button style="padding: 20px; font-size: 20px;">4</button>
                <button style="padding: 20px; font-size: 20px;">5</button>
                <button style="padding: 20px; font-size: 20px;">6</button>
                <button style="padding: 20px; font-size: 20px; background: orange; color: white;">×</button>
                <button style="padding: 20px; font-size: 20px;">1</button>
                <button style="padding: 20px; font-size: 20px;">2</button>
                <button style="padding: 20px; font-size: 20px;">3</button>
                <button style="padding: 20px; font-size: 20px; background: orange; color: white;">-</button>
                <button style="padding: 20px; font-size: 20px; grid-column: span 2;">0</button>
                <button style="padding: 20px; font-size: 20px;">.</button>
                <button style="padding: 20px; font-size: 20px; background: orange; color: white;">+</button>
            </div>
        `
    },
    notes: {
        title: "Notes",
        content: `
            <textarea style="width: 100%; height: 80%; border: none; font-size: 16px; resize: none;" placeholder="Start typing your notes..."></textarea>
        `
    },
    camera: {
        title: "Camera",
        content: `
            <div style="width: 100%; height: 80%; background: #333; display: flex; align-items: center; justify-content: center; color: white;">
                [ Camera Feed ]
            </div>
        `
    },
    settings: {
        title: "Settings",
        content: `
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div><label>Wi-Fi</label><p>Connected to Home_Network</p></div>
                <div><label>Bluetooth</label><p>On</p></div>
                <div><label>Brightness</label><input type="range"></div>
            </div>
        `
    },
    weather: {
        title: "Weather",
        content: `
            <div style="text-align: center; padding: 40px;">
                <h1>☀️ 75°F</h1>
                <p>Sunny - San Francisco</p>
            </div>
        `
    },
    music: {
        title: "Music",
        content: `
            <div style="text-align: center; padding: 40px;">
                <div style="width: 150px; height: 150px; background: #ddd; border-radius: 50%; margin: 0 auto 20px;"></div>
                <h2>Song Title</h2>
                <p>Artist Name</p>
                <button style="padding: 10px 30px; border-radius: 20px; background: #1DB954; color: white; border: none;">Play</button>
            </div>
        `
    }
};

const appOverlay = document.getElementById('app-overlay');
const appContent = document.getElementById('app-content');
const appTitle = document.getElementById('app-title');
const backButton = document.getElementById('back-button');
const appItems = document.querySelectorAll('.app-item');

appItems.forEach(item => {
    item.addEventListener('click', () => {
        const appId = item.getAttribute('data-app');
        const appData = apps[appId];
        
        if (appData) {
            appTitle.innerText = appData.title;
            appContent.innerHTML = appData.content;
            appOverlay.classList.remove('hidden');
        }
    });
});

backButton.addEventListener('click', () => {
    appOverlay.classList.add('hidden');
});

// Update time every second
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('current-time').innerText = hours + ':' + minutes;
}

setInterval(updateTime, 1000);
updateTime();
