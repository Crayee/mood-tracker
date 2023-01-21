import { NewReport, RatingField } from '../../commons/types/types'
import { createReducerContext } from '../../util/context'
import { PayloadAction } from '../../util/reducer'
import { calculateRating } from '../../util/functions'

const initialState: NewReport = {
    parameters: [],
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
        updateRatingValue: (
            state,
            action: PayloadAction<{ field: RatingField; newValue: number }>
        ) => {
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
    },
})

export const {
    ContextProvider: NewReportContextProvider,
    useActionDispatch: useNewReportDispatch,
    useValue: useNewReportValue,
    useSelector: useNewReportSelector,
} = newReportContext
