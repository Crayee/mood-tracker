import CommonButton from '../../../commons/components/ui/CommonButton'
import SaveIcon from '@mui/icons-material/Save'
import { useDailyReportValue } from '../../../commons/context/dailyReportContext'
import useUpdateDailyReport from '../../../commons/hooks/useUpdateDailyReport'
import { useParams } from 'react-router-dom'

const SaveDailyReport = () => {
    const { id } = useParams()
    const { mutate: update } = useUpdateDailyReport(id ?? '')
    const report = useDailyReportValue()

    const handleSubmit = () => {
        if (id) update({ _id: id, ...report })
    }

    return <CommonButton label={'Save'} onClick={handleSubmit} endIcon={<SaveIcon />} />
}

export default SaveDailyReport
