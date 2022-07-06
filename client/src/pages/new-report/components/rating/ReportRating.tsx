import DefaultPaper from '../../../../commons/components/ui/DefaultPaper'
import ValueEditor from './ValueEditor'
import { Rating } from '../../../../commons/types/types'
import { Dispatch, SetStateAction } from 'react'
import RatingProgress from './RatingProgress'

const ReportRating = (props: { rating: Rating; setRating: Dispatch<SetStateAction<Rating>> }) => {
    const { rating, setRating } = props
    return (
        <DefaultPaper title={'Ratings'}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: '8px 20px',
                }}
            >
                <ValueEditor field={'mood'} state={rating} setState={setRating} />
                <ValueEditor field={'achievement'} state={rating} setState={setRating} />
                <ValueEditor field={'focus'} state={rating} setState={setRating} />
                <ValueEditor field={'satisfaction'} state={rating} setState={setRating} />
                <div style={{ height: 8, gridColumn: '3' }} />
                <RatingProgress value={rating.rating} />
            </div>
        </DefaultPaper>
    )
}

export default ReportRating
