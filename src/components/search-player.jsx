// add under const AllPlayers
const [searchParam, setSearchParam] = useState("");
//console.log(searchParam);



// insert after useEffect() in all-players.jsx 
const playersToDisplay = searchParam ? players.filter(player => 
    player.name.toLowerCase().includes(searchParam))
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

