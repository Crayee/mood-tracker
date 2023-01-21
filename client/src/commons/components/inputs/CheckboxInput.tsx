import { Checkbox, FormControlLabel } from '@mui/material'
import { Dispatch } from 'react'

const CheckboxInput = (props: { label: string; value: boolean; onChange: Dispatch<boolean> }) => {
    return (
        <FormControlLabel
            sx={{ width: '100%' }}
            control={<Checkbox checked={props.value} onChange={(e) => props.onChange(e.target.checked)} />}
            label={props.label}
        />
    )
}

export default CheckboxInput
