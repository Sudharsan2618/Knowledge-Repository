let currentSpeech = null;  // To hold the current SpeechSynthesisUtterance object
let isReading = false;  // To track if reading is in progress
let isPaused = false;  // To track if speech is paused

document.getElementById('read-aloud-button').addEventListener('click', function() {
    readContentAloud();
});

document.getElementById('start-reading').addEventListener('click', function() {
    readContentAloud();
});

document.getElementById('pause-reading').addEventListener('click', function() {
    pauseReading();
});

document.getElementById('resume-reading').addEventListener('click', function() {
    resumeReading();
});

document.getElementById('stop-reading').addEventListener('click', function() {
    stopReading();
});

document.getElementById('restart-reading').addEventListener('click', function() {
    restartReading();
});

function readContentAloud() {
    const mainContent = document.getElementById("main-content");
    const textToRead = mainContent.innerText || mainContent.textContent;

    if (textToRead.trim().length === 0) {
        alert("There is no content to read aloud.");
        return;
    }

    // If already reading, do not start again
    if (isReading) {
        return;
    }

    isReading = true;

    // Create a new SpeechSynthesisUtterance object
    currentSpeech = new SpeechSynthesisUtterance(textToRead);
    currentSpeech.lang = 'en-US'; // Set language
    currentSpeech.rate = 1; // Speed of speech
    currentSpeech.pitch = 1; // Pitch of speech

    // Start reading the content
    window.speechSynthesis.speak(currentSpeech);

    // Show appropriate buttons
    document.getElementById('start-reading').style.display = 'none';
    document.getElementById('pause-reading').style.display = 'inline';
    document.getElementById('stop-reading').style.display = 'inline';
    document.getElementById('resume-reading').style.display = 'none';
    document.getElementById('restart-reading').style.display = 'inline';

    // Event handlers for speech
    currentSpeech.onstart = function() {
        console.log("Reading content aloud...");
    };

    currentSpeech.onend = function() {
        isReading = false;
        isPaused = false;
        console.log("Finished reading content.");
        resetButtons();
    };

    currentSpeech.onpause = function() {
        isPaused = true;
        console.log("Speech paused");
    };

    currentSpeech.onresume = function() {
        isPaused = false;
        console.log("Speech resumed");
    };
}

function pauseReading() {
    if (currentSpeech && !isPaused) {
        window.speechSynthesis.pause();
        document.getElementById('pause-reading').style.display = 'none';
        document.getElementById('resume-reading').style.display = 'inline';
    }
}

function resumeReading() {
    if (currentSpeech && isPaused) {
        window.speechSynthesis.resume();
        document.getElementById('resume-reading').style.display = 'none';
        document.getElementById('pause-reading').style.display = 'inline';
    }
}

function stopReading() {
    if (currentSpeech) {
        window.speechSynthesis.cancel();
        isReading = false;
        isPaused = false;
        resetButtons();
        console.log("Reading stopped.");
    }
}

function restartReading() {
    stopReading();
    readContentAloud();  // Restart reading the content
}

function resetButtons() {
    document.getElementById('start-reading').style.display = 'inline';
    document.getElementById('pause-reading').style.display = 'none';
    document.getElementById('stop-reading').style.display = 'none';
    document.getElementById('resume-reading').style.display = 'none';
    document.getElementById('restart-reading').style.display = 'none';
}
