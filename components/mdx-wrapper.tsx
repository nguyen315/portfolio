import * as React from 'react'

interface MDXWrapperProps {
  props?: React.ComponentProps<any>
  children: React.ReactElement
}

const MDXWrapper = (props: MDXWrapperProps) => {
  return <div className="mdx-prose" {...props} />
}

export default MDXWrapper
