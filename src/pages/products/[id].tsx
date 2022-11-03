import styled from '@emotion/styled'
import React from 'react'
import {
  useLocation,
  useMatch,
  useParams,
  useSearchParams,
} from 'react-router-dom'

type Props = {}

const IdPage: React.FC<Props> = (props) => {
  //뒤에 붙는 파라미터
  const [searchParams] = useSearchParams()

  //location 반환
  const location = useLocation()

  //id값
  const params = useParams()
  console.log(params)

  return <StyledWrapper>IdPage</StyledWrapper>
}

export default IdPage

const StyledWrapper = styled.div``
