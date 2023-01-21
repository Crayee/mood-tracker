import { Sleep } from '../../../types/types'
import { EditableFieldProps } from '../EditableField'
import { RecursivePartial } from '../../../types/util'
import { Box, Chip } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { formatNumber } from '../../../util/formatters'

const SleepRenderer: EditableFieldProps<RecursivePartial<Sleep>>['renderer'] = (value: RecursivePartial<Sleep>) => {
    return (
        <Box display={'flex'} gap={1}>
            <Chip
                size={'small'}
                label={
                    <>
                        <b>{'Duration: '}</b>
                        {value.duration ? formatNumber(1, 1)(value.duration) + 'h' : '-'}
                    </>
                }
                icon={<AccessTimeIcon />}
            />
            {value.hadDreams ? 'true' : 'false'}
        </Box>
    )
}

export default SleepRenderer
