import CommonButton from '../../../commons/components/ui/CommonButton'
import useCreateDailyReport from '../../../commons/hooks/useCreateDailyReport'
import { useDailyReportValue } from '../../../commons/context/dailyReportContext'
import SendIcon from '@mui/icons-material/Send'

const SubmitDailyReport = () => {
    const { mutate: create } = useCreateDailyReport()
    const newReport = useDailyReportValue()

    const handleSubmit = () => {
        create(newReport)
    }

    return <CommonButton label={'Create'} onClick={handleSubmit} endIcon={<SendIcon />} size={'medium'} />
}

export default SubmitDailyReport
