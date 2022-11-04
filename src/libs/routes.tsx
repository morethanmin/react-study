import IndexPage from '../pages'
import ProductsPage from '../pages/products'
import IdPage from '../pages/products/[id]'
import TodolistPage from '../pages/todolist'
import ReducerPage from '../pages/todolist/reducer'

/**
 * useState, useReducer, useContext, rocil, reactQuery, suspense, errorboundary
 */
export const routes = [
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/todolist',
    element: <TodolistPage />,
  },
  // todo: useReducer로 상태관리
  {
    path: '/todolist/reducer',
    element: <ReducerPage />,
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
