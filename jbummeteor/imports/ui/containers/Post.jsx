import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

export default class Post extends Component {

  render() {
    const post = this.props.post;

    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={post.post_title} />}
        >
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>

          </div>
        </CardText>
      </Card>
    )
  }
}
