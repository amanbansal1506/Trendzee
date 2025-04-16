document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.accessory-item button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.parentElement.querySelector('h3').textContent;
            alert(`Added "${itemName}" to cart!`);
        });
    });
});
