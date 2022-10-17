const generateMessage = (username,text)=>{
    return {
        username: username,
        text:text,
        createdAt: new Date().getTime()
    }
}

const generateLocation= (username,locationURL)=>{
    return {
        username: username,
        locationURL: locationURL,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocation
}