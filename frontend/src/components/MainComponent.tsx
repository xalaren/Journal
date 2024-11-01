interface MainComponentProps {
    children: React.ReactNode;
}

export function MainComponent({ children }: MainComponentProps) {
    return (
        <main className="px-20">
            {children}
        </main>
    )
}