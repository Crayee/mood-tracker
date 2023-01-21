import EditableField from '../../../../commons/components/fields/EditableField'
import { Hydration, Sleep } from '../../../../commons/types/types'
import { parametersConfig } from '../../../../commons/config/parametersConfig'
import { useNewReportDispatch, useNewReportSelector } from '../../newReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import NumberInput from '../../../../commons/components/inputs/NumberInput'
import { RecursivePartial } from '../../../../commons/types/util'
import CheckboxInput from '../../../../commons/components/inputs/CheckboxInput'
import HydrationRenderer from '../../../../commons/components/fields/renderer/HydrationRenderer'

const Editor = (
    value: RecursivePartial<Hydration>,
    onChange: Dispatch<SetStateAction<RecursivePartial<Hydration>>>
) => {
    const handleChangeWaterAmount = (value: number | undefined) => {
        onChange((old) => {
            return { ...old, waterAmount: value }
        })
    }
    const handleChangeSoftDrinkAmount = (value: number | undefined) => {
        onChange((old) => {
            return { ...old, softDrinkAmount: value }
        })
    }
    const handleChangeHadAlcohol = (value: boolean) => {
        onChange((old) => {
            return { ...old, alcohol: value }
        })
    }
    return (
        <Box display="flex" flexDirection={'column'} sx={{ width: '250px', gap: 2 }}>
            <NumberInput
                label={'Amount water'}
                value={value.waterAmount}
                onChange={handleChangeWaterAmount}
                adornment={'L'}
            />
            <NumberInput
                label={'Amount soft drinks'}
                value={value.softDrinkAmount}
                onChange={handleChangeSoftDrinkAmount}
                adornment={'L'}
            />
            <CheckboxInput label={'Had alcohol'} value={value.alcohol ?? false} onChange={handleChangeHadAlcohol} />
        </Box>
    )
}

const SleepField = () => {
    const config = parametersConfig['hydration']
    const { icon, label } = config

    const value = useNewReportSelector((s) => s.parameters['hydration'])

    const dispatch = useNewReportDispatch()
    const handleSave = (newValue: RecursivePartial<Hydration>) => {
        dispatch({ type: 'updateParameter', payload: { field: 'hydration', newValue: newValue } })
    }

    return (
        <EditableField<RecursivePartial<Hydration>>
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
