import React from 'react';

type ChosenRoomDestructure={
    chosenRoom:{
    name: string,
     id: number, 
     numOfPeople: number
    }
}

const Room = ({chosenRoom:{name}}: ChosenRoomDestructure) => {
    return (
        <div>
            {name}
        </div>
    );
};

export default Room;