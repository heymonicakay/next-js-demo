import fs from "fs"
import path from "path"
import matter from "gray-matter"
/**
 *? fs (File System) and path (Path) are core modules of Node.js.
 ** fs - Provides an API for interacting with the file system
 * https://nodejs.org/api/fs.html
 ** path - Provides utilities for working with file and directory paths
 * https://nodejs.org/api/path.html
 *? gray-matter is an external module installed w npm.
 ** matter - Converts a string with front-matter into a 'file' object.
 * https://www.npmjs.com/package/gray-matter
 */

const postsDirectory = path.join(process.cwd(), "posts")
// path.join([...paths]) joins all given path segments
// process.cwd() returns current working directory of Node.js process

export const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "")

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
