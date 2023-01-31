import React, { Suspense } from 'react'
import AsyncBoundery from '../../components/AsyncBoundery'
import ProductListView from './index.view'

const ProductList: React.FC = () => {
  return (
    <AsyncBoundery>
      <ProductListView />
    </AsyncBoundery>
  )
}

export default ProductList
