import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewReportPage from './pages/new-report/components/NewReportPage'
import Appbar from './commons/components/ui/Appbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DailyReportContextProvider } from './commons/context/dailyReportContext'
import DailyReportPage from './pages/report/components/DailyReportPage'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <DailyReportContextProvider>
                <Router>
                    <Appbar />
                    <Routes>
                        <Route path={'/new'} element={<NewReportPage />} />
                        <Route path={'/reports/:id'} element={<DailyReportPage />} />
                    </Routes>
                </Router>
            </DailyReportContextProvider>
        </QueryClientProvider>
    )
}

export default App
