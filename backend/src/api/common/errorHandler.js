const _ = require('lodash')


module.exports = (req, res, next ) => {
    console.log("res ---> ". res)
    const bunble =  res.locals.bunble || {}

    if(bunble.errors){
        const errors = parseErrors(bunble.errors)
        res.status(500).json({errors});
    }else{
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}