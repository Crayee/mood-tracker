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
                    gridTemplateColumns: { xs: 'auto 1fr auto', md: 'auto 1fr auto auto 1fr auto' },
                    rowGap: 1.5,
                    columnGap: 2,
                    alignItems: 'center',
                }}
            >
                <ValueEditor field={'mood'} />
                <ValueEditor field={'focus'} />
                <ValueEditor field={'success'} />
                <ValueEditor field={'satisfaction'} />
                <ValueEditor field={'health'} />
                <ValueEditor field={'energy'} />
            </Box>
            <Box display={'flex'} justifyContent={'right'} width={'100%'}>
                <RatingProgress />
            </Box>
        </DefaultPaper>
    )
}

export default ReportRating
