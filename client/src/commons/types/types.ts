export type Report = {
    _id: string
    ownerId: string
    date: Date
    parameters: Parameter[]
    rating: Rating
}
export type NewReport = Omit<Report, '_id' | 'ownerId' | 'date'>

type Parameter = {
    __typename: string
    value: number
}

export type Rating = {
    mood?: number
    achievement?: number
    focus?: number
    satisfaction?: number
    rating: number
}
export type RatingField = keyof Rating
