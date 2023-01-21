import { SvgIcon } from '@mui/material'
import { Rating, RatingField } from '../types/types'
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
    achievement: {
        label: 'Achievement',
        icon: EmojiEventsIcon,
        color: 'gold',
        description: 'How much you feel like you achieved today',
        tips: {
            1: "I didn't achieve any of my goals for today",
            2: "I didn't achieve most of my goals for today",
            3: 'I achieved about half of my goals for today',
            4: 'I achieved most of my goals for today',
            5: 'I achieved all of my goals for today',
        },
    },
    focus: {
        label: 'Focus',
        icon: PsychologyIcon,
        color: 'royalblue',
        description: 'How focused you felt like you were today',
        tips: {
            1: "I couldn't focus at all and wasn't productive",
            2: "I could only focus a bit and wasn't very productive",
            3: 'I could focus at time and was decently productive',
            4: 'I mostly could focus was pretty productive',
            5: 'I could focus well and was very productive',
        },
    },
    satisfaction: {
        label: 'Satisfaction',
        icon: ThumbsUpDownIcon,
        color: 'purple',
        description: 'How satisfied you are with yourself and the day',
        tips: {
            1: "I'm not at all satisfied",
            2: "I'm a little satisfied",
            3: "I'm decently satisfied",
            4: "I'm mostly satisfied",
            5: "I'm very satisfied",
        },
    },
    health: {
        label: 'Health',
        icon: LocalHospitalIcon,
        color: 'red',
        description: 'How healthy you are and feel today',
        tips: {
            1: "I'm very ill",
            2: "I'm a bit ill",
            3: 'I have',
            4: "I'm healthy",
            5: "I'm very healthy",
        },
    },
    energy: {
        label: 'Energy',
        icon: BoltIcon,
        color: 'orange',
        description: 'How energized you were during the day',
        tips: {
            1: 'I had no energy whatsoever',
            2: 'I had little energy',
            3: 'I had average energy levels',
            4: 'I had plenty of energy',
            5: 'I had huge amounts of energy',
        },
    },
}
