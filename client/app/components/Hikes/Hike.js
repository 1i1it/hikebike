import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Delete } from '@material-ui/icons'
import {
  IconButton
} from '@material-ui/core'

import img from '../../../public/assets/img/bike.png'

const Hike = (props) => {
  const { name, description, admin, handleDelete } = props.hike
  console.log('props.hike', props.hike)

  return (
    <div>
      { props.hike ? (
        <Card >
          <CardMedia style={{ height: 0, paddingTop: '56.25%', marginTop: '30' }}
            image={img}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              {description || 'Awesome hike'}
            </Typography>
            <Typography component='p'>
              Hike admin {admin}
            </Typography>

          </CardContent>
          <CardActions>
            <Button size='small' color='primary' href={'https://google.com'} target='_blank'>
              Go To Hike
            </Button>

            <IconButton color='primary' onClick={() => handleDelete(name)}>
              <Delete />
            </IconButton>
          </CardActions>
        </Card>
      ) : null }
    </div>
  )
}
export default Hike
