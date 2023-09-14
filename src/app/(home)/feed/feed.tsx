import {
    Heart,
    MessageCircle,
    Repeat2,
    Send,
  } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import styles from "../styles.module.css";

export default function Feed() {
  return (
    <>
        <div>
            <Avatar>
              <AvatarImage
                src="https://github.com/ectorcunha.png"
                alt="@ectorcunha"
              />
              <AvatarFallback>EC</AvatarFallback>
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
          <div className={styles.bottomDivider}>
            <hr className="border-zinc-700 h-full m-3"/>
          </div>
    </>
  )
}
