import { Activities } from '../../../../commons/types/types'
import { SvgIcon } from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import WorkIcon from '@mui/icons-material/Work'
import { ReactNode } from 'react'
import useParameters from '../../hooks/useParameters'
import DurationIntensityInput from '../../../../commons/components/inputs/DurationIntensityInput'

type ActivityConfig = {
    icon: typeof SvgIcon
    color: string
    input: ReactNode
}

const { activities, updateActivities } = useParameters()

export type ActivitiesConfig = Record<keyof Activities, ActivityConfig>
export const activitiesConfig: ActivitiesConfig = {
    sport: {
        icon: DirectionsRunIcon,
        color: 'blue',
        input: (
            <DurationIntensityInput
                value={activities?.sport ?? { duration: 0 }}
                label={'Sport'}
                onSave={(newValue) => updateActivities('sport', newValue)}
            />
        ),
    },
    work: {
        icon: WorkIcon,
        color: 'gray',
        input: (
            <DurationIntensityInput
                value={activities?.work ?? { duration: 0 }}
                label={'Work'}
                onSave={(newValue) => updateActivities('work', newValue)}
            />
        ),
    },
    interactions: {
        icon: WorkIcon,
        color: 'gray',
        input: (
            <DurationIntensityInput
                value={activities?.work ?? { duration: 0 }}
                label={'Work'}
                onSave={(newValue) => updateActivities('work', newValue)}
            />
        ),
    },
}
