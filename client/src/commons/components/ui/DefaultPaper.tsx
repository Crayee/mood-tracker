import { Paper, Typography } from '@mui/material'
import { ReactNode } from 'react'

const DefaultPaper = (props: { children: ReactNode; title?: string }) => (
    <Paper
        elevation={4}
        sx={{
            padding: { xs: 1.5, md: 2 },
        }}
    >
        {props.title && (
            <Typography sx={{ mb: 0.8, fontSize: 20 }}>
                {props.title}
            </Typography>
        )}
        {props.children}
    </Paper>
)

export default DefaultPaper
