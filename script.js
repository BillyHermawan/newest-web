function startLearning() {
    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
    const grade = document.getElementById('userClass').value;

    if (name && age && grade) {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('display-name').innerText = name;
    } else {
        alert("Mohon lengkapi data dirimu dulu ya!");
    }
}

// Simulasi Kecerdasan Artifisial (Simple Classifier Logic)
function simulateAI(item) {
    const resultBox = document.getElementById('ai-result');
    resultBox.innerText = "AI sedang menganalisis...";
    
    setTimeout(() => {
        let confidence = (Math.random() * (99 - 85) + 85).toFixed(2);
        resultBox.innerHTML = `AI mendeteksi: <span class="text-white">${item}</span> | Keyakinan: <span class="text-yellow-400">${confidence}%</span>`;
    }, 800);
}

// Logika Quiz
function checkAnswer(isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');
    
    if (isCorrect) {
        feedback.innerHTML = `<p class="text-green-400 font-bold">Hebat! Kamu benar. AI adalah kecerdasan buatan.</p>`;
    } else {
        feedback.innerHTML = `<p class="text-red-400 font-bold">Ups! Coba lagi ya. Jawabannya adalah Artificial Intelligence.</p>`;
    }
}
