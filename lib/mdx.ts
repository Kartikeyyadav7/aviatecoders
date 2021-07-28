import fs from "fs";
import path from "path";

// postPath is useful when you want to get the path to a specific file
export const postPath = path.join(process.cwd(), "posts");
// console.log(postPath);

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs.readdirSync(postPath);

// console.log(postFilePaths);

export const getLatestPosts = postFilePaths.slice(0, 6);

export function getHeadings(source: string) {
	const headingLines = source.split("\n").filter((line: any) => {
		return line.match(/^###\s/);
	});
	// console.log(headingLines);

	return headingLines.map((raw: any) => {
		const text = raw.replace(/^###\s/, "");
		// console.log(text);
		const level = raw.slice(0, 3) === "###" ? 3 : 2;
		// console.log(level);
		return {
			text,
			level,
		};
	});
}

// console.log(getLatestPosts);
