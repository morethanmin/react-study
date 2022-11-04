import IndexPage from '../pages'
import ProductsPage from '../pages/products'
import IdPage from '../pages/products/[id]'
import TodolistPage from '../pages/todolist'

/**
 * useState, useReducer, useContext, rocil, reactQuery, suspense, errorboundary
 */
export const routes = [
  // todo: 리듀서로 crud
  {
    path: '/',
    element: <IndexPage />,
  },
  // todo: useState로 상태관리
  {
    path: '/todolist',
    element: <TodolistPage />,
  },
  // todo: useReducer로 상태관리
  {
    path: '/todolist/reducer',
    element: <TodolistPage />,
  },
  // todo: useContext로 상태관리
  {
    path: '/todolist/context',
    element: <TodolistPage />,
  },
  // todo: recoil로 상태관리
  {
    path: '/todolist/recoil',
    element: <TodolistPage />,
  },
  // todo: 리코일로 투두리스트 만들기.
  {
    path: '/recoil',
    element: <IndexPage />,
  },
  // todo: react query로 비동기처리하는 리스트
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/products/:id',
    element: <IdPage />,
  },
  {
    path: '*',
    element: <>not found</>,
  },
]
