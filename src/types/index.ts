export type todoListType = {
  id: number
  title: string
  description: string
  done: boolean
}

export type handleDeleteBtnType = (id: number) => void
