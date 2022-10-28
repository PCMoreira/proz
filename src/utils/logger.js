const Sentry = require("@sentry/node");

const LOGGER_KEY_SENTRY = process.env.LOGGER_KEY_SENTRY;

Sentry.init({
    dsn: LOGGER_KEY_SENTRY,
    tracesSampleRate: 1.0,
});

function sendLog(error) {
    Sentry.captureException(error);
}

module.exports = { sendLog };
