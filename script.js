document.addEventListener('DOMContentLoaded', function() {
    fetch('https://codepen.io/eclairereese/pen/OXRjWV.js')
        .then(response => response.json())
        .then(data => {
            const candyListing = document.getElementById('candyListing');
            data.forEach(candy => {
                const candyDiv = document.createElement('div');
                candyDiv.className = 'candy';
                if (candy.quantity <= 0) {
                    candyDiv.className += ' unavailable';
                }
                candyDiv.innerHTML = `
                    <h2>${candy.name}</h2>
                    <p>Price: $${candy.price}</p>
                    <p>Quantity: ${candy.quantity}</p>
                `;
                candyListing.appendChild(candyDiv);
            });
        });
});