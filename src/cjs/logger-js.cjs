/* @architelos/node-log-js */

"use strict";

class Logger {
    constructor() {
        this._envRegexes = process.env.LOGGER_ALLOW
            ? process.env.LOGGER_ALLOW
            : "";
        this._ansiEnd = "\u001b[0m";
    }

    _MatchesRegex() {
        if (!this._envRegexes)
            return true;

        const regexArray = this._envRegexes.split(",");

        for (const regex of regexArray) {
            if (this._logger.match(regex))
                return true;
        }

        return false;
    }

    _Log(message) {
        this._consoleFunction(`${this._colorAnsi}${this._logger}${this._ansiEnd} ${message}`);
    }

    /**
     * Create a new logger.
     * 
     * @returns A decorated console function.
     */
    Logger(loggerName, loggerColor, loggerLevel) {
        if (!loggerName || typeof loggerName != "string")
            loggerName = "logger";

        if (!loggerColor || typeof loggerColor != "string")
            loggerColor = "37";

        if (!loggerLevel || typeof loggerLevel != "string")
            loggerLevel = "log";

        this._logger = loggerName;
        this._consoleFunction = console[loggerLevel];

        if (!this._consoleFunction)
            throw new Error(`Invalid console level: ${loggerLevel}`);

        this._colorAnsi = `\u001b[0;${loggerColor}m`;

        const matchesRegexes = this._MatchesRegex();

        if (!matchesRegexes)
            return () => { };

        return this._Log.bind(this);
    }
}

module.exports = Logger;