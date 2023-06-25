import EditableField from '../EditableField'
import { Hydration } from '@shared/types'
import { parametersConfig } from '../../../config/parametersConfig'
import { useDailyReportDispatch, useDailyReportSelector } from '../../../context/dailyReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import NumberInput from '../../inputs/NumberInput'
import CheckboxInput from '../../inputs/CheckboxInput'
import HydrationRenderer from '../renderer/HydrationRenderer'

const Editor = (value: Hydration, onChange: Dispatch<SetStateAction<Hydration>>) => {
    const handleChangeWaterAmount = (value: number) => {
        onChange((old) => {
            return { ...old, waterAmount: value }
        })
    }
    const handleChangeSoftDrinkAmount = (value: number) => {
        onChange((old) => {
            return { ...old, sodaAmount: value }
        })
    }
    const handleChangeHadAlcohol = (value: boolean) => {
        onChange((old) => {
            return { ...old, hadAlcohol: value }
        })
    }
    return (
        <Box display="flex" flexDirection={'column'} sx={{ width: '250px', gap: 1 }}>
            <NumberInput
                label={'Amount water'}
                value={value.waterAmount}
                onChange={handleChangeWaterAmount}
                adornment={'L'}
            />
            <NumberInput
                label={'Amount soft drinks'}
                value={value.sodaAmount}
                onChange={handleChangeSoftDrinkAmount}
                adornment={'L'}
            />
            <CheckboxInput label={'Had alcohol'} value={value.hadAlcohol ?? false} onChange={handleChangeHadAlcohol} />
        </Box>
    )
}

const SleepField = () => {
    const config = parametersConfig.hydration
    const { icon, label } = config

    const value = useDailyReportSelector((s) => s.parameters.hydration)

    const dispatch = useDailyReportDispatch()
    const handleSave = (newValue: Hydration) => {
        dispatch({ type: 'updateParameter', payload: { field: 'hydration', newValue } })
    }

    return (
        <EditableField<Hydration>
            label={label}
            value={value}
            onSave={handleSave}
            icon={icon}
            editor={Editor}
            renderer={HydrationRenderer}
        />
    )
}

export default SleepField
