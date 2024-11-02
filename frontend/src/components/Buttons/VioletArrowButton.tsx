import { ArrowOptions } from "../../enums/ArrowOptions";

interface VioletArrowButtonProps {
    arrowOption: ArrowOptions;
    disabled?: boolean;
    onClick: () => void;
}

export function VioletArrowButton(props: VioletArrowButtonProps) {
    return (
        <button
            onClick={!props.disabled ? props.onClick : () => { }}
            className={`
                w-[40px]
                h-[40px]
                rounded-full
                text-white
                text-xl
                ease-in-out
                duration-300
                ${!props.disabled && 'bg-violet-500 hover:bg-violet-700'}
                ${props.disabled && 'cursor-auto bg-gray-300'}
                ${props.arrowOption}
            `}>

        </button>
    );
}