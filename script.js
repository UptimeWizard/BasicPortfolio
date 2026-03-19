document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const feedback = document.getElementById('form-feedback');
    feedback.textContent = `Hvala, ${name}! Vaša poruka je primljena.`;
    feedback.style.color = 'green';
    this.reset();
});
