interface BadgeProps {
    text: string;
    color: string;
}

export function Badge({ text, color }: BadgeProps) {
    return (
        <div className="flex items-center px-2 py-1 w-max  text-white rounded-md" style={{ background: color }}>
            {text}
        </div>
    );
}