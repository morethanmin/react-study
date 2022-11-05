import React, { Suspense } from 'react'
import Loading from './index.loading'
import View from './index.view'

type Props = {}

const ProductsDetailPage: React.FC<Props> = () => {
  return (
    <Suspense fallback={<Loading />}>
      <View />
    </Suspense>
  )
}

export default ProductsDetailPage
