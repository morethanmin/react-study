import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const Loading: React.FC<Props> = ({}) => {
  return <StyledWrapper>상품 가져오는중...</StyledWrapper>
}

export default Loading

const StyledWrapper = styled.div``
