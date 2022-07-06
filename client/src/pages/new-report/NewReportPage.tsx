import DefaultPaper from '../../commons/components/ui/DefaultPaper'
import { Stack, Typography } from '@mui/material'
import ReportRating from './rating/ReportRating'
import { useState } from 'react'
import { Rating } from '../../commons/types/types'

const NewReportPage = () => {
    const [rating, setRating] = useState<Rating>({
        rating: 0,
        satisfaction: 1,
        achievement: 1,
        focus: 1,
        mood: 1,
    })

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
            <ReportRating rating={rating} setRating={setRating} />
        </Stack>
    )
}

export default NewReportPage
