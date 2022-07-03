import DefaultPaper from '../../../commons/components/ui/DefaultPaper'
import ValueEditor from './ValueEditor'
import { Grid, Typography } from '@mui/material'
import { Rating } from '../../../commons/types/types'

const state: Rating = {
    rating: 4,
    focus: 3,
    mood: 2,
    satisfaction: 1,
    achievement: 5,
}

const ReportRating = () => {
    return (
        <DefaultPaper title={'Ratings'}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <ValueEditor
                        field={'mood'}
                        state={state}
                        setState={() => {}}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ValueEditor
                        field={'satisfaction'}
                        state={state}
                        setState={() => {}}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ValueEditor
                        field={'focus'}
                        state={state}
                        setState={() => {}}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ValueEditor
                        field={'achievement'}
                        state={state}
                        setState={() => {}}
                    />
                </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'right'}>
                    <Typography>Result: 4.55</Typography>
                </Grid>
            </Grid>
        </DefaultPaper>
    )
}

export default ReportRating
