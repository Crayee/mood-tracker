import { Hydration, Sleep } from '../../../types/types'
import { EditableFieldProps } from '../EditableField'
import { RecursivePartial } from '../../../types/util'
import { Box, Chip } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { formatNumber } from '../../../util/formatters'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

const SleepRenderer: EditableFieldProps<RecursivePartial<Hydration>>['renderer'] = (
    value: RecursivePartial<Hydration>
) => {
    const hadAlcohol = value.alcohol ?? false
    return (
        <Box display={'flex'} gap={1}>
            <Chip
                size={'small'}
                label={
                    <>
                        <b>{'Water: '}</b>
                        {value.waterAmount !== undefined ? formatNumber(1, 1)(value.waterAmount) + 'l' : '-'}
                    </>
                }
                icon={<AccessTimeIcon />}
            />
            <Chip
                size={'small'}
                label={
                    <>
                        <b>{'Soft drinks: '}</b>
                        {value.softDrinkAmount !== undefined ? formatNumber(1, 1)(value.softDrinkAmount) + 'l' : '-'}
                    </>
                }
                icon={<AccessTimeIcon />}
            />
            <Chip
                size={'small'}
                label={hadAlcohol ? 'Had alcohol' : 'Had no alcohol'}
                color={hadAlcohol ? 'warning' : 'success'}
                icon={hadAlcohol ? <CheckIcon /> : <CloseIcon />}
            />
        </Box>
    )
}

export default SleepRenderer
