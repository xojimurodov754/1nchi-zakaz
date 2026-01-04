function generatePlan() {
    const topic = document.getElementById('topicInput').value;
    const loading = document.getElementById('loading');
    const resultArea = document.getElementById('resultArea');
    const aiContent = document.getElementById('aiContent');

    if (topic.trim() === "") {
        alert("Iltimos, mavzu kiriting!");
        return;
    }

    // Animatsiyani ko'rsatish
    loading.classList.remove('hidden');
    resultArea.classList.add('hidden');

    // Sun'iy intellekt javobini simulyatsiya qilish (Imitasiya)
    setTimeout(() => {
        loading.classList.add('hidden');
        resultArea.classList.remove('hidden');

        // Tayyor shablon
        aiContent.innerHTML = `
            <p><strong>Mavzu:</strong> ${topic}</p>
            <p><strong>Dars maqsadi:</strong> O'quvchilarga ${topic} haqida tushuncha berish.</p>
            <ul>
                <li><strong>Kirish (5 daqiqa):</strong> Tashkiliy qism va qiziqtiruvchi savollar.</li>
                <li><strong>Asosiy qism (25 daqiqa):</strong> Mavzuning mazmunini tushuntirish va slaydlar namoyishi.</li>
                <li><strong>Mustahkamlash (10 daqiqa):</strong> Interaktiv o'yin va savol-javoblar.</li>
                <li><strong>Uyga vazifa (5 daqiqa):</strong> ${topic} bo'yicha konspekt tayyorlash.</li>
            </ul>
        `;
    }, 2000); // 2 soniyadan keyin javob chiqadi
}