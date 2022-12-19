## node-log-js

<p align="center">
        <img src="https://i.imgur.com/1bmbtmz.png" /></a><br>
</p>

<p align="center">Tiny logging module. Inspired by npm/debug.</p>

### Contents
  - [Installing](#installing)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)


### Installing
Using `npm`:
```bash
$ npm install @architelos/node-log-js
```

### Usage
- Import `node-log-js`:
```js
import Logger from "@architelos/node-log-js";

// or

const Logger = require("@architelos/node-log-js");
```

- Create a new `Logger` instance:
```js
let logger = new Logger();
```

- Create a new logger:
```js
let logger = logger.Logger("worker", "37", "error");
```

Available parameters:
| Name        | Type   | Description                                                               | Default  |
|-------------|--------|---------------------------------------------------------------------------|----------|
| `loggerName`  | `string` | Name of the logger                                                        | "logger" |
| `loggerColor` | `string` | ANSI color code of<br>the log message                                     | "37"     |
| `loggerLevel` | `string` | Name of the `console`<br>function. For example,<br>`log`, `error`, `warn` | "log"    |

- Use the logger:
```js
logger("Hello! I am some text!");
```

##### Additionally, the environment variable `LOGGER_ALLOW` can be set to a regex (or multiple regexes seperated by a `,`) to allow/disallow loggers from logging.
###### On Windows (cmd):
```bash
$ set LOGGER_ALLOW=""
```

###### On Windows (powershell):
```bash
$ $env:LOGGER_ALLOW=""
```

###### On Linux (bash):
```bash
export LOGGER_ALLOW=""
```

## Contributing
Open a pull request, or submit a new issue.

## License
See `license`.