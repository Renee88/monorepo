import React from 'react';
import { Card, CardContent, CardActionArea, Typography } from '@material-ui/core'

type TalkCardDestructure = {
    talk: Object,
    classes: Object,
    displayChosenTalk: Function
}

const TalkCard = ({talk, classes, displayChosenTalk}: TalkCardDestructure) => {
    return (
            <Card key={talk.youTubeID} className={classes.talkCard} onClick={displayChosenTalk(talk.youTubeID)}>
                <CardActionArea>
                    <CardContent>
                        <Typography>
                            {talk.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
};

export default TalkCard;