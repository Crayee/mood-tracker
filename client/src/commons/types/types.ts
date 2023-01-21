export type Intensity = 'light' | 'medium' | 'heavy'

export type DurationIntensity = {
    duration: number
    intensity?: Intensity
}

type Interaction = {
    duration: number
    who: string
}

type Hydration = {
    waterAmount: number
    softDrinkAmount: number
    alcoholAmount: number
}

type Food = {
    tags: string[]
    price: number
}

export type Activities = {
    sport?: DurationIntensity
    work?: DurationIntensity
    interactions?: Interaction[]
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
        sleep: DurationIntensity
        hydration: Hydration
        food: Food
        activities: Activities
        others: string[]
    }
    rating: Rating
}
export type NewReport = Omit<DailyReport, '_id' | 'ownerId' | 'date'>
