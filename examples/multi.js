import Logger from "../src/esm/logger-js.js";

const logger_1 = new Logger().Logger("worker 1");
const logger_2 = new Logger().Logger("worker 2 (error prone)", "", "error");

logger_1("Sleeping...");
logger_1("Doing important work...");
logger_2("Fixing up the backend...");
logger_2("Messed up something... fatal error!!11");
logger_1("Fixing backend...");