import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

export type EditableInputProps<T> = {
    label: ReactNode
    value: T
    editor: (value: T, onChange: Dispatch<SetStateAction<T>>) => ReactNode
    onSave: (value: T) => void
    renderer: (value: T) => ReactNode
}

function EditableInput<T>(props: EditableInputProps<T>) {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState<T>(props.value)

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    return (
        <div style={{ height: '32px', border: '1px solid', flex: '1 1 auto' }}>
            <div style={{ flex: '1 1 auto' }}>{props.renderer(value)}</div>
        </div>
    )
}

export default EditableInput
