import { Input, Slider } from '@mui/material'
import { Dispatch } from 'react'

type ValueSliderProps = {
    value: number
    setValue: Dispatch<number>
    tips?: Record<number, string>
    min?: number
    max?: number
    defaultVal?: number
}

const ValueSlider = (props: ValueSliderProps) => {
    const { min = 1, max = 5, defaultVal = 1 } = props

    return (
        <>
            <Slider
                value={props.value}
                valueLabelDisplay={props.tips ? 'auto' : undefined}
                valueLabelFormat={(val) => props.tips?.[val] ?? ''}
                marks
                onChange={(_, val) => {
                    props.setValue(typeof val === 'number' ? val : val[0])
                }}
                min={min}
                max={max}
                defaultValue={defaultVal}
                sx={{
                    '.MuiSlider-valueLabelLabel': { fontSize: 12 },
                }}
            />
            <Input
                value={props.value}
                size="small"
                onChange={(event) => props.setValue(Number(event.target.value))}
                inputProps={{
                    step: 1,
                    min,
                    max,
                    type: 'number',
                }}
                sx={{ width: '32px' }}
            />
        </>
    )
}

export default ValueSlider
