import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import img from '../assets/exemple1.png';

import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles(theme => ({
    main: {
        padding: theme.spacing(3, 2),
        backgroundColor: '#f5f5f5',
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

const HomeInteractivePic: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Paella dish"
                />
            </Card>
        </div>
    );
};

export default HomeInteractivePic;