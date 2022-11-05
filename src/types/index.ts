export type TodoListType = {
  id: number
  title: string
  description: string
  done: boolean
}

export type HandleDeleteBtnType = (id: number) => void

export type TodoReducerActionType =
  | {
      type: 'CREATE_TODO'
      payload: TodoListType
    }
  | {
      type: 'DELETE_TODO'
      payload: number
    }

export type TProduct = {
  id: string
  img: string
  name: string
  stock: number
  price: number
  shipping: number
  content: string
}
