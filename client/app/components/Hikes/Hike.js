import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import {
  IconButton
} from '@material-ui/core'

import img from '../../../public/assets/img/bike.png'

const Hike = (props) => {
  const { name, description, admin, _id } = props.hike
  const HikeDetailsLink = props => <Link to={`/hike/${_id}`} {...props} />

  return (
    <div>
      { props.hike ? (
        <Card style={{ position: 'relative' }}>
          <CardMedia style={{ height: 0, paddingTop: '56.25%', marginTop: '30' }}
            image={img}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              {description || 'Awesome hike'}
            </Typography>
            <Typography component='p'>
              <span style={{ fontWeight: 'bold' }}> Hike admin:</span>  {admin}
            </Typography>

            <Typography style={{ paddingTop: 10 }} component='p'>
              {description}
            </Typography>

          </CardContent>
          <CardActions>
            <Button component={HikeDetailsLink} color='primary'>
             Details
            </Button>
            <IconButton style={{ position: 'absolute', right: 10 }} color='primary' onClick={() => props.handleDelete(_id)}>
              <Delete />
            </IconButton>
          </CardActions>
        </Card>
      ) : null }
    </div>
  )
}
export default Hike
