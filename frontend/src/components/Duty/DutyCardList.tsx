import { Duty } from "../../models/Duty";
import { DutyCard } from "./DutyCard";

interface DutyCardListProps {
    children: Duty[];
}

export function DutyCardList({ children }: DutyCardListProps) {
    return (
        <div className="flex flex-wrap gap-10 pb-10">
            {children.length > 0 ?
                children.map(duty => <DutyCard duty={duty} key={duty.id} onClick={() => { }} />) :
                <p>No duty for current date...</p>
            }
        </div>
    );
}