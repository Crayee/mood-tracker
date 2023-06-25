import { Grid, Typography } from '@mui/material'
import ReportRating from '../../../commons/components/rating/ReportRating'
import ParametersPaper from '../../../commons/components/fields/parameters/ParametersPaper'
import SubmitDailyReport from './SubmitDailyReport'
import { useEffect } from 'react'
import { useDailyReportDispatch } from '../../../commons/context/dailyReportContext'

const NewReportPage = () => {
    const dispatch = useDailyReportDispatch()

    useEffect(() => {
        dispatch({ type: 'reset', payload: undefined })
    }, [])

    return (
        <Grid container spacing={{ xs: 0.7, md: 1 }} sx={{ p: { xs: 0.7, md: 1 } }}>
            <Grid item xs={12}>
                <Typography fontSize={20}>New Daily Report</Typography>
            </Grid>
            <Grid item xs={12}>
                <ParametersPaper />
            </Grid>
            <Grid item xs={12}>
                <ReportRating />
            </Grid>
            <Grid item xs={12} display={'flex'} justifyContent={'right'} gap={1}>
                <SubmitDailyReport />
            </Grid>
        </Grid>
    )
}

export default NewReportPage
