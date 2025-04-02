function loadCourse(language) {
    const courseContent = document.getElementById('course-content');
    let content = '';

    if(language === 'japanese') {
        content = `
            <h2>Learn Japanese</h2>
            <p>Click below to hear pronunciation of the first letter:</p>
            <button onclick="playAudio('assets/audio/japanese_audio.mp3')">Play Japanese Audio</button>
        `;
    } else if(language === 'korean') {
        content = `
            <h2>Learn Korean</h2>
            <p>Click below to hear pronunciation of the first letter:</p>
            <button onclick="playAudio('assets/audio/korean_audio.mp3')">Play Korean Audio</button>
        `;
    }

    courseContent.innerHTML = content;
}

function playAudio(audioPath) {
    const audio = new Audio(audioPath);
    audio.play();
}
