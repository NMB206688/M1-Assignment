document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery'); // Get the gallery element
    const infoBox = document.getElementById('info-box'); // Get the info box element
    const infoHeading = document.getElementById('info-heading'); // Get the info heading element
    const infoText = document.getElementById('info-text'); // Get the info text element
    const infoClose = document.getElementById('info-close'); // Get the info close button element

    // Array of image filenames
    const photos = [
        'dog5.jpg', 'dog6.jpg', 'dog7.jpg', 'dog8.jpg', 'dog9.jpg',
        'dog10.jpg', 'dog11.jpg', 'dog12.jpg', 'dog13.jpg', 'dog4.jpg',
        'dog3.jpg', 'dog2.jpg'
    ];

    // Array of captions corresponding to each image
    const captions = [
        'Cute dog #1', 'Cute dog #2', 'Cute dog #3', 'Cute dog #4', 'Cute dog #5',
        'Cute dog #6', 'Cute dog #7', 'Cute dog #8', 'Cute dog #9', 'Cute dog #10',
        'Cute dog #11', 'Cute dog #12'
    ];

    // Array of additional information for each image
    const additionalInfo = [
        'This is a cute dog #1.', 'This is a cute dog #2.', 'This is a cute dog #3.', 'This is a cute dog #4.', 'This is a cute dog #5.',
        'This is a cute dog #6.', 'This is a cute dog #7.', 'This is a cute dog #8.', 'This is a cute dog #9.', 'This is a cute dog #10.',
        'This is a cute dog #11.', 'This is a cute dog #12.'
    ];

    // Loop through the array of photos
    photos.forEach((photo, index) => {
        // Create a new <li> element for each photo
        const li = document.createElement('li');
        li.id = `photo${index + 1}`; // Set an id for each <li> element
        li.className = 'photo'; // Add class 'photo' to each <li> element
        
        // Create a new <img> element
        const img = document.createElement('img');
        img.src = `images/${photo}`; // Set the image source
        img.alt = `Photo ${index + 1}`; // Set the alt text for the image
        
        // Create a new <p> element for the caption
        const caption = document.createElement('p');
        caption.textContent = captions[index]; // Set the caption text
        caption.className = 'caption'; // Add class 'caption' to the <p> element
        
        // Create a new <div> element for the description
        const description = document.createElement('div');
        description.textContent = additionalInfo[index]; // Set the description text
        description.className = 'description'; // Add class 'description' to the <div> element
        
        // Append the image, caption, and description to the <li> element
        li.appendChild(img);
        li.appendChild(caption);
        li.appendChild(description);
        
        // Append the <li> element to the gallery
        gallery.appendChild(li);
        
        // Add mouseover event to display the description
        img.addEventListener('mouseover', () => {
            description.style.visibility = 'visible'; // Show the description on mouseover
        });

        // Add mouseout event to hide the description
        img.addEventListener('mouseout', () => {
            description.style.visibility = 'hidden'; // Hide the description on mouseout
        });

        // Add click event to the caption to display the info box
        caption.addEventListener('click', () => {
            infoHeading.innerHTML = captions[index]; // Set the info heading text
            infoText.innerHTML = additionalInfo[index]; // Set the info text
            infoBox.style.visibility = 'visible'; // Show the info box
        });
    });

    // Add click event to the info close button to hide the info box
    infoClose.addEventListener('click', (e) => {
        e.preventDefault();
        infoBox.style.visibility = 'hidden'; // Hide the info box on click
    });
});

