import type { EventDates } from "../../calendar"
import type { TagProps } from "../../tag"

export type News = {
  id: number
  topic: string
  tags: Array<{ label: string, props?: TagProps }>
  dates: EventDates[]
  imgSrc: string
  newsDescription: string
}
