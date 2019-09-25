import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";


const HomeInfo: React.FC = () => {
  const useStyles = makeStyles(
    createStyles({
      card: {
        minWidth: 275,
        maxWidth: 600,
        padding: 20,
        marginTop: 75,
        margin: 'auto',
        '& p': {
          textAlign: 'right'
        }
        
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
        <Typography variant="h3" component="h2">
          חזון אפס הרוגים
        </Typography>
        <Typography variant="body1" component="div">
          <p>
            הו חזון להקטנה משמעותית של מספר ההרוגים והפצועים הקשים בתאונות הדרכים. חזון אפס מבוסס על העיקרון של בטיחות
            מערכתית (Systematic Safety) - תכנון ערים, עיצוב רחובות וכבישים כדי למנוע הזדמנויות להתרחשות של תאונות דרכים
            קשות וקטלניות. בניגוד לגישה המסורתית למניעת תאונות, בטיחות מערכתית לא מנסה לגרום לכך שאנשים ינהגו או ילכו
            בצורה מושלמת (על ידי הסברה או חקיקה), אלא מכיר בכך שאנשים הם יצורים לא מושלמים שתמיד יעשו טעויות. חזון אפס קיים מאז 1997 בהולנד ושוודיה
            ובשנים האחרונות הוא מאומץ על ידי מדינות וערים נוספות, לרבות על ידי ארגון ה-OECD, קנדה, בריטניה, אוסטרליה,
            ומספר ערים גדולות בארצות הברית.
          </p>
          <h3> עקרונות יסוד</h3>
          <p>
            מניעת תאונות על ידי הנדסה ועיצוב – והרבה פחות על ידי אכיפה וחינוך{bull}<br/>
            מערכת שמניחה שאנשים לא עושים טעויות היא לא מערכת בטוחה{bull}<br/>
          </p>
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
