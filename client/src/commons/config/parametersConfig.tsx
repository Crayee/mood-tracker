import { SvgIcon } from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import WorkIcon from '@mui/icons-material/Work'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import HotelIcon from '@mui/icons-material/Hotel'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ParametersField } from '@shared/types'

type ParameterConfig = {
    label: string
    icon: typeof SvgIcon
}

export type ParametersConfig = Record<ParametersField, ParameterConfig>
export const parametersConfig: ParametersConfig = {
    sex: {
        label: 'Sex',
        icon: FavoriteIcon,
    },
    work: {
        label: 'Work',
        icon: WorkIcon,
    },
    hydration: {
        label: 'Hydration',
        icon: LocalDrinkIcon,
    },
    sleep: {
        label: 'Sleep',
        icon: HotelIcon,
    },

    sport: {
        label: 'Sport',
        icon: DirectionsRunIcon,
    },
    food: {
        label: 'Food',
        icon: RestaurantIcon,
    },
}
