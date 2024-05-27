// script.js
document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    
    // Array of image filenames
    const photos = [
        'dog5.jpg', 'dog6.jpg', 'dog7.jpg', 'dog8.jpg', 'dog9.jpg',
        'dog10.jpg', 'dog11.jpg', 'dog12.jpg', 'dog13.jpg', 'dog4.jpg',
        'dog3.jpg','dog2.jpg'
    ];

    // Array of captions corresponding to each image
    const captions = [
        'Cute dog #1', 'Cute dog #2', 'Cute dog #3', 'Cute dog #4', 'Cute dog #5',
        'Cute dog #6', 'Cute dog #7', 'Cute dog #8', 'Cute dog #9', 'Cute dog #10'
    ];

    // Loop through the array of photos
    photos.forEach((photo, index) => {
        // Create a new <li> element
        const li = document.createElement('li');
        // Set the class of the <li> element to 'photo'
        li.className = 'photo';
        
        // Create a new <img> element
        const img = document.createElement('img');
        // Set the src attribute of the <img> element to the path of the photo
        img.src = `images/${photo}`;
        // Set the alt attribute of the <img> element for accessibility
        img.alt = `Photo ${index + 1}`;
        
        // Create a new <p> element for the caption
        const caption = document.createElement('p');
        // Set the text content of the caption
        caption.textContent = captions[index];
        
        // Append the <img> element to the <li> element
        li.appendChild(img);
        // Append the <p> element (caption) to the <li> element
        li.appendChild(caption);
        // Append the <li> element to the <ul> element with id 'gallery'
        gallery.appendChild(li);
    });
});
