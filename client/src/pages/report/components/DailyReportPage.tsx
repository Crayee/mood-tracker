import { Grid, Typography } from '@mui/material'
import ParametersPaper from '../../../commons/components/fields/parameters/ParametersPaper'
import ReportRating from '../../../commons/components/rating/ReportRating'
import SaveDailyReport from './SaveDailyReport'
import useDailyReport from '../../../commons/hooks/useDailyReport'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDailyReportDispatch } from '../../../commons/context/dailyReportContext'

const DailyReportPage = () => {
    const { id } = useParams()
    const { data: report } = useDailyReport(id ?? '', { enabled: !!id, refetchOnWindowFocus: false })

    const dispatch = useDailyReportDispatch()

    useEffect(() => {
        if (report) {
            dispatch({ type: 'setDailyReport', payload: report })
        }
    }, [report])

    return (
        report && (
            <Grid container spacing={{ xs: 0.7, md: 1 }} sx={{ p: { xs: 0.7, md: 1 } }}>
                <Grid item xs={12}>
                    <Typography fontSize={20}>Daily Report</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ParametersPaper />
                </Grid>
                <Grid item xs={12}>
                    <ReportRating />
                </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'right'} gap={1}>
                    <SaveDailyReport />
                </Grid>
            </Grid>
        )
    )
}

export default DailyReportPage
