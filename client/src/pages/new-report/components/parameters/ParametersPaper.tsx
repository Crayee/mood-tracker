import DefaultPaper from '../../../../commons/components/ui/DefaultPaper'
import DurationIntensityField from './DurationIntensityField'
import SleepField from './SleepField'
import HydrationField from './HydrationField'
import { Box } from '@mui/material'
import SexField from './SexField'

const ParametersPaper = () => {
    return (
        <DefaultPaper title={'Parameters'}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' },
                    gap: '8px 8px',
                }}
            >
                <SleepField />
                <DurationIntensityField parameter={'sport'} />
                <DurationIntensityField parameter={'work'} />
                <HydrationField />
                <SexField />
            </Box>
        </DefaultPaper>
    )
}

export default ParametersPaper
