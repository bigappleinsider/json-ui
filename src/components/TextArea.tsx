import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';
import { useForm } from '../context/form';
import { View } from '../types';

interface Props {
  data: View;
}

/** Render styled textarea */

export default function TextArea({ data }: Props) {
  const { values, onSetValue } = useForm();

  return (
    <StyledTextArea $customStyle={data.style}>
      {data?.data?.label != null && <label>{data?.data.label}</label>}
      <textarea
        onChange={(event) => {
          onSetValue(data.id, event.target.value);
        }}
        value={values[data.id] ?? ''}
      />
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
