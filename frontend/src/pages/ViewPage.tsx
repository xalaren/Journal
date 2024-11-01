import { Loader } from "../components/Loader";
import { MainComponent } from "../components/MainComponent";

export function ViewPage() {
    return (
        <MainComponent>
            ViewPage
            <Loader />
        </MainComponent>
    );
}