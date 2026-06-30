import { ListIcon } from "lucide-react";
import type { ReactNode } from "react";
import Link from "./Link";
import { Button } from "./ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "./ui/navigation-menu";
//TODO: Finish Nav Bar
function Nav() {
    return (
        <nav className="sticky p-4 top-0 z-10 bg-foreground text-background shadow-sm flex items-center">
            <div className="justify-start">
                <span className="font-bold">Sara Masarik</span>
            </div>
            <div className="justify-end items-center ml-auto flex flex-row gap-4">

                <NavigationMenu className="mr-auto">
                    <NavigationMenuList>
                        <NavigationMenuItem >
                            <NavigationMenuTrigger>
                                <ListIcon />
                            </NavigationMenuTrigger>
                            <NavigationMenuContent  >
                                <NavigationMenuLink asChild>
                                    <Link className="w-40" href="https://plumfieldmoms@gmail.com" utmContent="navbar">Blog</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild >
                                    <Link className="w-40" href="https://plumfieldpress.com" utmContent="navbar">Press</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild >
                                    <Link className="w-40" href="https://thecardcataloglibrarians.com" utmContent="navbar">The Card Catalog</Link>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Button className="bg-background text-foreground rounded-2xl hover:bg-background hover:text-background " asChild>
                    <a href="https://plumfieldlibrary.com">Library</a>
                </Button>
            </div>
        </nav>
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