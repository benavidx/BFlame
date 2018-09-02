import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} style={{"margin":"7px"}}>
      <CardMedia
        className={classes.media}
        image={props.Img}
        title={props.TitleImage}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.TittleCard}
        </Typography>
        <Typography component="p">
          {props.CardContent}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={props.Link} className='no-link'>
            <Button size="small" color="primary">
                {props.ValueButton}
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);