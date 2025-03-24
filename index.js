// Filterable portfolio gallery
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Modal for project details
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const modal = document.querySelector('.modal');
        const modalContent = modal.querySelector('.modal-content');
        modalContent.innerHTML = this.innerHTML;
        modal.style.display = 'block';
    });
});

document.querySelector('.modal-close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (email !== 'feridmusefa5075@gmail.com') {
        alert('Please use the email: feridmusefa5075@gmail.com');
        return;
    }
    
    // Send the form data to your email
    fetch('https://api.emailservice.com/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            to: 'feridmusefa5075@gmail.com',
            subject: 'New contact form submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Email sent successfully:', data);
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('Error sending email:', error);
        alert('There was an error sending your message. Please try again later.');
    });
    
    // Clear the form
    document.getElementById('contactForm').reset();
}
