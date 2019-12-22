"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchExt = (path) => {
    const match = path.match(/(\.\w+){1,}/g);
    return match ? match[0] : null;
};
exports.fillComponent = (filename) => {
    const component = filename.split(".")[0];
    return `import React from "react";
import "./${filename}";

const ${component} = (): JSX.Element => (
  <div className="${component.toLowerCase()}"></div>
);

export default ${component};
`;
};
//# sourceMappingURL=file.js.map