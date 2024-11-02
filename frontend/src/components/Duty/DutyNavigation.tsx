import { ArrowOptions } from "../../enums/ArrowOptions";
import { VioletArrowButton } from "../Buttons/VioletArrowButton";
import { VioletTransparentButton } from "../Buttons/VioletTransparentButton";

interface DutyNavigationProps {
    onTodayClick: () => void;
    onPrevClick: () => void;
    onNextClick: () => void;
    prevButtonDisabled: boolean;
    nextButtonDisabled: boolean;
}

export function DutyNavigation({ onTodayClick, onNextClick, onPrevClick, prevButtonDisabled, nextButtonDisabled }: DutyNavigationProps) {
    return (
        <nav className="flex justify-between items-center flex-wrap py-10 gap-y-10">
            <div className="flex gap-10">
                <p className="text-4xl font-medium">{new Date().toLocaleDateString()}</p>
                <VioletTransparentButton onClick={onTodayClick}>
                    Today
                </VioletTransparentButton>
            </div>
            <div className="flex gap-10 justify-between items-center flex-wrap">
                <div className="flex gap-2 ">
                    <VioletArrowButton
                        arrowOption={ArrowOptions.Left}
                        disabled={prevButtonDisabled}
                        onClick={onPrevClick}
                    />
                    <VioletArrowButton
                        arrowOption={ArrowOptions.Right}
                        disabled={nextButtonDisabled}
                        onClick={onNextClick}
                    />
                </div>
            </div>
        </nav>
    );
}