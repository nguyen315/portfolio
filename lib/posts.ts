import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const POST_DIRECTORY = path.join(process.cwd(), 'content')
export interface Post {
  id: string
  title?: string
  date?: string
  updatedDate?: string
  summary?: string
  contentHtml?: string
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(POST_DIRECTORY)

  const allPostsData: Post[] = fileNames.map(fileName => {
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

  return allPostsData.sort((a, b) => {
    if (!a.date || !b.date) {
      return 0
    }
    if (a.date < b.date) return 1
    if (a.date === b.date) return 0
    if (a.date > b.date) return -1
    return 0
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(POST_DIRECTORY)

  /*
    return an array look like this 
    [
      {
        params: {
          id: 
        }
      },
      {
        params: {
          id: 
        }
      }
    ]
  
  */

  return fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    return {
      params: {
        id
      }
    }
  })
}

export async function getPostById(id: string): Promise<Post> {
  const fullPath = path.join(POST_DIRECTORY, `${id}.md`)

  const content = fs.readFileSync(fullPath, 'utf8')
  const frontmatter = matter(content)

  const processedContent = await remark().use(html).process(frontmatter.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...frontmatter.data
  }
}
