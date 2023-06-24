import { Grid, Typography } from '@mui/material'
import ReportRating from './rating/ReportRating'
import ParametersPaper from './parameters/ParametersPaper'
import { NewReportContextProvider, useNewReportSelector } from '../newReportContext'

const NewReportPage = () => {
    const value = useNewReportSelector((s) => s)

    console.log(JSON.stringify(value))

    return (
        <NewReportContextProvider>
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
            </Grid>
        </NewReportContextProvider>
    )
}

export default NewReportPage
