import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import CommonDialog from '../ui/CommonDialog'
import GenericField from './GenericField'
import { SvgIcon } from '@mui/material'

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
    const handleStartEdit = () => {
        setEditMode(true)
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
            <CommonDialog
                title={`Edit ${props.label}`}
                open={editMode}
                onClose={handleCancelEdit}
                buttonLabel={'Save'}
                onClick={handleSave}
                maxWidth={'sm'}
            >
                {props.editor(value, handleOnChange)}
            </CommonDialog>
        </>
    )
}

export default EditableField
