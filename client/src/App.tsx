import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewReportPage from './pages/new-report/components/NewReportPage'
import Appbar from './commons/components/ui/Appbar'

function App() {
    return (
        <Router>
            <Appbar />
            <Routes>
                <Route path={'/'} element={<NewReportPage />} />
            </Routes>
        </Router>
    )
}

export default App
