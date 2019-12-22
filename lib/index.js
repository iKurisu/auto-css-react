#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const commander_1 = __importDefault(require("commander"));
const chokidar_1 = __importDefault(require("chokidar"));
const file_1 = require("./utils/file");
const program = new commander_1.default.Command();
program.version("0.0.1");
program
    .option("-e, --extension <ext>", "extension of the stylesheets", "css")
    .option("-f --autofill", "autofill component")
    .parse(process.argv);
const createStylesheet = (path) => {
    const d = fs_1.default.openSync(path, "a");
    console.log(`Added ${path}`);
    fs_1.default.closeSync(d);
};
const fillFile = (path, stylePath) => {
    fs_1.default.readFile(path, "utf-8", err => {
        if (err)
            console.error(err);
        const split = stylePath.split("\\");
        const fileName = split[split.length - 1];
        fs_1.default.writeFile(path, file_1.fillComponent(fileName), err => {
            if (err)
                console.error(err);
        });
    });
};
chokidar_1.default
    .watch(".", { ignoreInitial: true })
    .on("ready", () => console.log("Watching for new files..."))
    .on("all", (event, path) => {
    const ext = file_1.matchExt(path);
    if (event === "add" && (ext === ".tsx" || ext === ".jsx")) {
        const stylePath = path.replace(ext, `.${program.extension}`);
        createStylesheet(stylePath);
        if (program.autofill) {
            fillFile(path, stylePath);
        }
    }
});
//# sourceMappingURL=index.js.map