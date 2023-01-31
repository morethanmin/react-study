import styled from '@emotion/styled'
import OpenColor from 'open-color'

import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: Exclude<ReactNode, boolean | null | undefined>
}

const Textfield: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { className, label, ...props },
  ref
) => {
  return (
    <StyledWrapper className={className}>
      {label && <div className="label">{label}</div>}
      <input
        ref={ref}
        type="text"
        spellCheck="false"
        autoComplete="off"
        {...props}
      />
    </StyledWrapper>
  )
}

export default forwardRef(Textfield)

const StyledWrapper = styled.div`
  width: 100%;
  .label {
    padding-bottom: 5px;
  }
  input {
    width: 100%;
    border: none;
    outline: 1px solid ${OpenColor.gray[4]};
    border-radius: 8px;
    font-size: 15px;
    padding: 12px;
    display: flex;
    align-items: center;
    background-color: transparent;
    &:focus {
      outline: 1px solid #404d6b;
    }
  }
`
