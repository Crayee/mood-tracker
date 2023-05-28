import { Box, IconButton, Paper, Typography } from '@mui/material'
import { EditableFieldProps } from './EditableField'
import EditIcon from '@mui/icons-material/Edit'
import { MouseEvent } from 'react'

export type FieldProps<T> = Pick<EditableFieldProps<T>, 'label' | 'renderer' | 'value' | 'icon'> & {
    editable?: boolean
    onStartEdit?: (event: MouseEvent<HTMLElement>) => void
}
function GenericField<T>(props: FieldProps<T>) {
    const { editable = false } = props
    return (
        <Paper elevation={2} sx={{ p: 1 }}>
            <Box display={'flex'} sx={{ gap: 0.5 }}>
                {props.icon && <props.icon sx={{ fontSize: 20 }} />}
                <Typography fontSize={15} fontWeight={600}>
                    {props.label}
                </Typography>
            </Box>

            <Box display={'flex'} alignItems={'center'}>
                {props.renderer(props.value)}

                <span style={{ flex: 1 }} />
                {editable && (
                    <IconButton onClick={props.onStartEdit} size={'small'} sx={{}}>
                        <EditIcon />
                    </IconButton>
                )}
            </Box>
        </Paper>
    )
}

export default GenericField
