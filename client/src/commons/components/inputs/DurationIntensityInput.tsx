import EditableInput, { EditableInputProps } from './EditableInput'
import { DurationIntensity } from '../../types/types'

type Props = Omit<EditableInputProps<DurationIntensity>, 'editor' | 'renderer'>

const DurationIntensityInput = (props: Props) => {
    return (
        <EditableInput<DurationIntensity>
            {...props}
            editor={() => <></>}
            renderer={(value) => `Duration: '${value.duration}' Intensity: ${value.intensity}`}
        />
    )
}

export default DurationIntensityInput
