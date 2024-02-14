import { isEmpty } from 'lodash';
import styled, { css } from 'styled-components';
import { isSubmitDisabled, useForm } from '../context/form';
import { View } from '../types';

interface Props {
  data: View;
}

/** Render button
 * useForm to persist state
 */
export default function Button({ data }: Props) {
  const { values } = useForm();
  const isDisabled = isSubmitDisabled(values, data?.requiredFields);

  return (
    <StyledButton $customStyle={data.style} disabled={isDisabled} type="submit">
      {data?.data?.title ?? ''}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $customStyle: any }>`
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
