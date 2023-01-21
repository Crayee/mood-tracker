import { useState } from 'react'
import { Activities, DailyReport } from '../../../commons/types/types'

const useParameters = () => {
    const [parameters, setParameters] = useState<Partial<DailyReport['parameters']>>({
        activities: {},
        sleep: {
            duration: 1,
            intensity: 'medium',
        },
    })

    const update = (field: keyof DailyReport['parameters'], newValue: any) => {
        setParameters((prev) => {
            return { ...prev, [field]: newValue }
        })
    }

    const updateActivities = (field: keyof Activities, newValue: any) => {
        setParameters((prev) => {
            const { activities } = prev
            return { ...prev, activities: { ...activities, [field]: newValue } }
        })
    }

    return {
        parameters,
        update,
        activities: parameters.activities,
        updateActivities,
    }
}

export default useParameters
