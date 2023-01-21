import { FilledInput, FormControl, InputAdornment, InputLabel, InputProps } from '@mui/material'
import { Dispatch } from 'react'

type Props = {
    label: string
    min?: number
    max?: number
    onChange: Dispatch<number>
    value: number | undefined
    adornment?: string
} & Omit<InputProps, 'onChange' | 'value'>

const NumberInput = (props: Props) => {
    const { min = 0, max = Number.MAX_VALUE, value, adornment, onChange, label, ...rest } = props

    return (
        <FormControl variant="filled" fullWidth size={'small'}>
            <InputLabel>{label}</InputLabel>
            <FilledInput
                {...rest}
                defaultValue={value}
                onChange={(e) => onChange(Number(e.target.value))}
                inputProps={{
                    step: 1,
                    min,
                    max,
                    type: 'number',
                }}
                endAdornment={adornment && <InputAdornment position="end">{adornment}</InputAdornment>}
            />
        </FormControl>
    )
}

export default NumberInput
