import DefaultPaper from '../../commons/components/ui/DefaultPaper'
import { Stack, Typography } from '@mui/material'
import ReportRating from './rating/ReportRating'

const NewReportPage = () => {
    return (
        <Stack spacing={'10px'} style={{ margin: '10px' }}>
            <Typography fontSize={20}>New Report</Typography>
            <DefaultPaper title={'Parameters'}>
                <Typography>Sleep</Typography>
                <Typography>Friends</Typography>
                <Typography>Water</Typography>
                <Typography>Food</Typography>
                <Typography>Work</Typography>
                <Typography>...</Typography>
            </DefaultPaper>
            <ReportRating />
        </Stack>
    )
}

export default NewReportPage
