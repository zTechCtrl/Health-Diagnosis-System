<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Diagnosis System</title>
    <link rel="stylesheet" href="css/home.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Online Health Diagnosis</h1>
        </header>
        
        <section class="symptom-form">
            <h2>Enter Your Symptoms</h2>
            <input type="text" id="symptom-input" placeholder="Type your symptoms here..." oninput="suggestSymptoms()">
            <div id="suggestions"></div>
            <button type="submit" onclick="getDiagnosis()">Get Diagnosis</button>
        </section>
        
        <section class="results" id="results">
            <h2>Diagnosis Results</h2>
            <div id="diagnosis-result"></div>
        </section>
    </div>

      <!-- Carousel Section -->
      <section class="carousel-container">
            <div class="carousel-slides">
                <div class="carousel-slide">
                    <h3>Tip 1: Stay Hydrated</h3>
                    <p>Drinking enough water is crucial for your overall health. It helps regulate body temperature and maintain other vital bodily functions.</p>
                </div>
                <div class="carousel-slide">
                    <h3>Tip 2: Exercise Regularly</h3>
                    <p>Regular exercise boosts your immune system, improves mental health, and reduces the risk of many diseases.</p>
                </div>
                <div class="carousel-slide">
                    <h3>Tip 3: Get Enough Sleep</h3>
                    <p>A good night's sleep helps your body repair and recharge. Make sure you're getting 7-9 hours of sleep each night.</p>
                </div>
                <div class="carousel-slide">
                    <h3>Tip 4: Eat a Balanced Diet</h3>
                    <p>Ensure that your meals contain a good balance of fruits, vegetables, whole grains, and lean proteins. This helps provide essential nutrients and maintain energy levels.</p>
                </div>
                <div class="carousel-slide">
                    <h3>Tip 5: Practice Good Hygiene</h3>
                    <p>Wash your hands regularly, especially before eating or touching your face. Good hygiene helps prevent infections and the spread of diseases.</p>
                </div>
                <div class="carousel-slide">
                    <h3>Tip 6: Maintain a Healthy Weight</h3>
                    <p>Regular physical activity and a balanced diet can help you achieve and maintain a healthy weight, which reduces the risk of chronic diseases.</p>
                </div>
                <div class="carousel-slide">
                    <h3>Tip 7: Regular Check-ups</h3>
                    <p>Visit your healthcare provider for regular check-ups and screenings. Early detection of potential health issues can lead to better treatment outcomes.</p>
                </div>
            </div>
            <button class="carousel-btn prev-btn">&lt; Prev</button>
            <button class="carousel-btn next-btn">Next &gt;</button>
        </section>

    <footer>
        <p>&copy; 2024 zTech Softwares. All rights reserved.</p>
    </footer>


    <script src="js/script1.js"></script>
    <script src="js/carousel.js"></script>
    <script src="js/api.js"></script>
</body>
</html>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Health Diagnosis</title>
    <link rel="stylesheet" href="css/home.css">
</head>
<body>

    <header>
        <h1>Online Health Diagnosis</h1>
    </header>

    <main class="container">
        <section class="diagnosis-section">
            <h2>Enter Symptoms</h2>
            <form id="diagnosis-form">
                <input type="text" id="symptoms-input" placeholder="Enter your symptoms" required>
                <button type="submit">Fetch Diagnosis</button>
            </form>

            <div id="results">
                <h3>Diagnosis Results</h3>
                <ul id="diagnosis-list"></ul>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 zTech Softwares. All rights reserved.</p>
    </footer>

    <script src="js/api.js"></script>
</body>
</html> -->
