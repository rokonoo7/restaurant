function increaseQuantity(itemId) {
    const input = document.getElementById(`quantity${itemId}`);
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(itemId) {
    const input = document.getElementById(`quantity${itemId}`);
    const currentValue = parseInt(input.value);
    if (currentValue > 0) {
        input.value = currentValue - 1;
    }
}