const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  facebookProvider: {
    type: {
      id: String,
      token: String
    },
    select: false
  },
  fullName:{
  type: String,
    required: true,
    trim: true
},
})

UserSchema.statics.upsertFbUser = function (accessToken, refreshToken, profile, cb) {
  var that = this
  return this.findOne({
    'facebookProvider.id': profile.id
  }, function (err, user) {
    // no user was found, lets create a new one
    if (!user) {
      var newUser = new that({
        fullName: profile.displayName,
        email: profile.emails[0].value,
        facebookProvider: {
          id: profile.id,
          token: accessToken
        }
      })

      newUser.save(function (error, savedUser) {
        if (error) {
          console.log(error)
        }
        return cb(error, savedUser)
      })
    } else {
      return cb(err, user)
    }
  })
}

module.exports = mongoose.model('User', UserSchema)
