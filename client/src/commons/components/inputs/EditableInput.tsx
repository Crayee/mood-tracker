import { Dispatch, ReactNode, SetStateAction } from 'react'

export type EditableInputProps<T> = {
    label: ReactNode
    value: T
    editor: (value: T, onChange: Dispatch<SetStateAction<T>>, commit: () => void) => ReactNode
}

function EditableInput<T>(props: EditableInputProps<T>) {}

export default EditableInput
