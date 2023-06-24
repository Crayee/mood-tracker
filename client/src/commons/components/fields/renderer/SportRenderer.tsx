import { Sport } from '@shared/types'
import { EditableFieldProps } from '../EditableField'
import DurationIntensityRenderer from './DurationIntensityRenderer'
import TagsList from './TagsList'
import { Box, Typography } from '@mui/material'

const SportRenderer: EditableFieldProps<Sport>['renderer'] = (value: Sport) => {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            {DurationIntensityRenderer(value)}

            <Typography fontSize={12} fontWeight={600} sx={{ mt: 1 }}>
                Tags:
            </Typography>
            <TagsList tags={value.tags} />
        </Box>
    )
}

export default SportRenderer
