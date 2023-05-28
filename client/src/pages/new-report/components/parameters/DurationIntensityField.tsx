import EditableField from '../../../../commons/components/fields/EditableField'
import { DurationIntensity, Intensity } from '../../../../commons/types/types'
import { parametersConfig } from '../../../../commons/config/parametersConfig'
import { useNewReportDispatch, useNewReportSelector } from '../../newReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import NumberInput from '../../../../commons/components/inputs/NumberInput'
import { RecursivePartial } from '../../../../commons/types/util'
import IntensitySelector from '../../../../commons/components/inputs/IntensitySelector'
import DurationIntensityRenderer from '../../../../commons/components/fields/renderer/DurationIntensityRenderer'

type DurationIntensityFieldProps = {
    parameter: 'sport' | 'work'
}

const Editor = (
    value: RecursivePartial<DurationIntensity>,
    onChange: Dispatch<SetStateAction<RecursivePartial<DurationIntensity>>>
) => {
    const handleChangeDuration = (value: number | undefined) => {
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

    const value = useNewReportSelector((s) => s.parameters[props.parameter])

    const dispatch = useNewReportDispatch()
    const handleSave = (newValue: RecursivePartial<DurationIntensity>) => {
        dispatch({ type: 'updateParameter', payload: { field: props.parameter, newValue } })
    }

    return (
        <EditableField<RecursivePartial<DurationIntensity>>
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
