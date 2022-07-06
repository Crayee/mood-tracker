import { Box, SvgIcon, Tooltip, Typography } from '@mui/material'

const IconLabel = (props: {
    label: string
    icon: typeof SvgIcon
    color?: string
    tip: string
}) => (
    <Tooltip title={props.tip} placement={'top'}>
        <Box display={'flex'} alignItems={'center'}>
            <props.icon style={{ color: props.color, marginRight: '8px' }} />
            <Typography fontSize={{ xs: 15, sm: 16 }}>{props.label}</Typography>
        </Box>
    </Tooltip>
)

export default IconLabel
