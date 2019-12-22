export const matchName = (file: string): string => file.match(/\w+(?=\.)/g)[0];
export const matchExt = (file: string): string => file.match(/(\.\w+){1,}/g)[0];
