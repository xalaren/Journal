import { ArrowOptions } from "../../enums/ArrowOptions";
import { Duty } from "../../models/Duty";
import { VioletArrowButton } from "../Buttons/VioletArrowButton";
import { VioletTransparentButton } from "../Buttons/VioletTransparentButton";

interface DutyCardProps {
    duty: Duty;
}

export function DutyCard({ duty }: DutyCardProps) {
    return (
        <section className="
            flex 
            flex-col 
            justify-between 
            gap-5 
            p-6 
            max-w-[700px] 
            min-h-[300px] 
            border-[2px] 
            border-gray-200 rounded-md 
        ">
            <>
                {duty ?
                    <>
                        <p className="text-3xl font-medium">
                            {duty.isNowActive && 'Today,'} {(new Date()).toLocaleDateString()} {duty.isArchive && '(archive)'}
                        </p>
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="icon-user text-2xl"></span>
                                <p>{duty.employee.lastname} {duty.employee.name[0]}. {duty.employee.middleName ? `${duty.employee.middleName[0]}. ` : ''}
                                    <span className="text-violet-500 font-medium">({duty.cost})</span>
                                </p>
                            </div>
                        </div>
                    </> :
                    <p>No data for now...</p>
                }

                <nav className="flex gap-5 justify-between items-center">
                    <VioletTransparentButton onClick={() => { }}>
                        Today
                    </VioletTransparentButton>
                    <div className="flex gap-2">
                        <VioletArrowButton
                            arrowOption={ArrowOptions.Left}
                            disabled={false}
                            onClick={() => { }}
                        />
                        <VioletArrowButton
                            arrowOption={ArrowOptions.Right}
                            disabled={false}
                            onClick={() => { }}
                        />
                    </div>
                </nav>
            </>

        </section>
    );
}