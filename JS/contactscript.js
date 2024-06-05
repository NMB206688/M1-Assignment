// Wait for the entire DOM content to be loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the dropdown menu by its ID
    var contactMethodSelect = document.getElementById('contact-method');
    // Select the email input box container by its ID
    var emailBox = document.getElementById('email-box');
    // Select the phone input box container by its ID
    var phoneBox = document.getElementById('phone-box');

    // Initially hide both input boxes
    emailBox.style.display = 'none'; // Hide the email input box
    phoneBox.style.display = 'none'; // Hide the phone input box

    // Add an event listener to the dropdown menu to detect changes
    contactMethodSelect.addEventListener('change', function() {
        // Hide both input boxes regardless of the selected option
        emailBox.style.display = 'none'; // Hide the email input box
        phoneBox.style.display = 'none'; // Hide the phone input box

        // Show the relevant input box based on the selected option
        if (contactMethodSelect.value === 'email') {
            // If the selected option is 'email', display the email input box
            emailBox.style.display = 'block';
        } else if (contactMethodSelect.value === 'phone') {
            // If the selected option is 'phone', display the phone input box
            phoneBox.style.display = 'block';
        }
    });
});
