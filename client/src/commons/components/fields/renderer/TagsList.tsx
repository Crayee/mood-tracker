import { Chip, Grid } from '@mui/material'
import TagIcon from '@mui/icons-material/Tag'

const TagsList = (props: { tags: string[] }) => {
    return (
        <Grid container spacing={0.8}>
            {props.tags.map((value, index) => (
                <Grid item key={index}>
                    <Chip size={'small'} label={value} icon={<TagIcon />} />
                </Grid>
            ))}

            {props.tags.length === 0 && <Grid item>-</Grid>}
        </Grid>
    )
}

export default TagsList
