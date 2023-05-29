import { Box, LinearProgress, Typography } from '@mui/material'
import { useNewReportSelector } from '../../newReportContext'
import { formatNumber } from '../../../../commons/util/formatters'

const RatingProgress = () => {
    const value = useNewReportSelector((s) => s.rating.rating)
    const currentPercentage = ((value - 1) / 4) * 100

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gridColumn: { xs: 1, md: 2 },
                mt: 1,
                alignItems: 'center',
                gap: 2,
                width: { xs: '100%', md: '50%' },
            }}
        >
            <Typography fontWeight={600}>Gesamt:</Typography>
            <LinearProgress
                variant="determinate"
                value={currentPercentage}
                color={currentPercentage > 66 ? 'success' : currentPercentage > 33 ? 'warning' : 'error'}
                sx={{ height: 10, borderRadius: 5 }}
            />
            <Typography fontWeight={600}>{formatNumber(1, 1)(value)} / 5</Typography>
        </Box>
    )
}

export default RatingProgress
