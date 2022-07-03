import { Rating } from '../../../commons/types/types'
import { Dispatch, SetStateAction, useState } from 'react'
import { Input, Slider, Tooltip, Typography } from '@mui/material'
import {
    ratingConfig,
    RatingFieldConfig,
} from '../../../commons/config/ratingConfig'

const Label = (config: RatingFieldConfig) => (
    <Tooltip title={config.description ?? ''} placement={'top'}>
        <div
            style={{
                display: 'grid',
                gap: 6,
                gridTemplateColumns: '24px 1fr',
            }}
        >
            <config.icon style={{ color: config.iconColor }} />
            <Typography fontSize={18}>{config.label}</Typography>
        </div>
    </Tooltip>
)

const ValueEditor = (props: {
    field: keyof Rating
    state: Rating
    setState: Dispatch<SetStateAction<Rating>>
}) => {
    const config = ratingConfig[props.field]
    const [value, setValue] = useState(1)

    return (
        <div style={{ display: 'flex' }}>
            <Label {...config} />
            <Slider
                value={value}
                defaultValue={1}
                valueLabelDisplay="auto"
                valueLabelFormat={(val) => config.tips?.[val] ?? 'test'}
                marks
                // @ts-ignore
                onChange={(_, val) => setValue(val)}
                min={1}
                max={5}
                sx={{ ml: 2, mr: 2 }}
            />
            <Input
                value={value}
                size="small"
                onChange={(event) => setValue(Number(event.target.value))}
                inputProps={{
                    step: 1,
                    min: 1,
                    max: 5,
                    type: 'number',
                }}
            />
        </div>
    )
}

export default ValueEditor
