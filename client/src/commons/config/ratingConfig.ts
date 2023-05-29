import { SvgIcon } from '@mui/material'
import { RatingField } from '../types/types'
import StarIcon from '@mui/icons-material/Star'
import MoodIcon from '@mui/icons-material/Mood'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown'
import PsychologyIcon from '@mui/icons-material/Psychology'
import BoltIcon from '@mui/icons-material/Bolt'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'

export type RatingFieldConfig = {
    label: string
    icon: typeof SvgIcon
    color: string
    description?: string
    tips?: Record<number, string>
}

export type RatingConfig = Record<RatingField, RatingFieldConfig>
export const ratingConfig: RatingConfig = {
    rating: {
        label: 'Rating',
        icon: StarIcon,
        color: 'orange',
    },
    mood: {
        label: 'Mood',
        icon: MoodIcon,
        color: 'green',
        description: 'How good your current mood is, at the end of the day',
        tips: {
            1: 'Terrible mood',
            2: 'Bad mood',
            3: 'Decent mood',
            4: 'Good mood',
            5: 'Very good mood',
        },
    },
    success: {
        label: 'Success',
        icon: EmojiEventsIcon,
        color: 'gold',
        description: 'How much you feel like you achieved today',
        tips: {
            1: 'No daily goals achieved',
            2: 'Few daily goals achieved',
            3: 'Some daily goals achieved',
            4: 'Most daily goals achieved',
            5: 'All daily goals achieved',
        },
    },
    focus: {
        label: 'Focus',
        icon: PsychologyIcon,
        color: 'royalblue',
        description: 'How focused you felt like you were today',
        tips: {
            1: 'Terrible focus',
            2: 'Bad focus',
            3: 'Decent Focus',
            4: 'Good focus',
            5: 'Great focus',
        },
    },
    satisfaction: {
        label: 'Satisfact.',
        icon: ThumbsUpDownIcon,
        color: 'purple',
        description: 'How satisfied you are with yourself and the day',
        tips: {
            1: 'Not at all satisfied',
            2: 'A little satisfied',
            3: 'Decently satisfied',
            4: 'Mostly satisfied',
            5: 'Very satisfied',
        },
    },
    health: {
        label: 'Health',
        icon: LocalHospitalIcon,
        color: 'red',
        description: 'How healthy you are and feel today',
        tips: {
            1: 'Very sick',
            2: 'Sick',
            3: 'A bit ill',
            4: 'Healthy',
            5: 'Very healthy',
        },
    },
    energy: {
        label: 'Energy',
        icon: BoltIcon,
        color: 'orange',
        description: 'How energized you were during the day',
        tips: {
            1: 'No energy',
            2: 'Little energy',
            3: 'Average energy',
            4: 'Plenty of energy',
            5: 'Huge amounts of energy',
        },
    },
}
