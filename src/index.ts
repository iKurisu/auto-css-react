import fs from "fs";

console.log(
  __dirname
    .split("\\")
    .slice(0, 5)
    .concat("src")
    .join("/")
);

// REMOVE
const path = "C:/Users/Usuario/Projects/auto-css-react/src";

fs.watch(
  __dirname
    .split("\\")
    .slice(0, 5)
    .concat("src")
    .join("/"),
  (eventType, filename): void => {
    if (eventType === "rename") {
      fs.openSync(path + "/A.scss", "w");
      console.log(eventType, filename);
    }
  }
);
