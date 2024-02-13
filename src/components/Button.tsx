import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';

interface Props {
  data: any;
}

export default function Button({ data }: Props) {
  return <StyledButton style={data.style}>{data.data.title}</StyledButton>;
}

const StyledButton = styled.button<{ style: any }>`
  ${(props) => ({ ...props.style.webStyle })}

  ${(props) =>
    !isEmpty(props.style.actions.onHover) &&
    css`
      &:hover {
        ${(props: any) => ({
          ...props.style.actions.onHover,
        })}
  `}

  ${(props) =>
    !isEmpty(props.style.actions.onFocus) &&
    css`
      &:focus {
        ${(props: any) => ({
          ...props.style.actions.onFocus,
        })}
  `}
`;
