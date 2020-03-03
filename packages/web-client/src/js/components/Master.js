import React from 'react';
import UserCard from './Users/UserCard'
import ScrollToBottom from 'react-scroll-to-bottom'
import TalkCard from './Talks/TalkCard';

type MasterProps = {
    state: {
        master: Array<Object>,
        type: string
    },
    classes: Object,
    displayChosenUser?: Function,
    displayChosenTalk?: Function,
    displayChosenRoom?: Function
}


const Master = ({ state: { master, type }, classes, displayChosenUser, displayChosenTalk, displayChosenRoom }: MasterProps) => {
    return (

        <ScrollToBottom className={classes.scroll}>
            {type === 'Users' ? master.map((user, i) => (
                <UserCard key={i} user={user} classes={classes} displayChosenUser={displayChosenUser} />
            )) : type === 'Talks' ? master.map((talk, i) => (
                        <TalkCard key={i} talk={talk} classes={classes} displayChosenTalk={displayChosenTalk} />
            ))
                    : null
            }
        </ScrollToBottom>


    );
};

export default Master;