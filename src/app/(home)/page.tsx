import Image from "next/image";
import threads from "@/assets/threads.svg";
import {
  HomeIcon,
  Search,
  PenSquare,
  Heart,
  User,
  MessageCircle,
  Repeat2,
  Send,
} from "lucide-react";
import Link from "next/link";
import DropdownMenuHome from "./dropdown";
import HomePost from "./post/post";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";

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
        <hr className="my-4 h-[0.5px] opacity-20" />

        <section className={styles.container}>
          <div>
            <Avatar>
              <AvatarImage
                src="https://github.com/ectorcunha.png"
                alt="@ectorcunha"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className={styles.username}>ectorcunha</div>
          <div className={styles.time}>
            <span>10h</span>
            <span className="flex items-center">···</span>
          </div>
          <div className={styles.separator}>
            <span className="border-l-zinc-700 h-full border-l-[1px] block ml-5 my-2"></span>
          </div>
          <div className={styles.post}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              illo aliquam inventore soluta temporibus, nostrum veritatis ut
              voluptatibus reiciendis nam modi provident maiores quaerat
              obcaecati minima esse vel possimus necessitatibus!
            </p>
          </div>
          <div className={cn(styles.actions, "flex space-x-2 mt-3")}>
            <Heart />
            <MessageCircle />
            <Repeat2 />
            <Send />
          </div>
          <div className={cn(styles.likes_and_replies, " mt-3")}>
            <span className="text-sm text-neutral-500">
            23 likes
            </span>
          </div>
        </section>
      </article>
    </main>
  );
}
