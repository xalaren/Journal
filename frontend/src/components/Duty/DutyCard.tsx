import { Duty } from "../../models/Duty";
import { Badge } from "../Badge";

interface DutyCardProps {
    duty: Duty;
    onClick: () => void;
}

export function DutyCard({ duty }: DutyCardProps) {
    return (
        <section className="
            p-10 
            max-w-[400px] 
            border-[2px] 
            border-gray-200 
            rounded-md 
            hover:border-violet-500
            ease-in-out
            duration-300
            select-none
        ">
            <div className="flex gap-5 mb-5">
                <span className="icon-user text-3xl"></span>
                <p className="text-xl font-medium">
                    {duty.employee.lastname} {duty.employee.name ? `${duty.employee.name[0]}. ` : ''} {duty.employee.middleName ? `${duty.employee.middleName[0]}. ` : ''}
                </p>
            </div>
            <Badge text={duty.employee.specialization.name} color={duty.employee.specialization.color} />
        </section>
    );
}