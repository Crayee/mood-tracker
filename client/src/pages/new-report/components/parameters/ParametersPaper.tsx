import DefaultPaper from '../../../../commons/components/ui/DefaultPaper'
import DurationIntensityField from './DurationIntensityField'
import SleepField from './SleepField'
import HydrationField from './HydrationField'
import { Box, Divider } from '@mui/material'
import SexField from './SexField'
import SportField from './SportField'
import FoodField from './FoodField'

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
                <DurationIntensityField parameter={'work'} />
                <HydrationField />
                <SexField />
            </Box>

            <Divider textAlign={'left'} sx={{ pt: 2, pb: 1, fontWeight: 500, fontSize: 15 }}>
                With tags
            </Divider>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' },
                    gap: '8px 8px',
                }}
            >
                <SportField />
                <FoodField />
            </Box>
        </DefaultPaper>
    )
}

export default ParametersPaper
