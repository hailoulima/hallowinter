const countdownDate = new Date("Nov 07, 2024 13:59:59").getTime();


const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Tempo esgotado!";
    }
}, 1000);
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const age = parseInt(document.getElementById('age').value);
    const message = document.getElementById('message');

    if (age < 18) {
        message.textContent = "Você deve ter 18 anos ou mais para se inscrever.";
    } else {
        message.textContent = "Formulário enviado com sucesso!";
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor, se necessário.
    }
});