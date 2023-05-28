import EditableField from '../../../../commons/components/fields/EditableField'
import { Food } from '../../../../commons/types/types'
import { parametersConfig } from '../../../../commons/config/parametersConfig'
import { useNewReportDispatch, useNewReportSelector } from '../../newReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import NumberInput from '../../../../commons/components/inputs/NumberInput'
import TagsInput from '../../../../commons/components/inputs/TagsInput'
import { foodTags } from '../../../../commons/config/constants'
import FoodRenderer from '../../../../commons/components/fields/renderer/FoodRenderer'

const Editor = (value: Food, onChange: Dispatch<SetStateAction<Food>>) => {
    const handleChangeCalories = (value: number) => {
        onChange((old) => {
            return { ...old, calories: value }
        })
    }
    const handleChangeTags = (e: any, value: string[]) => {
        onChange((old) => {
            return { ...old, tags: value }
        })
    }

    return (
        <Box display="flex" flexDirection={'column'} sx={{ width: '250px', gap: 1 }}>
            <NumberInput label={'Calories'} value={value.calories} onChange={handleChangeCalories} adornment={'kcal'} />
            <TagsInput tags={value.tags} onChange={handleChangeTags} options={foodTags} />
        </Box>
    )
}

const FoodField = () => {
    const config = parametersConfig.food
    const { icon, label } = config

    const value = useNewReportSelector((s) => s.parameters.food)

    const dispatch = useNewReportDispatch()
    const handleSave = (newValue: Food) => {
        dispatch({ type: 'updateParameter', payload: { field: 'food', newValue } })
    }

    return (
        <EditableField<Food>
            label={label}
            value={value}
            onSave={handleSave}
            icon={icon}
            editor={Editor}
            renderer={FoodRenderer}
        />
    )
}

export default FoodField
