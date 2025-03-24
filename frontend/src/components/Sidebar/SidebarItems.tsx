import { FiPieChart } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { LiaHandshake } from "react-icons/lia";
import { FaRegUserCircle } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { TbGavel } from "react-icons/tb";


export const SidebarItems = [
    {
        name: "Inicio",
        icon: <GoHome size={24} />,
        link: "/home"
    },
    {
        name: "Item menu 2",
        icon: <LiaHandshake size={24} />,
        link: "/home"
    },
    {
        name: "Item menu 3",
        icon: <BiDollarCircle size={24} />,
        link: "/home"
    },
    {
        name: "Item menu 4",
        icon: <TbGavel size={24} />,
        link: "/home"
    },
    {
        name: "Item menu 5",
        icon: <FaRegUserCircle size={24} />,
        link: "/home"
    },
    {
        name: "Item menu 6",
        icon: <FiPieChart size={24} />,
        link: "/home"
    },
]