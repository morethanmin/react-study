import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../libs/api'

type Props = {}

const View: React.FC<Props> = ({}) => {
  const { data } = useQuery(['products'], getProducts)
  return (
    <StyledWrapper>
      <div>상민가게</div>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default View

const StyledWrapper = styled.div``
