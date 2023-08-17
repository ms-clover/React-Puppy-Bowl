import { useState, useEffect } from 'react';
const [searchParam, setSearchParam] = useState("");

export default function AllPlayers() {

    const [players, setPlayers] = useState([]);
    const [searchParam, setSearchParam] = useState("");


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

    const playersToDisplay = searchParam ? players.filter((player) =>
    player.name.toLowerCase().includes(searchParam/toLowerCase())
    )
    : players;
    
    return (
        <>
        <div>
            <label>
                Search 
                <input 
                 type="text"
                 placeholder="search"
                 onChange={(e) => setSearchParam(e.target.value)}
                 />
            </label>
        </div>
    
        {playersToDisplay.map((player) => {
            return <h2 key={player.id}>{player.name}</h2>;
        })};
        </>
    )

    return (
        <>
    {players ? 
    players.map((player) => { 
        return ( <div key={player.id} className="player-card">
            <h3>{player.name}</h3>
            <h4>{player.breed}</h4>
            <h4>{player.id}</h4>
            <img src={player.imageUrl} alt="dog photo" width="75%" />
        </div> )
    }) : null}
        </>
    )
}

// console.log("Players: ", players)
