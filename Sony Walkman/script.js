// header-footer.js
document.addEventListener("DOMContentLoaded", function () {
    // Create and insert header
    const header = document.createElement("header");
    header.id = "global-header";
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
    document.body.insertBefore(header, document.body.firstChild);

    // Create and insert footer
    const footer = document.createElement("footer");
    footer.id = "global-footer";
    footer.innerHTML = `
        <p>&copy; 1981 Sony Corporation - Experience Music Like Never Before</p>
    `;
    document.body.appendChild(footer);
});

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
;