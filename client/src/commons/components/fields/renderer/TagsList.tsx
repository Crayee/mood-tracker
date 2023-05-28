import { Box, Chip } from '@mui/material'
import TagIcon from '@mui/icons-material/Tag'

const TagsList = (props: { tags: string[] }) => {
    return (
        <Box display={'flex'} gap={1}>
            {props.tags.map((value, index) => (
                <Chip key={index} size={'small'} label={value} icon={<TagIcon />} />
            ))}

            {props.tags.length === 0 && '-'}
        </Box>
    )
}

export default TagsList
