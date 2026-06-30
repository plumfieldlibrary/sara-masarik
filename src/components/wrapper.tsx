import type { ReactNode } from "react";
//TODO: Finish Nav Bar
function Nav() {
    return (
        <nav className="sticky top-0 left-0"></nav>
    )
}

export function Wrapper({ children }: { children: ReactNode }) {
    return (
        <>
            <Nav />
            <div className="m-auto w-full md:w-[70%] pt-8 px-6 pb-6">
                {children}
            </div>
        </>
    )
}