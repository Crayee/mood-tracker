import EditableField from '../EditableField'
import { Sleep } from '@shared/types'
import { parametersConfig } from '../../../config/parametersConfig'
import { useDailyReportDispatch, useDailyReportSelector } from '../../../context/dailyReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import NumberInput from '../../inputs/NumberInput'
import CheckboxInput from '../../inputs/CheckboxInput'
import SleepRenderer from '../renderer/SleepRenderer'

const Editor = (value: Sleep, onChange: Dispatch<SetStateAction<Sleep>>) => {
    const handleChangeDuration = (value: number) => {
        onChange((old) => {
            return { ...old, duration: value }
        })
    }
    const handleChangeHadDreams = (value: boolean) => {
        onChange((old) => {
            return { ...old, hadDreams: value }
        })
    }
    return (
        <Box display="flex" flexDirection={'column'} sx={{ width: '250px', gap: 1 }}>
            <NumberInput label={'Duration'} value={value.duration} onChange={handleChangeDuration} adornment={'h'} />
            <CheckboxInput label={'Had dreams'} value={value.hadDreams ?? false} onChange={handleChangeHadDreams} />
        </Box>
    )
}

const SleepField = () => {
    const config = parametersConfig.sleep
    const { icon, label } = config

    const value = useDailyReportSelector((s) => s.parameters.sleep)

    const dispatch = useDailyReportDispatch()
    const handleSave = (newValue: Sleep) => {
        dispatch({ type: 'updateParameter', payload: { field: 'sleep', newValue } })
    }

    return (
        <EditableField<Sleep>
            label={label}
            value={value}
            onSave={handleSave}
            icon={icon}
            editor={Editor}
            renderer={SleepRenderer}
        />
    )
}

export default SleepField
