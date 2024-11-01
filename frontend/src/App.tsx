import "./index.css"
import { Route, Routes } from "react-router"
import { Header } from "./components/Header"
import { ViewPage } from "./pages/ViewPage"
import { ViewPagePath } from "./paths/ViewPagePath"
import { ShedulePage } from "./pages/ShedulePage"
import { ShedulePagePath } from "./paths/ShedulePagePath"
import { EmployeeListPage } from "./pages/EmployeeListPage"
import { EmployeeListPagePath } from "./paths/EmployeeListPagePath"

function App() {
    return (
        <>
            <Header>
                {[
                    { text: 'Home', path: ViewPagePath },
                    { text: 'Shedule', path: ShedulePagePath },
                    { text: 'Employees', path: EmployeeListPagePath },
                ]}
            </Header>

            <Routes>
                <Route path={ViewPagePath} element={<ViewPage />}></Route>
                <Route path={ShedulePagePath} element={<ShedulePage />}></Route>
                <Route path={EmployeeListPagePath} element={<EmployeeListPage />}></Route>
            </Routes>
        </>
    )
}

export default App
