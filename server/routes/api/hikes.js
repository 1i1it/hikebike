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

  app.delete('/api/hike/:id', function (req, res, next) {
    Hike.findOneAndDelete({ _id: req.params.id })
      .exec()
      .then(
        Hike.find()
          .exec()
          .then((hikes) => res.json(hikes))
      )
      .catch((err) => next(err))
  })

  app.get('/api/hikes/:searchTerm', (req, res, next) => {
    console.log("req.searchTerm", req.params)
    Hike.find({$text: {$search: req.params.searchTerm}})
      .exec()
      .then((hikes) => res.json(hikes))
      .catch((err) => next(err))
  })


  app.get('/api/hike/:id', function (req, res, next) {
    Hike.findById({ _id: req.params.id })
      .exec()
      .then((hikes) => res.json(hikes))
      .catch((err) => next(err))
  })

}
