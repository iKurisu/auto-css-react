#!/usr/bin/env node
import fs from "fs";
import commander from "commander";
import chokidar from "chokidar";
import { matchExt, fillComponent } from "./utils/file";

const program = new commander.Command();
program.version("0.0.1");

program
  .option("-e, --extension <ext>", "extension of the stylesheets", "css")
  .option("-f --autofill", "autofill component")
  .parse(process.argv);

const createStylesheet = (path: string): void => {
  const d = fs.openSync(path, "a");
  console.log(`Added ${path}`);
  fs.closeSync(d);
};

const fillFile = (path: string, stylePath: string): void => {
  fs.readFile(path, "utf-8", err => {
    if (err) console.error(err);

    const split = stylePath.split("\\");
    const fileName = split[split.length - 1];

    fs.writeFile(path, fillComponent(fileName), err => {
      if (err) console.error(err);
    });
  });
};

chokidar
  .watch(".", { ignoreInitial: true })
  .on("ready", () => console.log("Watching for new files..."))
  .on("all", (event, path) => {
    const ext = matchExt(path);

    if (event === "add" && (ext === ".tsx" || ext === ".jsx")) {
      const stylePath = path.replace(ext, `.${program.extension}`);

      createStylesheet(stylePath);

      if (program.autofill) {
        fillFile(path, stylePath);
      }
    }
  });
