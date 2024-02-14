import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';
import { View } from '../types';

interface Props {
  data: View;
}

/** Render styled Text */

export default function CustomText({ data }: Props) {
  return <StyledText $customStyle={data.style}>{data?.data?.value}</StyledText>;
}

const StyledText = styled.div<{ $customStyle: any }>`
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
