import DefaultPaper from '../../../commons/components/ui/DefaultPaper'
import useParameters from '../hooks/useParameters'
import DurationIntensityInput from '../../../commons/components/inputs/DurationIntensityInput'

const ParametersPaper = () => {
    const { parameters, update } = useParameters()

    return (
        <DefaultPaper title={'Parameters'}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '8px 8px',
                }}
            >
                <DurationIntensityInput
                    label={'Sleep'}
                    value={parameters.sleep ?? { duration: 0 }}
                    onSave={(newVal) => update('sleep', newVal)}
                />
                <DurationIntensityInput
                    label={'Sleep'}
                    value={parameters.sleep ?? { duration: 0 }}
                    onSave={(newVal) => update('sleep', newVal)}
                />
                <DurationIntensityInput
                    label={'Sleep'}
                    value={parameters.sleep ?? { duration: 0 }}
                    onSave={(newVal) => update('sleep', newVal)}
                />
            </div>
        </DefaultPaper>
    )
}

export default ParametersPaper
