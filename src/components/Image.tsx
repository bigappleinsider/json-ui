import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';

interface Props {
  data: any;
}

export default function Image({ data }: Props) {
  return <StyledImage style={data.style} src={data.value} />;
}

const StyledImage = styled.img<{ style: any }>`
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
