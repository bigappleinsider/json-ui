import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';

interface Props {
  data: any;
}

export default function TextArea({ data }: Props) {
  return (
    <StyledTextArea $customStyle={data.style}>
      <label>{data.data.label}</label>
      <textarea />
    </StyledTextArea>
  );
}

const StyledTextArea = styled.div<{ $customStyle: any }>`
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
