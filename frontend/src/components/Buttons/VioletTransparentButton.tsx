interface VioletTransparentButtonProps {
    children: string;
    onClick: () => void;
}

export function VioletTransparentButton(props: VioletTransparentButtonProps) {
    return (
        <button
            className="
            px-4
            min-h-8
            bg-violet-100
            text-violet-500
            font-medium
            rounded-[5px]
            hover:bg-violet-500
            hover:text-white
            transition-colors
            duration-300
            ease-in-out
            "
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}