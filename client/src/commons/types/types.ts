import { intensities } from '../config/constants'
import { RecursivePartialL2 } from './util'

export type Intensity = (typeof intensities)[number]
export type DurationIntensity = {
    duration: number
    intensity: Intensity
}
export type Sleep = {
    duration: number
    hadDreams: boolean
}
export type Hydration = {
    waterAmount: number
    softDrinkAmount: number
    alcohol: boolean
}
export type Food = {
    tags: string[]
    calories: number
}

export type Rating = {
    mood?: number
    achievement?: number
    focus?: number
    satisfaction?: number
    rating: number
}
export type RatingField = keyof Rating

export type DailyReport = {
    _id: string
    ownerId: string
    date: Date

    parameters: {
        sleep: Sleep
        hydration: Hydration
        food: Food
        sport: DurationIntensity
        work: DurationIntensity
        interactions?: string[]
        otherActivities: string[]
    }
    rating: Rating
}
export type ParametersField = keyof DailyReport['parameters']
export type NewReport = { parameters: RecursivePartialL2<DailyReport['parameters']> } & Pick<DailyReport, 'rating'>
