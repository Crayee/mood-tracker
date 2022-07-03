export type Entry = {
    _id: string
    ownerId: string
    date: Date
    parameters: Parameter[]
    rating: Rating
}

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
