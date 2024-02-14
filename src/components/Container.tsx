import React from 'react';
import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';
import { View } from '../types';

interface Props {
  data: View;
  children: React.ReactElement;
}

/** Render styled container */

export default function Container({ data, children }: Props) {
  return (
    <StyledContainer $customStyle={data.style}>{children}</StyledContainer>
  );
}

const StyledContainer = styled.div<{ $customStyle: any }>`
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
