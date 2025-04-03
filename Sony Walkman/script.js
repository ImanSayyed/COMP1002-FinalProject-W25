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

document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById("buyModal");
    const buyBtn = document.querySelector(".product button");
    const closeBtn = document.querySelector(".close");
    const form = document.getElementById("orderForm");
  
    // Open modal when "Buy Now" is clicked
    buyBtn.addEventListener('click', function() {
      modal.style.display = "block";
    });
  
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert("Order submitted! Thank you for your purchase!");
      modal.style.display = "none";
      form.reset();
    });
  });

  // Product Price Calculation
  // This script calculates the total price based on the selected quantity
  document.addEventListener('DOMContentLoaded', function() {
    const quantitySelect = document.getElementById('quantity');
    const totalPriceSpan = document.getElementById('totalPrice');
    const shippingCost = 10.99;
    const unitPrice = 129.99;
    // The function to update the total price based on the selected quantity
    function updatePrice() {
        const selectedQuantity = parseInt(quantitySelect.value);
        const totalCost = (unitPrice * selectedQuantity) + shippingCost;
        totalPriceSpan.textContent = `$${totalCost.toFixed(2)}`;
    }
    // Add event listener to the quantity select element, this will trigger the updatePrice function whenever the quantity is changed
    if (quantitySelect) {
        quantitySelect.addEventListener('change', updatePrice);
        updatePrice(); // Set initial price on load
    }
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