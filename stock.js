document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const restaurant = document.getElementById('restaurant').value;
    const fish = document.getElementById('fish').value;
    const fries = document.getElementById('fries').value;
    const coke = document.getElementById('coke').value;

    const order = {
        restaurant,
        fish: parseInt(fish),
        fries: parseInt(fries),
        coke: parseInt(coke)
    };

    fetch('/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
});
