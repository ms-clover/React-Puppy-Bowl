import React, {useState} from 'react';

const NewPlayerForm = () => {
    const [playername, setPlayername] = useState("");
    const [breed, setBreed] = useState("");
    const [error, setError] = useState(null);
    
    const [playernameError, setPlayernameError] = useState(null);
    const [breedError, setBreedError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        if (playername.length < 3) {
            setPlayername("Puppy name must be at least 3 characters in length");
            return;
          } else {
            setPlayernameError(null);
          }
          
          
          if (breed.length < 3) {
            setBreed("Breed needs to be more than 3 characters");
            return;
          } else {
            setBreedError(null);
          }
          
    
        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2305-FTB-ET-WEB-PT/players',
            { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  Playername: "some-name", 
                  breed: "some-breed" 
                }) 
              })
            const result = await response.json();
            setToken(result.token);
            console.log(result);   
        } catch (error) {
          setError(error.message);
        }
      }


    return ( 
       <>
       <h2 style={{fontSize:"25px", fontFamily:"Avenir"}}>Create New Player Now!</h2> 
       {error && <p>{error}</p>}
        <form method='POST' 
        onSubmit={handleSubmit} 
        onClick={() => {
            setPlayername(playername)
        }}>
      <label >
        Player Name:{""} 
        <input 
        placeholder='Name'
        value = {playername}
         onChange={(e)=> 
        setPlayername(e.target.value)} />
      </label>
          
      
        {playernameError && <p style={{ color: "red"}}>{playernameError}</p>}  
      
      <label >
        Breed:{""}
         <input 
         placeholder='Breed'
         type='Breed'
         value={breed}
         onChange={(e)=> 
         setBreed(e.target.value)}/>
      </label>
    
        
         {breedError && <p style={{ color: "red"}}>{breedError}</p>}

      <button type='Submit' style=
      {{width: "80px", height: "37px", padding: "10px", 
      fontSize:"15px"}}
      >Create Player</button>
    </form>
    <p style={{fontSize:"50px", fontFamily:"Avenir"}}>Welcome! {playername}</p> 
    </>
 );
    }

    export default NewPlayerForm;