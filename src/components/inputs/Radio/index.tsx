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

const Radio: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { className, id, label, ...props },
  ref
) => {
  return (
    <StyledWrapper className={className}>
      <input id={id} ref={ref} type="radio" {...props} />
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
    </StyledWrapper>
  )
}

export default forwardRef(Radio)

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .label {
  }
  input {
    appearance: none;
    border: 1px solid ${OpenColor.gray[4]};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    &:checked {
      border-radius: 50%;
      border: 4px solid #01a0ff;
      width: 16px;
      height: 16px;
    }
  }
`
