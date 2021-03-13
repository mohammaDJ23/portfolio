import fs from "fs";
import path from "path";

import morgan from "morgan";

const accessLogStream = fs.createWriteStream(path.join(__dirname, "../../access.log"), {
  flags: "a"
});

export default morgan("combined", { stream: accessLogStream });
