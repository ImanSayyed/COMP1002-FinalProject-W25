// Global Header and Footer
document.addEventListener('DOMContentLoaded', function () {
    // Global Header
    const header = document.getElementById('global-header');
    header.innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="product.html">Product</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;

    // Global Footer
    const footer = document.getElementById('global-footer');
    footer.innerHTML = `
        <p>&copy; 2025 Retro Walkman. All Rights Reserved.</p>
    `;

    // Form Validation for Contact Page
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            let isValid = true;
            let errorMessages = [];

            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const messageField = document.getElementById('message');

            // Validate name
            if (!nameField.value) {
                isValid = false;
                errorMessages.push("Please enter your name.");
            }

            // Validate email
            if (!emailField.value) {
                isValid = false;
                errorMessages.push("Please enter your email.");
            }

            // Validate message
            if (!messageField.value) {
                isValid = false;
                errorMessages.push("Please enter a message.");
            }

            // If form is not valid, show errors and prevent submission
            if (!isValid) {
                event.preventDefault();
                alert(errorMessages.join('\n')); // Display all error messages at once
            }
        });
    }
});
