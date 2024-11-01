import { Route, Routes } from "react-router"
import { Header } from "./components/Header"
import "./index.css"
import { ViewPage } from "./pages/ViewPage"
import { ViewPagePath } from "./paths/ViewPagePath"
import { ShedulePage } from "./pages/ShedulePage"
import { ShedulePagePath } from "./paths/ShedulePagePath"

function App() {
    return (
        <>
            <Header>
                {[
                    { text: 'Home', path: ViewPagePath },
                    { text: 'Shedule', path: ShedulePagePath },
                ]}
            </Header>

            <Routes>
                <Route path={ViewPagePath} element={<ViewPage />}></Route>
                <Route path={ShedulePagePath} element={<ShedulePage />}></Route>
            </Routes>
        </>
    )
}

export default App
