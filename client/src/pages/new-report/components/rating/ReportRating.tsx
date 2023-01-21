import DefaultPaper from '../../../../commons/components/ui/DefaultPaper'
import ValueEditor from './ValueEditor'
import { Box } from '@mui/material'
import RatingProgress from './RatingProgress'

const ReportRating = () => {
    return (
        <DefaultPaper title={'Ratings'}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    rowGap: 1.5,
                    columnGap: 2,
                }}
            >
                <ValueEditor field={'mood'} />
                <ValueEditor field={'satisfaction'} />
                <ValueEditor field={'focus'} />
                <ValueEditor field={'achievement'} />
                <RatingProgress />
            </Box>
        </DefaultPaper>
    )
}

export default ReportRating
