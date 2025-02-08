import { Box } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import IndexLayout from "./_layout";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
    <IndexLayout>
      <Box>Index</Box>
      <Outlet />
    </IndexLayout>
  );
}
