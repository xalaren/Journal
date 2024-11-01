import { ArrowOptions } from "../../enums/ArrowOptions";
import { Duty } from "../../models/duty";
import { VioletArrowButton } from "../Buttons/VioletArrowButton";
import { VioletTransparentButton } from "../Buttons/VioletTransparentButton";

interface DutyCardProps {
    duty: Duty;
}

export function DutyCard() {
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
            <p className="
                text-3xl
                font-medium
            ">
                Today, {(new Date()).toLocaleDateString()}</p>
            <div>
                <p className="flex items-center gap-4">
                    <span className="icon-user text-2xl"></span>
                    <p>Imanov V.A. <span className="text-violet-500 font-medium">(950)</span></p>
                </p>
            </div>
            <nav className="
                flex
                gap-5
                justify-between
                items-center
            ">
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

        </section>
    );
}