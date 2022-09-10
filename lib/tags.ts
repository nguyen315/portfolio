export type TagName = 'grpc' | 'git'

export interface Tag {
  name: TagName
  color?: string
}

export const tagColorMapping = {
  grpc: '#F7A76C',
  git: '#FF4A4A',
  setup: '#90B77D'
}

export const getTagColor = (tagName: TagName): string => {
  return tagColorMapping[tagName]
}
