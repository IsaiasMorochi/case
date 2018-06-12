import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  card: {
    maxWidth: 400,
    marginBottom: '2em'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const DiagramCard = (props)=>{
    const { classes, name, date, image, description } = props;
    return (
      <div className="col-lg-4 col-md-4 col-sm-6">
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={name}
            subheader={date}
          />
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <Button variant="outlined" color="secondary">
                Compartir
                <ShareIcon />
              </Button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <Button variant="outlined" color="secondary" >
                  Editar
                <ShareIcon  />
              </Button>
            </div>
          </div>
          </CardActions>
        </Card>
      </div>
    );
  }


DiagramCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiagramCard);
