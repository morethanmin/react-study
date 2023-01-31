import styled from '@emotion/styled'
import OpenColor from 'open-color'
import {
  forwardRef,
  ForwardRefRenderFunction,
  SelectHTMLAttributes,
} from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select: ForwardRefRenderFunction<HTMLSelectElement, Props> = (
  { className, children, ...props },
  ref
) => {
  return (
    <StyledWrapper className={className}>
      <select ref={ref} {...props}>
        {children}
      </select>
      <div className="btn">
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </StyledWrapper>
  )
}

export default forwardRef(Select)

const StyledWrapper = styled.div<{}>`
  position: relative;
  display: inline-block;
  background-color: white;
  width: 150px;
  select {
    border: none;
    background-color: transparent;
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    padding: 12px;
    width: 100%;
  }

  border: 1px solid ${OpenColor.gray[4]};
  border-radius: 8px;
  font-size: 14px;
  .btn {
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    right: 12px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    svg {
      font-size: 10px;
    }
  }
`
