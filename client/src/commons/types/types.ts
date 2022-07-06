export type Intensity = 'light' | 'medium' | 'heavy'

type DurationIntensity = {
    duration: number
    intensity: Intensity
}

type Hydration = {
    waterAmount: number
    softDrinkAmount: number
    alcoholAmount: number
}

export type Rating = {
    mood?: number
    achievement?: number
    focus?: number
    satisfaction?: number
    rating: number
}

export type Entry = {
    _id: string
    ownerId: string
    date: Date

    parameters: {
        sleep: number
        hydration: Hydration
        work: DurationIntensity
        sport: DurationIntensity
    }
    rating: Rating
}

export type NewEntry = Omit<Entry, '_id' | 'date' | 'ownerId'>
