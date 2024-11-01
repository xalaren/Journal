import { Route, Routes } from "react-router"
import { Header } from "./components/Header"
import "./index.css"
import { ViewPage } from "./pages/ViewPage"
import { ViewPagePath } from "./paths/ViewPagePath"
import { EditorPage } from "./pages/EditorPage"
import { EditorPagePath } from "./paths/EditorPagePath"

function App() {
    return (
        <>
            <Header>
                {[
                    { text: 'Home', path: ViewPagePath },
                    { text: 'Editor', path: EditorPagePath },
                ]}
            </Header>

            <Routes>
                <Route path={ViewPagePath} element={<ViewPage />}></Route>
                <Route path={EditorPagePath} element={<EditorPage />}></Route>
            </Routes>
        </>
    )
}

export default App
