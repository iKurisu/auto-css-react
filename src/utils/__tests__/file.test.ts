import { matchName, matchExt } from "../file";

describe("file utils", (): void => {
  it("'matchName' matches the file name correctly", (): void => {
    expect(matchName("Menu.tsx")).toBe("Menu");
    expect(matchName("name.ext")).toBe("name");
    expect(matchName("file.test.ts")).toBe("file");
  });

  it("'ext' matches the extension correctly", (): void => {
    expect(matchExt("Menu.tsx")).toBe(".tsx");
    expect(matchExt("Menu.test.tsx")).toBe(".test.tsx");
  });
});
