import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PeopleIcon from '@material-ui/icons/People';
import './NavDrawer.css'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const NavDrawer = ({ open, setOpen }: Object) => {
  const classes = useStyles();

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Users', 'Talks', 'Rooms'].map((text, index) => (
          <ListItem key={text} onClick={() => { window.location.replace(`/${text}`) }}>
            <ListItemIcon>{text === 'Users' ? <AccountCircleIcon /> :
              text === 'Talks' ? <QuestionAnswerIcon /> :
                <PeopleIcon />}</ListItemIcon>
            <ListItemText primary={text} className='pages-names' />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (

    <Drawer open={open} onClose={toggleDrawer(false)} >
      {sideList('left')}
    </Drawer>
  );
};

export default NavDrawer;