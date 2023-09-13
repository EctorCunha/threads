import Image from "next/image";
import threads from "@/assets/threads.svg";
import { HomeIcon, Search, PenSquare, Heart, User } from "lucide-react";
import Link from "next/link";
import DropdownMenuHome from "./dropdown";
import HomePost from "./post/post";

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

export default function Home() {
  return (
    <main>
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
      <article className="max-w-lg m-auto">
        <section>
          <HomePost />
        </section>
        <hr className="mt-4 h-[0.5px] opacity-20" />
      </article>
    </main>
  );
}
