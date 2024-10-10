document.getElementById('diagnosis-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the symptoms from the input field
    const symptoms = document.getElementById('symptoms-input').value;

    // Clear previous results
    document.getElementById('diagnosis-result').innerHTML = '';

    // Array of API URLs to fetch diagnosis results from
    const apiUrls = [
        `https://api.example1.com/diagnosis?symptoms=${symptoms}`,  // Example site 1
        `https://api.example2.com/symptom-checker?symptoms=${symptoms}`,  // Example site 2
        `https://api.example3.com/analyze?symptoms=${symptoms}`  // Example site 3
    ];

    // Function to fetch diagnosis from a single API
    const fetchDiagnosis = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;  // Return the diagnosis result
        } catch (error) {
            console.error('Error fetching diagnosis:', error);
            return null;
        }
    };

    // Function to fetch diagnosis results from all APIs and display them
    const fetchAllDiagnoses = async () => {
        for (let url of apiUrls) {
            const diagnosis = await fetchDiagnosis(url);
            if (diagnosis) {
                displayDiagnosis(diagnosis);
            }
        }
    };

    // Function to display the diagnosis results on the page
    const displayDiagnosis = (diagnosis) => {
        const diagnosisList = document.getElementById('diagnosis-list');

        const listItem = document.createElement('li');
        listItem.innerText = `Condition: ${diagnosis.condition}, Confidence: ${diagnosis.confidence}%`;
        diagnosisList.appendChild(listItem);
    };

    // Fetch diagnosis from all sites
    fetchAllDiagnoses();
});
