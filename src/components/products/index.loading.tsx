import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getProducts } from '../../libs/api'

type Props = {}

const Loading: React.FC<Props> = ({}) => {
  return <StyledWrapper>상품 리스트 진열중...</StyledWrapper>
}

export default Loading

const StyledWrapper = styled.div``
