"use server";
export const fileServer = (): string => {
  return process.env.FILE_SERVER || "http://localhost:9901";
};
