function calcularIMC(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100;
    const imc = (peso / (altura * altura)).toFixed(2);
    document.getElementById('resultadoIMC').textContent = `Tu IMC es ${imc}`;
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function submitContactForm(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    alert(`Gracias por contactarnos, ${nombre}. Hemos recibido tu mensaje y te responderemos pronto.`);
    document.getElementById('contact-form').reset();
}
