 // Select the image element
    const imageButton = document.getElementById('imageButton');

    // Create a new Audio object and load your sound file
    const sound = new Audio('https://www.youtube.com/watch?v=WTWyosdkx44');  // Use your own sound URL or local path

    // Add a click event listener to the image
    imageButtonsound.addEventListener('click', function() {
        // Play the sound when the image is clicked
        sound.play();

        // Action to perform when the image is clicked
        alert('RATTLE EM BOIS.');
    });