import React, { ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <StyledWrapper className={className} {...props}>
      {children}
    </StyledWrapper>
  )
}

export default Button

const StyledWrapper = styled.button`
  border: 0;
  outline: 0;

  cursor: pointer;
  padding: 0px 30px;
  height: 44px;
  border-radius: 12px;
  gap: 5px;
  background-color: #404d6b;
  color: white;
`
