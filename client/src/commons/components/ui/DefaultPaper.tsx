import { Paper, PaperProps, Typography } from '@mui/material'
import { PropsWithChildren, ReactNode } from 'react'

const DefaultPaper = (props: PropsWithChildren<PaperProps>) => {
    const { title, children, ...rest } = props

    return (
        <Paper
            elevation={4}
            sx={{
                padding: { xs: '6px 12px 12px 12px', md: '8px 14px 14px 14px' },
            }}
            {...rest}
        >
            {title && (
                <Typography sx={{ mb: 0.8, fontSize: 20, cursor: 'default' }}>
                    {title}
                </Typography>
            )}
            {children}
        </Paper>
    )
}

export default DefaultPaper
