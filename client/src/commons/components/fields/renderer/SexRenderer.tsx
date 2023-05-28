import { Sex } from '../../../types/types'
import { EditableFieldProps } from '../EditableField'
import { Box, Chip } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

const SexRenderer: EditableFieldProps<Sex>['renderer'] = (value: Sex) => {
    return (
        <Box display={'flex'} gap={1}>
            <Chip
                size={'small'}
                label={value.hadSex ? 'Had sex' : 'Had no sex'}
                color={value.hadSex ? 'success' : 'default'}
                icon={value.hadSex ? <CheckIcon /> : <CloseIcon />}
            />
            <Chip
                size={'small'}
                label={value.didMasturbate ? 'Did masturbate' : 'Did not masturbate'}
                icon={value.didMasturbate ? <CheckIcon /> : <CloseIcon />}
            />
        </Box>
    )
}

export default SexRenderer
