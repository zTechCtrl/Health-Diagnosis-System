// Mock function to suggest symptoms as user types
function suggestSymptoms() {
    const input = document.getElementById('symptom-input').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    const symptoms = ['fever', 'coughing', 'headache', 'sorethroat', 'fatigue', ' dizziness', 'jointPain',  'rashes', 'shortnessofbreath', 'chestpain', 'vomiting'];

    // Clear previous suggestions
    suggestions.innerHTML = '';

    // Generate new suggestions
    if (input.length > 0) {
        const filtered = symptoms.filter(symptom => symptom.includes(input));
        filtered.forEach(symptom => {
            const suggestion = document.createElement('div');
            suggestion.classList.add('suggestion-item');
            suggestion.textContent = symptom;
            suggestion.onclick = () => {
                document.getElementById('symptom-input').value = symptom;
                suggestions.innerHTML = ''; // Clear suggestions after selection
            };
            suggestions.appendChild(suggestion);
        });
    }
}

// Mock function to get diagnosis
function getDiagnosis() {
    const symptom = document.getElementById('symptom-input').value;
    const diagnosisResult = document.getElementById('diagnosis-result');

    // Simulate fetching diagnosis from an API
    if (symptom) {
        diagnosisResult.textContent = `You may have: ${mockDiagnosis(symptom)}`;
    } else {
        diagnosisResult.textContent = 'Please enter a symptom!';
    }
}

// Mock diagnosis function
function mockDiagnosis(symptom) {
    const diagnosis = {
        fever: 'Flu, Common Cold - Fever is a common symptom of bacterial, viral, or parasitic infections as the body fights off invaders',
        coughing: 'Bronchitis, Pneumonia, Allergies - Coughing is a common symptom that can be caused by a variety of conditions, ranging from mild to severe. Those are some key conditions associated with coughing',
        headache: 'Migraine, Tension Headache, Cluster Headache',
        sorethroat: 'Tonsillitis, Strep Throat',
        fatigue: 'Anemia, Depression, Chronic Fatigue Syndrome, Hypothyroidism',
        shortnessofbreath: 'Asthma, Chronic Obstructive Pulmonary Disease (COPD), Pulmonary Embolism',
        chestpain: 'Heart Attack (Myocardial Infarction), Angina, Panic Attack',
        vomiting:  'Food Poisoning, Pregnancy (Morning Sickness), Gastroenteritis (Stomach Flu)',
        dizziness: 'Vertigo, Low Blood Pressure (Hypotension), Dehydration',
        rashes: 'Eczema (Atopic Dermatitis), Psoriasis, Lupus',
        jointpain: 'Osteoarthritis, Rheumatoid Arthritis, Gout'
    };

    return diagnosis[symptom] || 'Unknown condition';
}
