import IconLabel from '../../../../commons/components/IconLabel'
import { ratingConfig } from '../../../../commons/config/ratingConfig'
import { LinearProgress, linearProgressClasses, Typography, useTheme } from '@mui/material'

const RatingProgress = (props: { value: number }) => {
    const config = ratingConfig.rating

    const theme = useTheme()

    return (
        <>
            <IconLabel label={config.label} icon={config.icon} color={config.color} tip={config.description ?? ''} />
            <LinearProgress
                variant="determinate"
                value={props.value * 10}
                sx={{
                    mt: 'auto',
                    mb: 'auto',
                    height: 10,
                    borderRadius: 5,
                    [`&.${linearProgressClasses.colorPrimary}`]: {
                        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                    },
                    [`& .${linearProgressClasses.bar}`]: {
                        borderRadius: 5,
                        backgroundColor: theme.palette.success.main,
                    },
                }}
            />
            <Typography fontWeight={600}>{props.value.toFixed(2)}</Typography>
        </>
    )
}

export default RatingProgress
