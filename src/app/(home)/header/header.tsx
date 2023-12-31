import Image from "next/image";
import threads from "@/assets/threads.svg";
import Link from "next/link";
import DropdownMenuHome from "@/app/(home)/dropdown/index";
import { HomeIcon, Search, PenSquare, Heart, User } from "lucide-react";

export default function Header() {
  const menus = [
    {
      Logo: HomeIcon,
      alt: "Sua página inicial",
      route: "/",
    },
    {
      Logo: Search,
      alt: "Pesquise coisas de seu interesse",
      route: "/search",
    },
    {
      Logo: PenSquare,
      alt: "O que você está pensando",
      route: "/post",
    },
    {
      Logo: Heart,
      alt: "Atividades",
      route: "/activity",
    },
    {
      Logo: User,
      alt: "Seu perfil",
      route: "/user",
    },
  ];
  return (
    <div>
      <nav className="flex justify-between items-center py-1 px-6">
        <Image src={threads} height={32} alt="Logo do Threads" />
        <ul className="flex">
          {menus.map((menu) => (
            <li
              key={menu.alt}
              title={menu.alt}
              className="px-7 py-5 hover:bg-neutral-800 rounded-xl transition-all duration-300 ease-in-out"
            >
              <Link href={menu.route}>
                <menu.Logo size={28} className="text-neutral-600" />
              </Link>
            </li>
          ))}
        </ul>
        <DropdownMenuHome />
      </nav>
    </div>
  );
}
