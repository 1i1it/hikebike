import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Delete } from '@material-ui/icons'

const Hike = (props) => {
  const { name, description, admin } = props.hike

  return (
    <div>
      { props.hike ? (
        <Card >
          <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
            image={'https://www.google.co.il/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiKs9LgtrDdAhWH_qQKHc34CLUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.kivohotel.com%2Fhike-bike-run%2F&psig=AOvVaw2Bp7Z2B6TJUuvQTYn0xN2w&ust=1536668591890773'}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              {admin}
            </Typography>
            <Typography component='p'>
              {description}
            </Typography>

          </CardContent>
          <CardActions>
            <Button size='small' color='primary' href={'https://google.com'} target='_blank'>
              Go To Hike
            </Button>
          </CardActions>
        </Card>
      ) : null }
    </div>
  )
}
export default Hike
