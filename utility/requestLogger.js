const fs = require('fs').promises;

async function requestLogger(req, res, next) {
    try {
        const logMessage = `${new Date()} - ${req.method} - ${req.url} \n`;
        await fs.appendFile('RequestLogger.log', logMessage);
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = requestLogger;