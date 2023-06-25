import EditableField from '../EditableField'
import { Food } from '@shared/types'
import { parametersConfig } from '../../../config/parametersConfig'
import { useDailyReportDispatch, useDailyReportSelector } from '../../../context/dailyReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import NumberInput from '../../inputs/NumberInput'
import TagsInput from '../../inputs/TagsInput'
import { foodTags } from '@shared/constants'
import FoodRenderer from '../renderer/FoodRenderer'

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

    const value = useDailyReportSelector((s) => s.parameters.food)

    const dispatch = useDailyReportDispatch()
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
