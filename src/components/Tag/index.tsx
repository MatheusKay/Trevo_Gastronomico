import { TagName } from './style'

export type Props = {
  children: string | number
  tag: 'normal' | 'bold'
}

const Tag = ({ children, tag = 'normal' }: Props) => (
  <TagName tag={tag}>{children}</TagName>
)

export default Tag
