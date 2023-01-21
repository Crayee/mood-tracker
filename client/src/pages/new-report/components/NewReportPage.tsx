import { Grid, Typography } from '@mui/material'
import ReportRating from './rating/ReportRating'
import ParametersPaper from './ParametersPaper'
import { NewReportContextProvider } from '../newReportContext'

const NewReportPage = () => {

    return (
        <NewReportContextProvider>
        <Grid container spacing={{ xs: 1, md: 1.5 }} sx={{ p: { xs: 1, md: 1.5 } }}>
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
