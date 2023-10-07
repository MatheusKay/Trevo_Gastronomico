import { ReactNode } from 'react'
import { TagName } from './style'

export type Props = {
  children: ReactNode
  tag: 'normal' | 'bold'
}

const Tag = ({ children, tag = 'normal' }: Props) => (
  <TagName tag={tag}>{children}</TagName>
)

export default Tag
