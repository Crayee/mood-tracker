import { Paper, PaperProps, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

const DefaultPaper = (props: PropsWithChildren<PaperProps & { fontSize?: number }>) => {
    const { title, children, fontSize = 20, ...rest } = props

    return (
        <Paper
            elevation={4}
            sx={{
                padding: { xs: '4px 8px 8px 8px', md: '6px 12px 12px 12px' },
            }}
            {...rest}
        >
            {title && <Typography sx={{ mb: 0.8, fontSize, cursor: 'default' }}>{title}</Typography>}
            {children}
        </Paper>
    )
}

export default DefaultPaper
