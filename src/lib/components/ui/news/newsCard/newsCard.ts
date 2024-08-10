import type { TagProps } from "../../tag"

export type News = {
  id: number
  topic: string
  tags: Array<{ label: string, props?: TagProps }>
  dates: string
  imgSrc: string
  newsDescription: string
}
