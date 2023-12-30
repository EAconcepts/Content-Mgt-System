import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { XCircleIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ModalProps } from "@/@types";

export function Modal({
  children,
  showXIcon,
  customCloseIcon,
  customCloseClass,
  width,
  padding,
  className, 
  triggerBtn
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerBtn}
      </DialogTrigger>
      <DialogContent
        style={{ width: `${width}px`, padding: `${padding}px` }}
        className={twMerge( `max-w-[90vw] max-h-[90svh] rounded-lg overflow-auto`, className)}
      >
        {showXIcon && (
          <DialogClose className="w-0 h-0">
            <span
              className={`${
                customCloseIcon
                  ? customCloseClass
                  : "   absolute top-[48px] right-[78px] border-gray-400 hover:border-primary transition-all duration-200 ease-in-out hover:text-primary scale-75"
              }`}
            >
              {customCloseIcon ? (
                customCloseIcon
              ) : (
                <XCircleIcon height={32} width={32} />
              )}
            </span>
          </DialogClose>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
}
