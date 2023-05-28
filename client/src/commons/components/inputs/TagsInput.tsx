import { Autocomplete, TextField } from '@mui/material'
import { SyntheticEvent } from 'react'

// TODO
const TagsInput = (props: {
    options: string[]
    tags: string[]
    onChange: (e: SyntheticEvent, value: string[]) => void
}) => {
    return (
        <Autocomplete
            size={'small'}
            multiple
            options={props.options}
            getOptionLabel={(option) => option}
            value={props.tags}
            onChange={props.onChange}
            disableCloseOnSelect
            renderInput={(params) => <TextField {...params} size={'small'} variant="filled" label="Tags" />}
        />
    )
}

export default TagsInput
