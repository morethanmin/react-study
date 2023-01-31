import styled from '@emotion/styled'
import React from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'

type Props = {}

const Feed: React.FC<Props> = ({}) => {
  // * router.push
  const navigate = useNavigate()

  // * router.query (ex. products/:id)
  const { id } = useParams()

  // * router.query (ex. products?id=10)
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <StyledWrapper>
      <ul>
        <li>
          <Link to={'/todolist'}>todolist(useState)</Link>
        </li>
        <li>
          <Link to={'/todolist/reducer'}>todolist(useReducer)</Link>
        </li>
        <li>
          <Link to={'/todolist/context'}>todolist(useContext)</Link>
        </li>
        <li>
          <Link to={'/todolist/recoil'}>todolist(recoil)</Link>
        </li>
        <li>
          <Link to={'/products'}>products</Link>
        </li>
      </ul>
    </StyledWrapper>
  )
}

export default Feed

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .todolist-form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 300px;
  }
`
