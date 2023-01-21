import { NewReport, ParametersField, RatingField } from '../../commons/types/types'
import { createReducerContext } from '../../commons/util/context'
import { PayloadAction } from '../../commons/util/reducer'
import { calculateRating } from '../../commons/util/functions'

const initialState: NewReport = {
    parameters: {
        sleep: {
            duration: undefined,
            hadDreams: false,
        },
        hydration: {
            waterAmount: undefined,
            softDrinkAmount: undefined,
            alcohol: false,
        },
        food: {
            tags: [],
            calories: undefined,
        },
        sport: { duration: undefined, intensity: undefined },
        work: { duration: undefined, intensity: undefined },
        interactions: [],
        otherActivities: [],
    },
    rating: {
        mood: 1,
        achievement: 1,
        focus: 1,
        satisfaction: 1,
        rating: 1,
    },
}

const newReportContext = createReducerContext({
    initialState: initialState,
    reducers: {
        updateRatingValue: (state, action: PayloadAction<{ field: RatingField; newValue: number }>) => {
            const newRatingValues = {
                ...state.rating,
                [action.payload.field]: action.payload.newValue,
            }
            return {
                ...state,
                rating: {
                    ...newRatingValues,
                    rating: calculateRating(newRatingValues),
                },
            }
        },
        updateParameter: (state, action: PayloadAction<{ field: ParametersField; newValue: any }>) => {
            return {
                ...state,
                parameters: {
                    ...state.parameters,
                    [action.payload.field]: action.payload.newValue,
                },
            }
        },
    },
})

export const {
    ContextProvider: NewReportContextProvider,
    useActionDispatch: useNewReportDispatch,
    useValue: useNewReportValue,
    useSelector: useNewReportSelector,
} = newReportContext
