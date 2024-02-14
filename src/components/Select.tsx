import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';
import { useForm } from '../context/form';
import { View } from '../types';

interface Props {
  data: View;
}

/** Render styled select */

export default function Select({ data }: Props) {
  const { values, onSetValue } = useForm();

  return (
    <StyledSelect $customStyle={data.style}>
      {data?.data?.label != null && <label>{data?.data.label}</label>}
      {data?.data?.options != null && (
        <select
          value={values[data.id] ?? ''}
          onChange={(event) => {
            onSetValue(data.id, event.target.value);
          }}
        >
          {data?.data?.options.map((option: string, idx: number) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
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
