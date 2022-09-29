const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://usuarioCoderhouse:coderhouse@nodeexpressproject.r8xsu.mongodb.net/passport?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose;