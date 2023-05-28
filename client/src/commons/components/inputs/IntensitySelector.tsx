import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { intensities } from '../../config/constants'
import { Dispatch } from 'react'
import { Intensity } from '../../types/types'

const IntensitySelector = (props: { onChange: Dispatch<Intensity>; value: Intensity | undefined }) => {
    return (
        <FormControl fullWidth variant={'filled'} size={'small'}>
            <InputLabel>Intensity</InputLabel>
            <Select onChange={(e) => props.onChange(e.target.value as Intensity)} value={props.value ?? ''}>
                {intensities.map((i, index) => (
                    <MenuItem key={index} value={i}>
                        {i.toLowerCase()}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default IntensitySelector
