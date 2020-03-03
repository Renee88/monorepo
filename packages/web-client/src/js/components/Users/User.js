import React, { useEffect } from 'react';


const User = ({ chosenUser: { name, lifeMoto, age, dogs } }: Object) => {

    return (
        (name && age && lifeMoto) ?
            <div>
                <p>Hi, I am {name}</p>
                <p> I am {age} years old and my life moto is: </p>
                {lifeMoto.map((sentence, i) => <p key={i}>{sentence}</p>)}
                
                    {dogs.map((dog, i) => 
                    (<div key={i}> 
                        <p kay={i}>My favourite pet is {dog.dog_name}</p> 
                    <img key={i} src={dog.picture}></img>
                    </div>))}
                
            </div>
            : null
    );
};

export default User;