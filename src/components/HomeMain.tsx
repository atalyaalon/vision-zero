import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  background: {
    backgroundColor: 'black',
    margin: 0,
    paddingBottom: "100px"
  },
  h1: {
    margin: 0,
    padding: '80px 0 20px',
    color: "white",
    fontSize: "100px",
  }
});

const HomeMain: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h1 className={classes.h1}>Vision Zero</h1>
      <iframe title="vision" width="560" height="315" src="https://www.youtube.com/embed/EkcAZQOzJV0?autoplay=1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
      </iframe>
    </div>
  )
};

export default HomeMain
