// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Select the <ul> element with the id 'gallery'
    const gallery = document.getElementById('gallery');
    
    // Create an array with the filenames of the images
    const photos = [
        'dog5.jpg', 'dog6.jpg', 'dog7.jpg', 'dog8.jpg', 'dog9.jpg',
        'dog10.jpg', 'dog11.jpg', 'dog12.jpg', 'dog13.jpg', 'dog4.jpg'
    ];

    // Loop through the array of photos
    photos.forEach(photo => {
        // Create a new <li> element
        const li = document.createElement('li');
        // Set the class of the <li> element to 'photo'
        li.className = 'photo';
        
        // Create a new <img> element
        const img = document.createElement('img');
        // Set the src attribute of the <img> element to the path of the photo
        img.src = `images/${photo}`;
        // Set the alt attribute of the <img> element for accessibility
        img.alt = `Photo ${photo}`;
        
        // Append the <img> element to the <li> element
        li.appendChild(img);
        // Append the <li> element to the <ul> element with id 'gallery'
        gallery.appendChild(li);
    });
});
