const openModalButtons = document.querySelectorAll('.open-modal');
const modal = document.getElementById('modal');
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('phone').addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{1})(\d{3})(\d{3})(\d{4})/);
    e.target.value = x ? `+7 (${x[2]}) ${x[3]}-${x[4]}` : e.target.value;
});

document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let form = e.target;
    if (form.checkValidity()) {
        document.getElementById('success-message').style.display = 'block';
        modal.style.display = 'none';
        form.reset();
    }
});
