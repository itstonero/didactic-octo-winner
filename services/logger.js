const info = (message) => {
    console.log(`${(new Date()).toLocaleString()} || INFO. ||  ${message}`); 
}
const warn = (message) => {
    console.log(`${(new Date()).toLocaleString()} || WARN. ||  ${message}`); 
}
const error = (message) => {
    console.log(`${(new Date()).toLocaleString()} || ERROR ||  ${message}`); 
}

const middleware = async(request, response, next) => {
    info(JSON.stringify({ method:request.method, url: request.url, body: request.body, query : request.query }))
    next();
}
module.exports = { info, warn, error, middleware }