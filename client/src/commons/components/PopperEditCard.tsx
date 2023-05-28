import { PropsWithChildren } from 'react'
import { Card, CardActions, CardContent, Popper } from '@mui/material'
import CommonButton from './ui/CommonButton'
import { ClickAwayListener } from '@mui/base'

const PopperEditCard = (
    props: PropsWithChildren<{
        open: boolean
        anchorEl: HTMLElement | null | undefined
        onClickAway: () => void
        onSave: () => void
    }>
) => {
    return (
        <Popper open={props.open} anchorEl={props.anchorEl} placement={'bottom-end'}>
            <ClickAwayListener onClickAway={props.onClickAway}>
                <Card>
                    <CardContent sx={{ p: 1.5, pb: 0 }}>{props.children}</CardContent>

                    <CardActions sx={{ justifyContent: 'right' }}>
                        <CommonButton label={'Save'} onClick={props.onSave} />
                    </CardActions>
                </Card>
            </ClickAwayListener>
        </Popper>
    )
}

export default PopperEditCard
