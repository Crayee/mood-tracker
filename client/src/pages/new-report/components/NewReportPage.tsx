import { Grid, Typography } from '@mui/material'
import ReportRating from './rating/ReportRating'
import { useState } from 'react'
import { Rating } from '../../../commons/types/types'
import ParametersPaper from './ParametersPaper'

const NewReportPage = () => {
    const [rating, setRating] = useState<Rating>({
        rating: 0,
        satisfaction: 1,
        achievement: 1,
        focus: 1,
        mood: 1,
    })

    return (
        <Grid container spacing={{ xs: 1, md: 1.5 }} sx={{ p: { xs: 1, md: 1.5 } }}>
            <Grid item xs={12}>
                <Typography fontSize={20}>New Daily Report</Typography>
            </Grid>
            <Grid item xs={12}>
                <ParametersPaper />
            </Grid>
            <Grid item xs={12}>
                <ReportRating rating={rating} setRating={setRating} />
            </Grid>
        </Grid>
    )
}

export default NewReportPage
