export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section style={{ maxWidth: 400, margin: "50px auto" }}>
            {children}
        </section>
    );
}
