import EditableField from '../EditableField'
import { Sex } from '@shared/types'
import { parametersConfig } from '../../../config/parametersConfig'
import { useDailyReportDispatch, useDailyReportSelector } from '../../../context/dailyReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import CheckboxInput from '../../inputs/CheckboxInput'
import SexRenderer from '../renderer/SexRenderer'

const Editor = (value: Sex, onChange: Dispatch<SetStateAction<Sex>>) => {
    const handleChangeSex = (value: boolean) => {
        onChange((old) => {
            return { ...old, hadSex: value }
        })
    }
    const handleChangeMasturbate = (value: boolean) => {
        onChange((old) => {
            return { ...old, didMasturbate: value }
        })
    }
    return (
        <Box display="flex" flexDirection={'column'} sx={{ width: '250px', gap: 0.5 }}>
            <CheckboxInput label={'Had sex'} value={value.hadSex} onChange={handleChangeSex} />
            <CheckboxInput label={'Did masturbate'} value={value.didMasturbate} onChange={handleChangeMasturbate} />
        </Box>
    )
}

const SexField = () => {
    const config = parametersConfig.sex
    const { icon, label } = config

    const value = useDailyReportSelector((s) => s.parameters.sex)

    const dispatch = useDailyReportDispatch()
    const handleSave = (newValue: Sex) => {
        dispatch({ type: 'updateParameter', payload: { field: 'sex', newValue } })
    }

    return (
        <EditableField<Sex>
            label={label}
            value={value}
            onSave={handleSave}
            icon={icon}
            editor={Editor}
            renderer={SexRenderer}
        />
    )
}

export default SexField
