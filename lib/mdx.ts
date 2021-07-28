import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// postPath is useful when you want to get the path to a specific file
export const postPath = path.join(process.cwd(), "posts");
// console.log(postPath);

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs.readdirSync(postPath);

// console.log(postFilePaths);

export const getPosts = () => {
	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(postPath, filePath));
		const { content, data } = matter(source);
		const stats = readingTime(content);
		const timeForReading = stats.text;
		return {
			content,
			data,
			filePath,
			timeForReading,
		};
	});
	return posts;
};

export const paths = postFilePaths
	// Remove file extensions for page paths
	.map((path) => path.replace(/\.mdx?$/, ""))
	// Map the path into the static paths object required by Next.js
	.map((slug) => ({ params: { slug } }));

export const getLatestPosts = postFilePaths.slice(0, 6);

export function getHeadings(source: string) {
	const headingLines = source.split("\n").filter((line: any) => {
		return line.match(/^##\s/);
	});
	// console.log(headingLines);

	return headingLines.map((raw: any) => {
		const text = raw.replace(/^##\s/, "");
		// console.log(text);
		const level = raw.slice(0, 3) === "##" ? 3 : 2;
		// console.log(level);
		return {
			text,
			level,
		};
	});
}
