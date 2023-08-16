import { useState, useEffect } from 'react';

export default function AllPlayers() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                const response = await fetch(
                    "https://fsa-puppy-bowl.herokuapp.com/api/2305-FTB-ET-WEB-PT/players"
                );
                const result = await response.json();
                setPlayers(result.data.players);
                
            } catch (error) { 
                console.error(error);
            }
        }
        fetchAllPlayers();
    }, [])

    // console.log("Players: ", players.data)


// console.log(playersToRender)
    return (
        <>
    {players ? 
    players.map((player) => { 
        return ( <div key={player.id}>
            <h1>{player.name}</h1>
            <h1>{player.breed}</h1>
            <h1>{player.id}</h1>
        </div> )
    }) : null}
        </>
    )
}

// console.log("Players: ", players)
