import { Button, ButtonProps } from '@mui/material'
import { stopPropagation } from '../../util/stopPropagation'

const CommonButton = (props: ButtonProps & { label?: string; stopPropagation?: boolean }) => {
    const {
        label,
        children,
        size = 'small',
        variant = 'contained',
        color = 'primary',
        disabled = false,
        stopPropagation: stopPropa = true,
        onClick,
        ...rest
    } = props

    return (
        <Button
            size={size}
            variant={variant}
            onClick={onClick && stopPropa ? stopPropagation(onClick) : onClick}
            disabled={disabled}
            color={color}
            sx={{ mt: 'auto' }}
            {...rest}
        >
            {label}
            {children}
        </Button>
    )
}

export default CommonButton
