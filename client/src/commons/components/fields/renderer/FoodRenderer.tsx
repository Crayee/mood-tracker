import { Food } from '../../../types/types'
import { EditableFieldProps } from '../EditableField'
import { Box, Chip, Typography } from '@mui/material'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import { formatNumber } from '../../../util/formatters'
import TagsList from './TagsList'

const FoodRenderer: EditableFieldProps<Food>['renderer'] = (value: Food) => {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Chip
                size={'small'}
                label={
                    <>
                        <b>{'Calories (ca.): '}</b>
                        {value.calories !== undefined ? formatNumber(0, 0)(value.calories) + 'kcal' : '-'}
                    </>
                }
                icon={<LocalFireDepartmentIcon />}
            />

            <Typography fontSize={12} fontWeight={600} sx={{ mt: 1 }}>
                Tags:
            </Typography>
            <TagsList tags={value.tags} />
        </Box>
    )
}

export default FoodRenderer
