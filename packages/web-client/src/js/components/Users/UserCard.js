import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

type UserCardTypes = {
    user: Object,
    classes: Object,
    displayChosenUser: Function
}
const UserCard = ({classes, user, displayChosenUser}: UserCardTypes ) => {
    return (
        <Card className={classes.card}>
            <CardActionArea onClick={displayChosenUser(user.id)}>
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