import { RouteObject } from 'react-router-dom'
import IndexPage from '../pages'
import ProductsPage from '../pages/products'
import IdPage from '../pages/products/[id]'
import TodolistPage from '../pages/todolist'
import ContextPage from '../pages/todolist/\bcontext'
import RecoilPage from '../pages/todolist/recoil'
import ReducerPage from '../pages/todolist/reducer'

/**
 * useState, useReducer, useContext, rocil, reactQuery, suspense, errorboundary
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/todolist',
    element: <TodolistPage />,
  },
  {
    path: '/todolist/reducer',
    element: <ReducerPage />,
  },
  {
    path: '/todolist/context',
    element: <ContextPage />,
  },
  // todo: recoil로 상태관리
  {
    path: '/todolist/recoil',
    element: <RecoilPage />,
  },
  // todo: react query로 비동기처리하는 리스트
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/products/:id',
    errorElement: <>잘못된 상품아이디인듯?</>,
    element: <IdPage />,
  },
  {
    path: '*',
    errorElement: <>omg error omg</>,
    element: <>not found</>,
  },
]
