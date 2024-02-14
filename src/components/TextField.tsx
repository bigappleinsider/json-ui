import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';
import { useForm } from '../context/form';
import { View } from '../types';

interface Props {
  data: View;
}

/** Render styled text fields */

export default function TextField({ data }: Props) {
  const { values, onSetValue } = useForm();

  return (
    <StyledTextField $customStyle={data.style}>
      <div>
        {data?.data?.label != null && <label>{data?.data.label}</label>}
        <input
          type="text"
          placeholder={data?.data?.placeholder ?? ''}
          value={values[data.id] ?? ''}
          onChange={(event) => {
            onSetValue(data.id, event.target.value);
          }}
        />
      </div>
      {data?.data?.helperText != null && <p>{data.data.helperText}</p>}
    </StyledTextField>
  );
}

const StyledTextField = styled.div<{ $customStyle: any }>`
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
