import { useMutation, UseMutationOptions, useQueryClient } from 'react-query'
import { DailyReport } from '@shared/types'
import axios from 'axios'

const useUpdateDailyReport = (
    _id: DailyReport['_id'],
    options?: UseMutationOptions<DailyReport, unknown, DailyReport>
) => {
    const queryClient = useQueryClient()
    const opt: UseMutationOptions<DailyReport, unknown, DailyReport> = {
        onSuccess: () => {
            queryClient.invalidateQueries(['reports', _id])
        },
        ...options,
    }

    return useMutation<DailyReport, unknown, DailyReport>(
        (report) => axios.put('http://localhost:8080/api/daily-reports/' + _id, report).then((res) => res.data),
        opt
    )
}

export default useUpdateDailyReport
