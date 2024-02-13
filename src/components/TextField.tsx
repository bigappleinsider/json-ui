import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';
import { useForm } from '../context/form';

interface Props {
  data: any;
}

export default function TextField({ data }: Props) {
  const { values, onSetValue } = useForm();
  return (
    <StyledTextField $customStyle={data.style}>
      <div>
        <label>{data.data.label}</label>
        <input
          type="text"
          placeholder={data.data.placeholder}
          value={values[data.data.id] ?? data.data.value}
          onChange={(event) => {
            onSetValue(data.data.id, event.target.value);
          }}
        />
      </div>
      <p>{data.data.helperText}</p>
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
