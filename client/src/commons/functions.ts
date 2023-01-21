import { Rating } from './types/types'

const inBounds = (
    value: number | undefined,
    lowest: number,
    highest: number
) => {
    const val = value ?? 0
    return val < lowest ? lowest : val > highest ? highest : val
}

export const calculateRating = (rating: Partial<Rating>): number => {
    const { mood, focus, satisfaction, achievement } = rating
    const values =
        inBounds(mood, 1, 5) * 0.4 +
        inBounds(focus, 1, 5) * 0.2 +
        inBounds(satisfaction, 1, 5) * 0.1 +
        inBounds(achievement, 1, 5) * 0.3
    return ((values - 1) * 10) / 4
}
