import IndexPage from '../pages'
import ProductsPage from '../pages/products'
import IdPage from '../pages/products/[id]'

export const routes = [
  // todo: 리듀서로 crud
  {
    path: '/',
    element: <IndexPage />,
  },
  // todo: 리듀서로 비동기 crud
  {
    path: '/reducer',
    element: <IndexPage />,
  },
  // todo: 비동기 처리하는데, 서스펜스 넣어서 로딩처리
  {
    path: '/suspense',
    element: <IndexPage />,
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
