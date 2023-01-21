import DefaultPaper from '../../../../commons/components/ui/DefaultPaper'
import DurationIntensityField from './DurationIntensityField'
import SleepField from './SleepField'
import HydrationField from './HydrationField'

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
                <HydrationField />
            </div>
        </DefaultPaper>
    )
}

export default ParametersPaper
