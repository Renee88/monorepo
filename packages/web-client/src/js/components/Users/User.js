import React, { useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'

const User = ({ chosenUser: { name, lifeMoto, age, dogs } }) => {

    return (
        (name && age && lifeMoto) ?
            <div>
                <p>Hi, I am {name}</p>
                <p> I am {age} years old and my life moto is: </p>
                {lifeMoto.map((sentence, i) => <p key={i}>{sentence}</p>)}
                <div>
                    <p>I am also a dog lover, cute pics eh?</p>
                    {dogs.map((dog, i) => <img key={i} src={dog.picture}></img>)}
                </div>
            </div>
            : null
    );
};

export default User;