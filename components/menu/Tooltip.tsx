"use client";
import { useRouter, usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { FaUserLock } from "react-icons/fa6";
import { IconWrapper } from "./IconWrapper";
export default function ListMenu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <button className="font-bold text-md">Project</button>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <Listbox aria-label="Menu" onAction={(key) => router.push(String(key))}>
          <ListboxItem
            key="authentication"
            color="primary"
            variant="flat"
            className="w-72"
            description="การยืนยันตัวตนทางอิเล็กทรอนิกส์"
            startContent={
             <IconWrapper className="bg-success/10 text-success">
                <FaUserLock size={22}/>
             </IconWrapper>
            }
          >
            Authentication
          </ListboxItem>
        </Listbox>
      </PopoverContent>
    </Popover>
  );
}
