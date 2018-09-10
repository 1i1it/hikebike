const Hike = require('../../models/Hike')

module.exports = (app) => {
  app.get('/api/hikes', (req, res, next) => {
    Hike.find()
      .exec()
      .then((hikes) => res.json(hikes))
      .catch((err) => next(err))
  })

  app.post('/api/hike', function (req, res, next) {
    const { newHike } = req.body
    console.log('hikeDetails', newHike)
    const hike = new Hike(newHike)

    hike.save()
      .then(() => res.json(hike))
      .catch((err) => next(err))
  })
}
