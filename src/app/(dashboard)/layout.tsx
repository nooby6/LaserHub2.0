export default function DashboardLayout ({
    children,

}: Readonly<{
    children: React.ReactNode;
}>) {
    return 
            <div className="h-screen flex">{children}
            {/* LEFT */}
            <div className=">l</div>
            {/* RIGHT */}
            <div className=">r</div>
            </div>;
}