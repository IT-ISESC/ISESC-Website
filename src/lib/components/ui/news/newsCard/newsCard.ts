import type { EventDates } from "../../calendar"
import type { TagProps, TagLabel } from "../../tag"

export type News = {
  id: number
  topic: string
  tags: Array<{ label: TagLabel, props?: TagProps }>
  dates: EventDates[]
  imgSrc: string
  newsDescription: string
}
