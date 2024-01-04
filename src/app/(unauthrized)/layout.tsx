function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            unauthrized layout
            {children}
        </div>
    );
}

export default Layout;
