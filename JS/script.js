document.addEventListener('DOMContentLoaded', function () {
    var gallery = document.getElementById('gallery'); // Get the gallery element
    var infoBox = document.getElementById('info-box'); // Get the info box element
    var infoHeading = document.getElementById('info-heading'); // Get the info heading element
    var infoText = document.getElementById('info-text'); // Get the info text element
    var infoClose = document.getElementById('info-close'); // Get the info close button element

    // Array of image filenames
    var photos = [
        'dog5.jpg', 'dog6.jpg', 'dog7.jpg', 'dog8.jpg', 'dog9.jpg',
        'dog10.jpg', 'dog11.jpg', 'dog12.jpg', 'dog13.jpg', 'dog4.jpg',
        'dog3.jpg', 'dog2.jpg'
    ];

    // Array of captions corresponding to each image
    var captions = [
        'Playful Pup', 'Happy Hound', 'Curious Canine', 'Joyful Jack Russell', 'Energetic Eskimo',
        'Brave Beagle', 'Friendly Fido', 'Loyal Labrador', 'Cuddly Collie', 'Charming Chihuahua',
        'Sweet Shih Tzu', 'Gentle Golden Retriever'
    ];

    // Array of additional information for each image
    var additionalInfo = [
        'This playful pup loves to run and fetch.', 'A happy hound always wagging its tail.', 'A curious canine exploring the world.', 'Joyful Jack Russell with boundless energy.', 'Energetic Eskimo enjoying the snow.',
        'Brave Beagle on a scent trail.', 'Friendly Fido ready to meet new friends.', 'Loyal Labrador always by your side.', 'Cuddly Collie who loves hugs.', 'Charming Chihuahua with a big personality.',
        'Sweet Shih Tzu who loves to be pampered.', 'Gentle Golden Retriever who loves everyone.'
    ];

    // Loop through the array of photos
    photos.forEach(function(photo, index) {
        // Create a new <li> element for each photo
        var li = document.createElement('li');
        li.id = 'photo' + (index + 1); // Set an id for each <li> element
        li.className = 'photo'; // Add class 'photo' to each <li> element
        
        // Create a new <img> element
        var img = document.createElement('img');
        img.src = 'images/' + photo; // Set the image source
        img.alt = 'Photo ' + (index + 1); // Set the alt text for the image
        
        // Create a new <p> element for the caption
        var caption = document.createElement('p');
        caption.textContent = captions[index]; // Set the caption text
        caption.className = 'caption'; // Add class 'caption' to the <p> element
        
        // Create a new <div> element for the description
        var description = document.createElement('div');
        description.textContent = additionalInfo[index]; // Set the description text
        description.className = 'description'; // Add class 'description' to the <div> element
        
        // Append the image, caption, and description to the <li> element
        li.appendChild(img);
        li.appendChild(caption);
        li.appendChild(description);
        
        // Append the <li> element to the gallery
        gallery.appendChild(li);

        // Add click event to the description to display the info box
        description.addEventListener('click', function() {
            infoHeading.innerHTML = captions[index]; // Set the info heading text
            infoText.innerHTML = additionalInfo[index]; // Set the info text
            infoBox.style.visibility = 'visible'; // Show the info box
        });
    });

    // Add click event to the info close button to hide the info box
    infoClose.addEventListener('click', function(e) {
        e.preventDefault();
        infoBox.style.visibility = 'hidden'; // Hide the info box on click
    });

    // Lightbox functionality using jQuery
    $('.photo img').click(function() {
        var src = $(this).attr('src'); // Get the source of the clicked image
        var caption = $(this).siblings('.caption').text(); // Get the caption of the clicked image
        $('#lightbox-image').attr('src', src); // Set the source of the lightbox image
        $('#lightbox-caption').text(caption); // Set the caption of the lightbox image
        $('#lightbox').css({
            'display': 'block', // Show the lightbox
            'transform': 'translate(-50%, -50%) scale(1)', // Center and scale the lightbox to normal size
            'transition': 'transform 0.3s ease' // Add a smooth transition for the transformation
        });
        $('#backdrop').fadeIn(); // Show the backdrop with a fade-in effect
    });

    // Close lightbox
    $('.close, #backdrop').click(function() {
        $('#lightbox').css('transform', 'translate(-50%, -50%) scale(0.9)').fadeOut(); // Scale down and hide the lightbox
        $('#backdrop').fadeOut(); // Hide the backdrop with a fade-out effect
    });
});
