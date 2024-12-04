// Display Current Date and Time
function displayCurrentDateTime() {
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format

    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate();
    const month = monthsOfYear[now.getMonth()];
    const year = now.getFullYear();

    const dateString = `Today is ${formattedTime} on ${dayOfWeek}, ${day} ${month}, ${year}`;

    document.getElementById('current-date-time').innerText = dateString;
}

// Handle User Information Form Submission
function handleUserInfoForm(event) {
    event.preventDefault();

    const userName = document.getElementById('user-name').value.trim();
    const userMood = document.getElementById('user-mood').value.trim();

    const companyName = 'Kind Rat';

    if (userName && userMood) {
        const greeting = `The ${companyName} welcomes you, ${userName}!`;
        const moodMessage = `We're glad you are doing ${userMood}!`;

        document.getElementById('greeting-message').innerText = `${greeting}\n${moodMessage}`;
        document.getElementById('user-info-form').reset();
    } else {
        alert('Please enter both your name and how you are feeling.');
    }
}

// Show Polygon Name Based on Favorite Number
function showPolygonName() {
    let number = parseFloat(document.getElementById('favorite-number').value);
    number = Math.abs(number); // Convert negative numbers to positive
    number = Math.round(number); // Round decimals to the nearest integer

    const polygonNames = {
        0: 'Nullagon',
        1: 'Monogon',
        2: 'Digon',
        3: 'Trigon',
        4: 'Tetragon',
        5: 'Pentagon',
        6: 'Hexagon',
        7: 'Heptagon',
        8: 'Octagon',
        9: 'Enneagon',
        10: 'Decagon'
    };

    const polygonName = polygonNames[number];

    if (polygonName) {
        document.getElementById('polygon-result').innerText = `A polygon with ${number} sides is called a ${polygonName}.`;
    } else {
        document.getElementById('polygon-result').innerText = 'Please enter a number between 0 and 10.';
    }
}

// Provide a Cheese Joke
function provideCheeseJoke() {
    const jokes = [
        "What did the cheese say when it looked in the mirror? Halloumi!",
        "Why did the cheese get promoted? He was really Gouda at his job!",
        "What’s a cheese’s favorite music? R’n’Brie."
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    alert(randomJoke);
}

// Suggest a Random Act of Kindness
function suggestKindness() {
    const acts = [
        "Offer to help a neighbor with groceries.",
        "Compliment a stranger.",
        "Donate to a local food bank.",
        "Write a thank-you note to someone."
    ];
    const randomAct = acts[Math.floor(Math.random() * acts.length)];
    alert(`Here's a suggestion: ${randomAct}`);
}

// Display a Rat Fun Fact
function displayRatFact() {
    const facts = [
        "Rats are highly intelligent and can be trained to perform tasks.",
        "Rats have excellent memories.",
        "Rats are social animals and enjoy company."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(`Did you know? ${randomFact}`);
}

// Calculate Age in Rat Years
function calculateRatAge() {
    const humanAgeInput = prompt("Enter your age:");
    const humanAge = parseFloat(humanAgeInput);

    if (humanAgeInput && !isNaN(humanAge)) {
        const ratAge = (humanAge * 30) / 80; // Approximate conversion
        document.getElementById('rat-age-result').innerText = `You are approximately ${ratAge.toFixed(1)} rat years old.`;
    } else {
        alert("Please enter a valid number.");
    }
}

// Provide a Cheer Up Message
function cheerUp() {
    const messages = [
        "Keep your chin up! Better days are ahead.",
        "You're doing great! Keep it up!",
        "Believe in yourself; you are capable of amazing things."
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Display current date and time
    displayCurrentDateTime();

    // Update time every minute
    setInterval(displayCurrentDateTime, 60000);

    // Event listener for the user info form
    document.getElementById('user-info-form').addEventListener('submit', handleUserInfoForm);

    // Event listeners for buttons
    document.getElementById('cheese-joke-button').addEventListener('click', provideCheeseJoke);
    document.getElementById('kindness-button').addEventListener('click', suggestKindness);
    document.getElementById('rat-fact-button').addEventListener('click', displayRatFact);
    document.getElementById('rat-age-button').addEventListener('click', calculateRatAge);
    document.getElementById('cheer-up-button').addEventListener('click', cheerUp);
    document.getElementById('polygon-button').addEventListener('click', showPolygonName);
}

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeEventListeners);
