import { DailyReport, NewReport, ParametersField, RatingField } from '@shared/types'
import { createReducerContext } from '../util/context'
import { PayloadAction } from '../util/reducer'
import { calculateRating } from '../util/functions'

const initialState: NewReport = {
    ownerId: '64972f399d6a80692cded0b0', // TODO: dynamisch laden (evtl. in backend)
    date: new Date(),

    parameters: {
        sleep: {
            duration: 8,
            hadDreams: false,
        },
        hydration: {
            waterAmount: 1.5,
            sodaAmount: 0,
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
        success: 1,
        focus: 1,
        satisfaction: 1,
        energy: 1,
        health: 1,
        rating: 1,
    },
}

const dailyReportContext = createReducerContext({
    initialState,
    reducers: {
        setDailyReport: (state, action: PayloadAction<DailyReport>) => {
            return action.payload
        },
        updateDate: (state, action: PayloadAction<Date>) => {
            return {
                ...state,
                date: action.payload,
            }
        },
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
        reset: () => {
            return initialState
        },
    },
})

export const {
    ContextProvider: DailyReportContextProvider,
    useActionDispatch: useDailyReportDispatch,
    useValue: useDailyReportValue,
    useSelector: useDailyReportSelector,
} = dailyReportContext
