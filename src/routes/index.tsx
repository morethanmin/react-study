import { RouteObject } from 'react-router-dom'
import IndexPage from './Feed'
import ProductsPage from './ProductList'
import IdPage from './ProductDetail'
import TodolistPage from './todolists'
import ContextPage from './todolists/context'
import RecoilPage from './todolists/recoil'
import ReducerPage from './todolists/reducer'

/**
 * useState, useReducer, useContext, rocil, reactQuery, suspense, errorboundary
 */
export const routeObjects: RouteObject[] = [
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
