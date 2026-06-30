import Link from "@/components/Link";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";

export default function Main() {
    return (
        <Wrapper>
            <img src="/profile_picture.avif" className="m-auto pb-4" width="300" height="300" />
            <p>Hello! I am Sara, and I have been a lover of good and great books since my earliest years, largely because of the incredible example my grandfather set for me. As a bookworm introvert, my love for the classics was augmented by my study of Philosophy, Religion, and English at Hillsdale College and the University of Oxford. As a revert to the Catholic Church, I have found G. K. Chesterton, J. R. R. Tolkien, Edith Stein, and Flannery O’Connor to be some of the great influences on my intellectual and religious formation.</p>
            <p>I have the privilege of being the wife of Greg and the mama of Michael, Margaret (Greta), and John Patrick (Jack). Our little family lives in the woods of North East Wisconsin in a home dedicated to hospitality, libraries, and fellowship. We have four hobbit-sized dogs, Rosie, Cedar, Lizzy and Ginnie. Oh yeah, and we have a cat named Mowgli. Our home is affectionately called The Prancing Pony by our friends.</p>
            <p>I write at <Link href="https://plumfieldmoms.com" target="_blank" utmContent="homepage">Plumfield Moms</Link>, where we work to help moms embrace their vocations of marriage, motherhood, reading, education, and library building with confidence and joy.  I am a co-founder of <Link href="https://thecardcataloglibrarians.com" target="_blank" utmContent="homepage">The Card Catalog</Link>, an online community dedicated to serving private living books lending librarians as they build and maintain their libraries. And, I am also the co-founder of <a href="https://plumfieldpress.com" target="_blank">Plumfield Press</a>, a small publisher dedicated to brining lost gems back into print for libraries, families, and schools. You can find me on Instagram, Facebook, and in the free Plumfield Reads corner of the Biblioguides Online Community.</p>
            <p>And, in addition to the beautiful work I get to do online, my children and I do some of our best work in our passion project: The Plumfield Living Books Lending Library in North East Wisconsin.</p>
            <Button asChild><Link href="https://plumfieldlibrary.com" target="_blank" utmContent="homepage" className="w-full m-auto rounded-xl mb-4">Learn More</Link></Button>
            <p>I have been invited to speak about libraries, reading as mother culture, and book clubs at homeschool conferences, in classical schools, and in connection to my library outreach.</p>
            <p>You can email me at: <a href="mailto:plumfieldlivinglibrary@gmail.com" target="_blank">plumfieldlivinglibrary@gmail.com</a></p>

        </Wrapper>
    )
}