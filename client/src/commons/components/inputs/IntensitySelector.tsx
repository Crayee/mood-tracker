import { Autocomplete, TextField } from '@mui/material'
import { intensities } from '../../config/constants'
import { Dispatch } from 'react'
import { Intensity } from '../../types/types'
import { stopPropagation } from '../../util/stopPropagation'

const IntensitySelector = (props: { onChange: Dispatch<Intensity>; value: Intensity | undefined }) => {
    return (
        <Autocomplete
            fullWidth
            size={'small'}
            onChange={(e, value) => {
                props.onChange(value as Intensity)
            }}
            getOptionLabel={(option) => option.toLowerCase()}
            value={props.value}
            options={intensities}
            onClick={stopPropagation(() => {})}
            renderInput={(params) => <TextField {...params} size={'small'} variant="filled" label="Intensity" />}
        />
    )
}

export default IntensitySelector
