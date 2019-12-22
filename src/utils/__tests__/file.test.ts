import { matchExt } from "../file";

describe("file utils", (): void => {
  it("'matchExt' matches the extension correctly", (): void => {
    expect(matchExt("Menu.tsx")).toBe(".tsx");
    expect(matchExt("Menu.test.tsx")).toBe(".test.tsx");
    expect(matchExt("src/somefolder/Hero.jsx")).toBe(".jsx");
  });
});
