import { useQuery, UseQueryOptions } from 'react-query'
import { DailyReport } from '@shared/types'
import axios from 'axios'

const useDailyReport = (_id: DailyReport['_id'], options?: UseQueryOptions<DailyReport, unknown, DailyReport>) => {
    return useQuery<DailyReport, unknown, DailyReport>(
        ['reports', _id],
        () => axios.get('http://localhost:8080/api/daily-reports/' + _id).then((res) => res.data),
        options
    )
}

export default useDailyReport
