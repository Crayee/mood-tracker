import { SvgIcon } from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import WorkIcon from '@mui/icons-material/Work'
import PeopleIcon from '@mui/icons-material/People'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import HotelIcon from '@mui/icons-material/Hotel'
import TagIcon from '@mui/icons-material/Tag'
import { ParametersField } from '../types/types'

type ParameterConfig = {
    label: string
    icon: typeof SvgIcon
}

export type ParametersConfig = Record<ParametersField, ParameterConfig>
export const parametersConfig: ParametersConfig = {
    sport: {
        label: 'Sport',
        icon: DirectionsRunIcon,
    },
    work: {
        label: 'Work',
        icon: WorkIcon,
    },
    interactions: {
        label: 'Interactions',
        icon: PeopleIcon,
    },
    food: {
        label: 'Food',
        icon: RestaurantIcon,
    },
    hydration: {
        label: 'Hydration',
        icon: LocalDrinkIcon,
    },
    sleep: {
        label: 'Sleep',
        icon: HotelIcon,
    },
    otherActivities: {
        label: 'Other Activities',
        icon: TagIcon,
    },
}
