import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POST_DIRECTORY = path.join(process.cwd(), 'content')

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(POST_DIRECTORY)

  const allPostsData = fileNames.map(fileName => {
    // remove the .md path of fileName to get id of a post
    const id = fileName.replace(/\.md$/, '')

    const filePath = path.join(POST_DIRECTORY, fileName)
    const fileData = fs.readFileSync(filePath, 'utf8')

    const frontmatter = matter(fileData)

    return {
      id,
      ...frontmatter.data
    }
  })

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1
    if (a === b) return 0
    if (a > b) return -1
  })
}
