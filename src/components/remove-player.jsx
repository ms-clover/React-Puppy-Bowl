removePlayerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerId = button.dataset.id;
        removePlayer(playerId)
            .then(() => {
                // Re-render the roster after removing the player
                init();
            })
            .catch((err) => {
                console.error('Error removing player:', err);
            });
    });
});
.catch ((err) {
console.error('Uh oh, trouble rendering players!', err);
})
