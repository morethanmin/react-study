import React from 'react'
import AsyncBoundery from '../../components/AsyncBoundery'
import ProductsDetailView from './index.view'

type Props = {}

const ProductDetail: React.FC<Props> = () => {
  return (
    <AsyncBoundery>
      <ProductsDetailView />
    </AsyncBoundery>
  )
}

export default ProductDetail
