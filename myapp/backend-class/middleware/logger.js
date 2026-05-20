const logger = (req, res, next) => {
    console.log("middleware is running");
    next();
};

module.exports = logger;