import { useState } from "react";
import Links from "./Links"
import { Menu, X } from "lucide-react";

const links = [
    { id: 1, linkName: "Home", path: "www.google.com" },
    { id: 2, linkName: "About", path: "www.google.com" },
    { id: 3, linkName: "Services", path: "www.google.com" },
    { id: 4, linkName: "Contact", path: "www.google.com" },
    { id: 5, linkName: "Blogs", path: "www.google.com" },

]
const link = links.map((link) => <Links key={link.id} link={link}></Links>);
const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (

        <nav className=" flex justify-between items-center p-4 bg-slate-600">
            <div className="flex gap-3 items-center">
                <button className="md:hidden z-50" onClick={() => setOpen(!open)}>
                    {
                        open ? <X></X> : <Menu></Menu>
                    }
                </button>
                <ul className={`md:hidden absolute ${open ? 'top-14' : '-top-60'} bg-slate-800 p-3 rounded`}>
                    {link}
                </ul>
                <h2 className="text-xl">Logo</h2>
            </div>

            <ul className=" md:flex hidden">
                {
                    link
                }
            </ul>

            <div>
                <button className="btn">Sign In</button>
            </div>
        </nav>
    )
}

export default Navbar