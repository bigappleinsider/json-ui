import React from 'react';
import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';
import { View } from '../types';

interface Props {
  data: View;
  children: React.ReactElement;
}

/** Render styled Link */

export default function Link({ data, children }: Props) {
  return (
    <StyledLink $customStyle={data.style} href={data?.data?.value}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled.a<{ $customStyle: any }>`
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
