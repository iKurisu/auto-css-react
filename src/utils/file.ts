export const matchExt = (path: string): string => {
  const match = path.match(/(\.\w+){1,}/g);

  return match ? match[0] : null;
};

export const fillComponent = (filename: string): string => {
  const component = filename.split(".")[0];
  return `import React from "react";
import "./${filename}";

const ${component} = (): JSX.Element => (
  <div className="${component.toLowerCase()}"></div>
);

export default ${component};
`;
};
