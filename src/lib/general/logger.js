import { Logger } from "tslog";

let logger = new Logger({
  prettyLogTemplate:
    "{{dateIsoStr}} {{logLevelName}} {{nameWithDelimiterSuffix}}",
});

export default logger;
