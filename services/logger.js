const info = (message) => {
    console.log(`${(new Date()).toLocaleString()} || INFO. ||  ${message}`); 
}
const warn = (message) => {
    console.log(`${(new Date()).toLocaleString()} || WARN. ||  ${message}`); 
}
const error = (message) => {
    console.log(`${(new Date()).toLocaleString()} || ERROR ||  ${message}`); 
}

module.exports = { info, warn, error }