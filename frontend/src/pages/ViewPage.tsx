import { DutyCard } from "../components/Duty/DutyCard";
import { MainComponent } from "../components/MainComponent";

export function ViewPage() {
    return (
        <MainComponent>
            <DutyCard duty={
                {
                    id: '1',
                    cost: 400,
                    date: new Date(),
                    employee: {
                        id: '1',
                        lastname: 'Imanov',
                        name: 'Valera',
                        middleName: 'A'
                    },
                    isNowActive: false,
                    isArchive: true
                }
            } />
        </MainComponent>
    );
}