import { styled } from '@mui/system';
import { FC } from 'react'
import { Button } from '@mui/material'


const StyledButton = styled(Button)({
    borderRadius: '10px',
    margin: '30px',
    textTransform: 'none',
  });


type PropsButt = {
    type: 'submit'
    title: string
}

export const SearchButton: FC<PropsButt> = ({
    type,
    title,

}) => {
  return (
    <StyledButton
        type={type}
        size={'large'}
        variant={"contained"}
        color={'primary'}
    >
        {title}
    </StyledButton>
  )
}
