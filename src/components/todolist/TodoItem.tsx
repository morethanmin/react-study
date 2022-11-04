import styled from '@emotion/styled'
import React from 'react'
import { handleDeleteBtnType, todoListType } from '../../types'

type Props = {
  data: todoListType
  onDeleteBtn: handleDeleteBtnType
}

const TodoItem: React.FC<Props> = ({ data, onDeleteBtn }) => {
  return (
    <StyledWrapper>
      <div className="title">id: {data.id}</div>
      <div className="title">title: {data.title}</div>
      <div className="description">description: {data.description}</div>
      <div className="description">done: {`${data.done}`}</div>
      <div>
        <button onClick={() => onDeleteBtn(data.id)}>삭제</button>
      </div>
    </StyledWrapper>
  )
}

export default TodoItem

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
