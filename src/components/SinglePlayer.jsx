import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchSinglePlayer } from '../API';


export default function SinglePlayer() {

    const { id } = useParams()
    const [player, setPlayer] = useState({});
    const [error, setError] = useState(null)


    useEffect(() => {
        async function getSinglePlayer() {
            const APIData = await fetchSinglePlayer(id)
            if (APIData.success) {
                setPlayer(APIData.data.player)
            } else {
                setError(APIData.error.message)
            }
        }
        getSinglePlayer();
    }, [id]);

    return (
         <>
            <h2>Puppy Details</h2>
            <div>
                {player && (
                    <div>
                        <h3>Name: {player.name}</h3>
                        <h3>Breed: {player.breed}</h3>
                        <h3>{player.status}</h3>
                        <img src={player.imageUrl} alt={player.name} />
                    </div>
                )}
            {error && <p>{error}</p>}
            </div>
        </> 
    )
}