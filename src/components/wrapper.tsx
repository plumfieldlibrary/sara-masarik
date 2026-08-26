import { ListIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const NavLinks = [
    {
        title: "Library",
        url: "https://plumfieldlibrary.com"
    },
    {
        title: "Blog",
        url: "https://plumfieldmoms.com"
    },
    {
        title: "Press",
        url: "https://plumfieldpress.com"
    },
    {
        title: "The Card Catalog",
        url: "https://thecardcataloglibrarians.com"
    },
    {
        title: "Youtube",
        url: "https://www.youtube.com/@PlumfieldLibrary"
    }
]
//TODO: Finish Nav Bar
function Nav() {
    return (
        <Sheet>
            <nav className="sticky p-4 top-0 z-10 bg-foreground text-background shadow-sm flex items-center">
                <div className="justify-start">
                    <span className="font-bold text-lg">Sara Masarik</span>
                </div>
                <div className="justify-end items-center ml-auto flex flex-row gap-4">


                    <SheetTrigger asChild><ListIcon /></SheetTrigger>
                    <SheetContent showCloseButton={false} className="bg-background">
                        <div className="text-center flex flex-col p-8 gap-4">
                            {NavLinks.map((link) => (
                                <a href={link.url} target="_blank" className="text-2xl text-foreground hover:text-white">{link.title}</a>
                            ))}
                        </div>
                    </SheetContent>
                    <Button size={"lg"} className="bg-background text-foreground rounded-2xl hover:bg-background hover:text-background " asChild>
                        <a href="https://plumfieldlibrary.com">Library</a>
                    </Button>
                </div>
            </nav>
        </Sheet>
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