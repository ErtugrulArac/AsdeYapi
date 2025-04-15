"use client"

import * as React from "react"
import { RiHome4Line } from "react-icons/ri";

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex   gap-4">

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white max-md:text-xs py-1 px-2 font-bold bg-transparent max-md:text-black  ">Menü</NavigationMenuTrigger>
          <NavigationMenuContent className="w-full  ">
            <ul className="grid gap-3 p-4 md:w-[400px] max-md:w-full lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
              <li className="row-span-3 ">
                <NavigationMenuLink className="bg-black text-white" asChild>
                  <a title="qr menü ana sayfa"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >

                    <div className="mb-2 mt-4 text-lg font-medium flex items-center flex-col ">
                      <RiHome4Line size={70} />
                      <p className="font-bold opacity-80">Anasayfa</p>
                    </div>

                    <p className="text-xs leading-tight text-muted-foreground text-white flex text-center opacity-70  ">
                      Anasayfa'ya dönerek Asde Yapı sistemlerimiz hakkında detaylı bilgi alabilirsiniz.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/hakkimizda" title="PVC Pencere&Kapı">
                Tanınmış markaların pvc kapı pencere sistemlerimiz.
              </ListItem>
              <ListItem href="/iletisim" rel="canonical" title="Cam Balkon">
                Asde Yapı sektör cam balkon sistemlerimiz.
              </ListItem>
              <ListItem href="https://www.arlanqrmenu.com/#yorumlar" title="Sineklik">
              Asde Yapı pileli, menteşeli sineklik sistemlerimiz.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a title="qr menü"
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"