import React from 'react'
import * as Select from '@radix-ui/react-select';
import * as Styled from './dropdown.styles'
import { getSelectedFont, setFont } from '../../state/features/ui';
import { useAppSelector, useAppDispatch } from '../../state/hooks';
import { FiChevronDown } from 'react-icons/fi'

interface Props {
  children: React.ReactNode;
  value: string;
}

const SelectItem = React.forwardRef(({ children, ...props }: Props, forwardedRef: any) => {
  return (
    <Styled.StyledItem {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
    </Styled.StyledItem>
  );
});

export const DropDown = () => {
  const dispatch = useAppDispatch();
  const font = useAppSelector(getSelectedFont);
  const handleChange = (value:string) => dispatch(setFont(value))

  return (
    <Select.Root defaultValue={font} onValueChange={handleChange}>
      <Styled.SelectTrigger>
       <Select.Value placeholder="Select a font family" />
        <FiChevronDown color="#a445ed" />
      </Styled.SelectTrigger>

      <Select.Portal>
      <Styled.SelectContent>
        <Styled.SelectViewport>
            <SelectItem value="sans">Sans Serif</SelectItem>
            <SelectItem value="serif">Serif</SelectItem>
            <SelectItem value="mono">Mono</SelectItem>
        </Styled.SelectViewport>
      </Styled.SelectContent>
    </Select.Portal>
      </Select.Root>
  )
}

