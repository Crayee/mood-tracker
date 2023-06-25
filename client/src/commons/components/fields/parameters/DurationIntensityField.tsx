import EditableField from '../EditableField'
import { DurationIntensity, Intensity } from '@shared/types'
import { parametersConfig } from '../../../config/parametersConfig'
import { useDailyReportDispatch, useDailyReportSelector } from '../../../context/dailyReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import NumberInput from '../../inputs/NumberInput'
import IntensitySelector from '../../inputs/IntensitySelector'
import DurationIntensityRenderer from '../renderer/DurationIntensityRenderer'

type DurationIntensityFieldProps = {
    parameter: 'sport' | 'work'
}

const Editor = (value: DurationIntensity, onChange: Dispatch<SetStateAction<DurationIntensity>>) => {
    const handleChangeDuration = (value: number) => {
        onChange((old) => {
            return { ...old, duration: value }
        })
    }
    const handleChangeIntensity = (value: Intensity) => {
        onChange((old) => {
            return { ...old, intensity: value }
        })
    }
    return (
        <Box display="flex" flexDirection={'column'} sx={{ width: '250px', gap: 1 }}>
            <NumberInput label={'Duration'} value={value.duration} onChange={handleChangeDuration} adornment={'h'} />
            <IntensitySelector value={value.intensity} onChange={handleChangeIntensity} />
        </Box>
    )
}

const DurationIntensityField = (props: DurationIntensityFieldProps) => {
    const config = parametersConfig[props.parameter]
    const { icon, label } = config

    const value = useDailyReportSelector((s) => s.parameters[props.parameter])

    const dispatch = useDailyReportDispatch()
    const handleSave = (newValue: DurationIntensity) => {
        dispatch({ type: 'updateParameter', payload: { field: props.parameter, newValue } })
    }

    return (
        <EditableField<DurationIntensity>
            label={label}
            value={value}
            onSave={handleSave}
            icon={icon}
            editor={Editor}
            renderer={DurationIntensityRenderer}
        />
    )
}

export default DurationIntensityField
