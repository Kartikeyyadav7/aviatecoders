import fs from "fs";
import path from "path";

// postPath is useful when you want to get the path to a specific file
export const postPath = path.join(process.cwd(), "posts");
console.log(postPath);

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs.readdirSync(postPath);

console.log(postFilePaths);
