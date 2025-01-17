// document.getElementById('suggest-btn').addEventListener('click', () => {
//     const temperature = document.getElementById('temperature').value;
//     const water = document.getElementById('water').value;
//     const sulphur = document.getElementById('sulphur').value;
//     const phosphorus = document.getElementById('phosphorus').value;
//     const nitrogen = document.getElementById('nitrogen').value;

//     let suggestion = '';

//     // Basic Crop suggestion logic based on input values
//     if (temperature >= 20 && water >= 50 && nitrogen >= 30) {
//         suggestion = 'Rice';
//     } else if (temperature >= 18 && water <= 50 && sulphur >= 15) {
//         suggestion = 'Wheat';
//     } else if (temperature >= 25 && phosphorus >= 20) {
//         suggestion = 'Corn';
//     } else {
//         suggestion = 'Consider growing legumes like Peas or Beans';
//     }

//     // Display the crop suggestion
//     document.getElementById('suggestion-result').innerText = 'Best crop for these conditions: ' + suggestion;
// });
document.getElementById('suggest-btn').addEventListener('click', () => {
    const temperature = document.getElementById('temperature').value;
    const water = document.getElementById('water').value;
    const sulphur = document.getElementById('sulphur').value;
    const phosphorus = document.getElementById('phosphorus').value;
    const nitrogen = document.getElementById('nitrogen').value;
    
    // Create URL with parameters
    const params = new URLSearchParams({
        temperature,
        water,
        sulphur,
        phosphorus,
        nitrogen
    });
    
    // Redirect to suggestion page with parameters
    window.location.href = 'suggestion.html?' + params.toString();
});