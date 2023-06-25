import { useMutation, UseMutationOptions, useQueryClient } from 'react-query'
import { DailyReport, NewReport } from '@shared/types'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const useCreateDailyReport = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const options: UseMutationOptions<DailyReport, unknown, NewReport> = {
        onSuccess: (data) => {
            queryClient.invalidateQueries('reports')
            navigate('/reports/' + data._id)
        },
    }

    return useMutation<DailyReport, unknown, NewReport>(
        (report) => axios.post('http://localhost:8080/api/daily-reports', report).then((res) => res.data),
        options
    )
}

export default useCreateDailyReport
