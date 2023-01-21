import { Rating } from '../commons/types/types'

export const inBounds = (
    value: number | undefined,
    min: number,
    max: number
) => {
    const val = value ?? 0
    return val < min ? min : val > max ? max : val
}

export const calculateRating = (rating: Partial<Rating>) => {
    const { mood, focus, achievement, satisfaction } = rating
    const values =
        inBounds(mood, 1, 5) * 0.4 +
        inBounds(focus, 1, 5) * 0.3 +
        inBounds(achievement, 1, 5) * 0.15 +
        inBounds(satisfaction, 1, 5) * 0.15

    return values
}
