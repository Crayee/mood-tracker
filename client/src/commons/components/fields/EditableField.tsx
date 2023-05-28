import { Dispatch, ReactNode, SetStateAction, useEffect, useState, MouseEvent } from 'react'
import GenericField from './GenericField'
import { SvgIcon } from '@mui/material'
import PopperEditCard from '../PopperEditCard'

export type EditableFieldProps<T> = {
    label: string
    value: T
    editor: (value: T, onChange: Dispatch<SetStateAction<T>>) => ReactNode
    onSave: (value: T) => void
    renderer: (value: T) => ReactNode
    icon?: typeof SvgIcon
}

function EditableField<T>(props: EditableFieldProps<T>) {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState<T>(props.value)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    const handleOnChange = (newValue: SetStateAction<T>) => {
        setValue(newValue)
    }
    const handleSave = () => {
        setEditMode(false)
        if (value) {
            props.onSave(value)
        }
    }
    const handleStartEdit = (event: MouseEvent<HTMLElement>) => {
        setEditMode(true)
        setAnchorEl(event.currentTarget)
    }
    const handleCancelEdit = () => {
        setEditMode(false)
        setValue(props.value)
    }

    return (
        <>
            <GenericField
                value={props.value}
                label={props.label}
                renderer={props.renderer}
                editable
                icon={props.icon}
                onStartEdit={handleStartEdit}
            />

            <PopperEditCard open={editMode} anchorEl={anchorEl} onClickAway={handleCancelEdit} onSave={handleSave}>
                {props.editor(value, handleOnChange)}
            </PopperEditCard>
        </>
    )
}

export default EditableField
