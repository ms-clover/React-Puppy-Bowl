<Button variant="text">Details</Button>

function Button({ onClick, Details }) {
    return (
      <button onClick={onClick}>
        {Details}
      </button>
    );
  }

array.forEach(Button => {
    const playerId = button.dataset.id;
    fetchSinglePlayer(playerId)
        .then((player) => {
            console.log(player) 
            alert(`Player Details:
            Name: ${player.name}
            Breed: ${player.breed}
            Status: ${player.status}
            Created At: ${player.createdAt}
            Updated At: ${player.updatedAt}
            Team ID: ${player.teamId}
            Cohort ID: ${player.cohortId}
            Team: ${player.team}`);
        })
        .catch((err) => {
            console.error('Error fetching player details:', err);
        });
 
}); 