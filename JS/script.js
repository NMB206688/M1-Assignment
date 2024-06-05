document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const infoBox = document.getElementById('info-box');
    const infoHeading = document.getElementById('info-heading');
    const infoText = document.getElementById('info-text');
    const infoClose = document.getElementById('info-close');

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
        // Create a new <li> element
        const li = document.createElement('li');
        li.className = 'photo';
        
        // Create a new <img> element
        const img = document.createElement('img');
        img.src = `images/${photo}`;
        img.alt = `Photo ${index + 1}`;
        
        // Create a new <p> element for the caption
        const caption = document.createElement('p');
        caption.textContent = captions[index];
        caption.className = 'caption';
        
        li.appendChild(img);
        li.appendChild(caption);
        gallery.appendChild(li);
        
        img.addEventListener('mouseover', () => {
            caption.style.display = 'block';
        });

        img.addEventListener('mouseout', () => {
            caption.style.display = 'none';
        });

        caption.addEventListener('click', () => {
            infoHeading.innerHTML = captions[index];
            infoText.innerHTML = additionalInfo[index];
            infoBox.style.visibility = 'visible';
        });
    });

    infoClose.addEventListener('click', (e) => {
        e.preventDefault();
        infoBox.style.visibility = 'hidden';
    });
});
