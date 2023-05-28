import { SvgIcon } from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import WorkIcon from '@mui/icons-material/Work'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import HotelIcon from '@mui/icons-material/Hotel'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ParametersField } from '../types/types'

type ParameterConfig = {
    label: string
    icon: typeof SvgIcon
    hasTags: boolean
}

export type ParametersConfig = Record<ParametersField, ParameterConfig>
export const parametersConfig: ParametersConfig = {
    sex: {
        label: 'Sex',
        icon: FavoriteIcon,
        hasTags: false,
    },
    work: {
        label: 'Work',
        icon: WorkIcon,
        hasTags: false,
    },
    hydration: {
        label: 'Hydration',
        icon: LocalDrinkIcon,
        hasTags: false,
    },
    sleep: {
        label: 'Sleep',
        icon: HotelIcon,
        hasTags: false,
    },

    sport: {
        label: 'Sport',
        icon: DirectionsRunIcon,
        hasTags: true,
    },
    food: {
        label: 'Food',
        icon: RestaurantIcon,
        hasTags: true,
    },
}
