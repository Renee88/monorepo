import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@material-ui/core'
import ScrollToBottom from 'react-scroll-to-bottom'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'


const UserCard = ({ user, classes, displayChosenUser }) => {
    return (
        <Card className={classes.card} onClick={displayChosenUser(user.email)}>
            <CardActionArea>
                <CardContent className={classes.root}>
                    <div className={classes.userDetails}>
                        <CardMedia
                            className={classes.cover}
                            component="img"
                            alt={user.name}
                            image={`${user.picture}`}
                        />
                        <Typography className={classes.name} display='inline'>
                            {user.name}
                        </Typography>
                    </div>
                    <Typography><FiberManualRecordIcon className={user.online ? classes.online : classes.offline} /></Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserCard;