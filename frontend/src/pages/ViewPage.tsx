import { DutyCardList } from "../components/Duty/DutyCardList";
import { DutyNavigation } from "../components/Duty/DutyNavigation";
import { MainComponent } from "../components/MainComponent";

export function ViewPage() {
    return (
        <MainComponent>
            <DutyNavigation
                onTodayClick={() => { }}
                onNextClick={() => { }}
                onPrevClick={() => { }}
                prevButtonDisabled={true}
                nextButtonDisabled={true}
            />
            <DutyCardList>
                {[
                    {
                        id: 1,
                        cost: 400,
                        date: new Date(),
                        employee: {
                            id: 1,
                            lastname: 'Imanov',
                            name: 'Valera',
                            middleName: 'A',
                            specialization: {
                                id: 1,
                                name: 'Developer',
                                color: '#6f47ff'
                            }
                        }
                    },
                    {
                        id: 2,
                        cost: 400,
                        date: new Date(),
                        employee: {
                            id: 1,
                            lastname: 'Imanov',
                            name: 'Valera',
                            middleName: 'A',
                            specialization: {
                                id: 1,
                                name: 'Developer',
                                color: '#00c777'
                            }
                        }
                    },
                    {
                        id: 3,
                        cost: 400,
                        date: new Date(),
                        employee: {
                            id: 1,
                            lastname: 'Imanov',
                            name: 'Valera',
                            middleName: 'A',
                            specialization: {
                                id: 1,
                                name: 'Developer',
                                color: '#0067c7'
                            }
                        }
                    }
                ]}
            </DutyCardList>
        </MainComponent>
    );
}