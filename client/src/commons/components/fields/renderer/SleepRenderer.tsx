import { Sleep } from '../../../types/types'
import { EditableFieldProps } from '../EditableField'
import { RecursivePartial } from '../../../types/util'
import { Box, Chip } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { formatNumber } from '../../../util/formatters'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

const SleepRenderer: EditableFieldProps<RecursivePartial<Sleep>>['renderer'] = (value: RecursivePartial<Sleep>) => {
    const hadDreams = value.hadDreams ?? false
    return (
        <Box display={'flex'} gap={0.8}>
            <Chip
                size={'small'}
                label={
                    <>
                        <b>{'Duration: '}</b>
                        {value.duration !== undefined ? formatNumber(1, 1)(value.duration) + 'h' : '-'}
                    </>
                }
                icon={<AccessTimeIcon />}
            />
            <Chip
                size={'small'}
                label={hadDreams ? 'Had dreams' : 'Had no dreams'}
                color={hadDreams ? 'success' : 'warning'}
                icon={hadDreams ? <CheckIcon /> : <CloseIcon />}
            />
        </Box>
    )
}

export default SleepRenderer
