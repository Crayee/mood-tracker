import EditableField from '../../../../commons/components/fields/EditableField'
import { Sleep } from '../../../../commons/types/types'
import { parametersConfig } from '../../../../commons/config/parametersConfig'
import { useNewReportDispatch, useNewReportSelector } from '../../newReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import NumberInput from '../../../../commons/components/inputs/NumberInput'
import { RecursivePartial } from '../../../../commons/types/util'
import CheckboxInput from '../../../../commons/components/inputs/CheckboxInput'
import SleepRenderer from '../../../../commons/components/fields/renderer/SleepRenderer'

const Editor = (value: RecursivePartial<Sleep>, onChange: Dispatch<SetStateAction<RecursivePartial<Sleep>>>) => {
    const handleChangeDuration = (value: number | undefined) => {
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

    const value = useNewReportSelector((s) => s.parameters.sleep)

    const dispatch = useNewReportDispatch()
    const handleSave = (newValue: RecursivePartial<Sleep>) => {
        dispatch({ type: 'updateParameter', payload: { field: 'sleep', newValue } })
    }

    return (
        <EditableField<RecursivePartial<Sleep>>
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
