// Simulate teacher login
function teacherLogin() {
    document.getElementById('login-section').style.display = 'none'; // Hide login
    document.getElementById('course-selection').style.display = 'none'; // Hide course selection
    document.getElementById('teacher-dashboard').style.display = 'block'; // Show teacher dashboard
}

// Simulate teacher logout
function logout() {
    document.getElementById('teacher-dashboard').style.display = 'none'; // Hide dashboard
    document.getElementById('login-section').style.display = 'block'; // Show login
}

// Load Course Content
function loadCourse(language) {
    const courseContent = document.getElementById('course-content');
    let content = '';

    if(language === 'japanese') {
        content = `
            <h2>Learn Japanese</h2>
            <h3>Hiragana - あ (a)</h3>
            <p>Click below to hear pronunciation:</p>
            <button onclick="playAudio('assets/audio/japanese_a.mp3')">Play 'あ' Audio</button>
            <p>Pronounced in Nepali: "A"</p>
            <p>Pronounced in Japanese: "Ah"</p>
            <p>Pronounced in Korean: "A"</p>
            <h3>Hiragana - い (i)</h3>
            <button onclick="playAudio('assets/audio/japanese_i.mp3')">Play 'い' Audio</button>
            <p>Pronounced in Nepali: "I"</p>
            <p>Pronounced in Japanese: "Ee"</p>
            <p>Pronounced in Korean: "I"</p>
        `;
    } else if(language === 'korean') {
        content = `
            <h2>Learn Korean</h2>
            <h3>한글 - ㅏ (a)</h3>
            <p>Click below to hear pronunciation:</p>
            <button onclick="playAudio('assets/audio/korean_a.mp3')">Play 'ㅏ' Audio</button>
            <p>Pronounced in Nepali: "A"</p>
            <p>Pronounced in Korean: "Ah"</p>
        `;
    }

    courseContent.innerHTML = content;
}

// Function to play audio
function playAudio(audioPath) {
    const audio = new Audio(audioPath);
    audio.play();
}
