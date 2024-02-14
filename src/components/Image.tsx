import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';
import { View } from '../types';

interface Props {
  data: View;
}

/** Render styled image */

export default function Image({ data }: Props) {
  return <StyledImage $customStyle={data.style} src={data?.data?.value} />;
}

const StyledImage = styled.img<{ $customStyle: any }>`
  ${(props) => ({ ...props.$customStyle.webStyle })}

  ${(props) =>
    !isEmpty(props.$customStyle.actions.onHover) &&
    css`
      &:hover {
        ${(props: any) => ({
          ...props.$customStyle.actions.onHover,
        })}
  `}

  ${(props) =>
    !isEmpty(props.$customStyle.actions.onFocus) &&
    css`
      &:focus {
        ${(props: any) => ({
          ...props.$customStyle.actions.onFocus,
        })}
  `}
`;
