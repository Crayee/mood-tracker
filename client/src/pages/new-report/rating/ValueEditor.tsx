import { Rating } from '../../../commons/types/types'
import { Dispatch, SetStateAction } from 'react'
import { ratingConfig } from '../../../commons/config/ratingConfig'
import IconLabel from '../../../commons/components/IconLabel'
import ValueSlider from '../../../commons/components/inputs/ValueSlider'
import { calculateRating } from '../../../commons/functions'

const ValueEditor = (props: {
    field: keyof Rating
    state: Rating
    setState: Dispatch<SetStateAction<Rating>>
}) => {
    const value = props.state?.[props.field] ?? 1
    const config = ratingConfig[props.field]

    const handleChange = (newVal: number) => {
        props.setState((prev) => {
            const { rating, ...params } = prev ?? {}
            const newParams: Omit<Rating, 'rating'> = {
                ...params,
                [props.field]: newVal,
            }
            return { ...newParams, rating: calculateRating(newParams) }
        })
    }

    return (
        <>
            <IconLabel
                label={config.label}
                icon={config.icon}
                color={config.iconColor}
                tip={config.description ?? ''}
            />
            <ValueSlider
                value={value}
                setValue={handleChange}
                tips={config.tips}
            />
        </>
    )
}

export default ValueEditor
