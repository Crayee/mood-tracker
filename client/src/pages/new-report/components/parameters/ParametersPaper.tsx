import DefaultPaper from '../../../../commons/components/ui/DefaultPaper'
import DurationIntensityField from './DurationIntensityField'
import SleepField from './SleepField'
import HydrationField from './HydrationField'
import { Divider, Grid } from '@mui/material'
import SexField from './SexField'
import SportField from './SportField'
import FoodField from './FoodField'

const ParametersPaper = () => {
    return (
        <DefaultPaper title={'Parameters'}>
            <Grid container spacing={{ xs: 0.7, md: 1.2 }}>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <SleepField />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <DurationIntensityField parameter={'work'} />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <HydrationField />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <SexField />
                </Grid>

                <Grid item xs={12}>
                    <Divider textAlign={'left'} sx={{ mt: 0.5, fontWeight: 500, fontSize: 15 }}>
                        With tags
                    </Divider>
                </Grid>

                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <SportField />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <FoodField />
                </Grid>
            </Grid>
        </DefaultPaper>
    )
}

export default ParametersPaper
