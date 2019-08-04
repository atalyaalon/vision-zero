import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";


const HomeInfo : React.FC = ()=> {
    const useStyles = makeStyles(
        createStyles({
            card: {
                minWidth: 275,
                maxWidth: 600,
                padding: 20,
                marginTop: 75,
                margin:'auto',

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
        <Card className={classes.card} >
            <CardContent >
                <Typography variant="h5" component="h2">
                    <h2>חזון אפס </h2>     </Typography>
                <Typography variant="body2" component="p">
                    <p> החל בהולנד ושוודיה לפני 20 שנה{bull} <br />
                        בשנים האחרונות מאומץ על ידי יותר ויותר ערים ומדינות{bull} <br />
                       הורדת כמות ההרוגים והפצועים הקשים לאפס{bull} <br />
                        ניידות היא זכות אדם בסיסית – הזכות לתנועה ללא איום במוות {bull}</p>

                    <h3> עקרונות יסוד</h3>
                    מניעת תאונות על ידי הנדסה ועיצוב – והרבה פחות על ידי אכיפה וחינוך{bull}<br />
                    מערכת שמניחה שאנשים לא עושים טעויות היא לא מערכת בטוחה{bull}<br />
                </Typography>
            </CardContent>
            <CardActions>
                <Link to="/Concepts">
                <Button size="small">...קרא עוד</Button>
                </Link>
            </CardActions>
        </Card>
    )
};

export default HomeInfo