import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Concepts : React.FC = ()=> {
    const useStyles = makeStyles(
    createStyles({
        card: {
            minWidth: 275,
            marginTop: 150,
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
    }),
);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    בטיחות מערכתית
                </Typography>
                <Typography variant="body2" component="p">
                    <p>שתי תכונות היסודיות של בני אדם{bull}
                       <br />הם פגיעים – יש גבול לכמות הנזק שהגוף יכול לספוג–הם מבצעים טעויות {bull} <br />
                        לא ניתן לשרש תכונות אלה באמצעות חינוך {bull}<br />
                        <Typography variant="h5" component="h2">
                         עקרונות מנחים
                        </Typography>
                        <Typography variant="body2" component="p">
                            שליטה במהירות והפרדה {bull}<br />
                         הרמוניה תפקודית{bull}<br />
                         פשטות וחיזוי קל{bull}<br />
                         סלחנות והטלת מגבלות{bull}<br />
                        מודעות של המדינה{bull}<br />
                        </Typography>

                        {/*שליטה במהירות*/}
                        {/*מהירות פגיעה בהולך רגל -  בבלימה מיטבית*/}
                        {/*קיימת מהירות בטוחה מרבית לכל סוג של קונפליקט – לפי יכולת האדם לספוג מכה*/}
                    </p>
                </Typography>
            </CardContent>
        </Card>
    )
};

export default Concepts