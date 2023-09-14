import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewPost() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-neutral-500 flex-1 font-light hover:cursor-pointer">
          Start a thread...
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-row gap-2">
          <Avatar>
            <AvatarImage
              src="https://github.com/ectorcunha.png"
              alt="@ectorcunha"
            />
            <AvatarFallback>EC</AvatarFallback>
          </Avatar>
          <div className="text-xs">
            <DialogTitle className="text-sm">ectorcunha</DialogTitle>

            <input
              className="bg-transparent placeholder-zinc-700 focus:outline-none"
              type="text"
              name="start_a_thread"
              id="start_a_thread"
              placeholder="Start a thread..."
            />
          </div>
        </DialogHeader>

        <div className="flex justify-between items-end">
          <span className="text-zinc-700 text-sm">Anyone can reply</span>
          <Button
            disabled
            variant="outline"
            className="rounded-xl text-neutral-100"
          >
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
