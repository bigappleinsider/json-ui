import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';

interface Props {
  data: any;
}

export default function Select({ data }: Props) {
  return (
    <StyledSelect $customStyle={data.style}>
      <label>{data.data.label}</label>
      <select>
        {data.data.options.map((option: string, idx: number) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </StyledSelect>
  );
}

const StyledSelect = styled.div<{ $customStyle: any }>`
  ${(props) => ({ ...props.$customStyle.webStyle })}

  ${(props) =>
    props.$customStyle.actions != null &&
    !isEmpty(props.$customStyle.actions.onHover) &&
    css`
      &:hover {
        ${(props: any) => ({
          ...props.$customStyle.actions.onHover,
        })}
  `}

  ${(props) =>
    props.$customStyle.actions != null &&
    !isEmpty(props.$customStyle.actions.onFocus) &&
    css`
      &:focus {
        ${(props: any) => ({
          ...props.$customStyle.actions.onFocus,
        })}
  `}
`;
