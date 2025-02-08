import { Stack } from "@chakra-ui/react";
import {  NavLink } from "@remix-run/react";
import { ReactNode } from "react";

interface IndexLayoutProps {
  children: ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <div>
      <Stack direction={"row"}>
        {pageList.map((e) => (
          <NavLink key={e.id} to={e.link} 
          className={(isActive)=>isActive && "active" }
          >
            {e.title}
          </NavLink>
        ))}
      </Stack>
      {children}
    </div>
  );
}

const pageList = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Orders",
    link: "/orders",
  },
  {
    id: 3,
    title: "Users",
    link: "/users",
  },
  {
    id: 4,
    title: "Tickets",
    link: "/tickets",
  },
  {
    id: 5,
    title: "Events",
    link: "/events",
  },
  {
    id: 6,
    title: "Categories",
    link: "/categories",
  },
];
