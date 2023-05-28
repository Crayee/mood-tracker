import EditableField from '../../../../commons/components/fields/EditableField'
import { Sex } from '../../../../commons/types/types'
import { parametersConfig } from '../../../../commons/config/parametersConfig'
import { useNewReportDispatch, useNewReportSelector } from '../../newReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import { RecursivePartial } from '../../../../commons/types/util'
import CheckboxInput from '../../../../commons/components/inputs/CheckboxInput'
import SexRenderer from '../../../../commons/components/fields/renderer/SexRenderer'

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

    const value = useNewReportSelector((s) => s.parameters.sex)

    const dispatch = useNewReportDispatch()
    const handleSave = (newValue: RecursivePartial<Sex>) => {
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
