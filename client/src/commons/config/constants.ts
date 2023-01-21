import { Intensity } from '../types/types'

export const sportCategories = ['Cardio', 'Weight lifting', 'Endurance'] as const

export const foodTags = [
    'Fast Food',
    'Meat',
    'Sweets',
    'Vegan',
    'Diary products',
    'Corn',
    'Fruit',
    'Vegetables',
] as const

export const intensities: Intensity[] = ['light', 'medium', 'heavy']
