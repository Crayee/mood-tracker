import DefaultPaper from '../../../../commons/components/ui/DefaultPaper'
import DurationIntensityField from './DurationIntensityField'
import SleepField from './SleepField'

const ParametersPaper = () => {
    return (
        <DefaultPaper title={'Parameters'}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '8px 8px',
                }}
            >
                <SleepField />
                <DurationIntensityField parameter={'sport'} />
                <DurationIntensityField parameter={'work'} />
            </div>
        </DefaultPaper>
    )
}

export default ParametersPaper
