import { NewReport, ParametersField, RatingField } from '../../commons/types/types'
import { createReducerContext } from '../../commons/util/context'
import { PayloadAction } from '../../commons/util/reducer'
import { calculateRating } from '../../commons/util/functions'

const initialState: NewReport = {
    parameters: {
        sleep: {
            duration: 8,
            hadDreams: false,
        },
        hydration: {
            waterAmount: 1.5,
            softDrinkAmount: 0,
            hadAlcohol: false,
        },
        work: { duration: 8, intensity: 'MEDIUM' },
        sex: { hadSex: false, didMasturbate: false },

        // with tags
        food: {
            tags: [],
            calories: 2200,
        },
        sport: { duration: 0, intensity: 'MEDIUM', tags: [] },
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
    initialState,
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
