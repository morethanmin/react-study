import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../libs/api'

type Props = {}

const ProductsDetailView: React.FC<Props> = ({}) => {
  const params = useParams()
  const { data } = useQuery(['product', params.id], () =>
    getProductById(params.id!)
  )
  console.log(data)

  return (
    <StyledWrapper>
      <div>{data?.name} 정보 보기</div>
      <ul>가격: {data?.price}</ul>
      <ul>설명: {data?.content}</ul>
    </StyledWrapper>
  )
}

export default ProductsDetailView

const StyledWrapper = styled.div``
