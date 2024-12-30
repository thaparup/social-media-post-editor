'use client'
import { Flex } from "@mantine/core";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle/ColorSchemeToggle";
import { Navbar } from "./components/Navbar/Navbar";
import { Welcome } from "./components/Welcome/Welcome";
import LeftHandPanel from "./components/LeftHandPanel/LeftHandPanel";
import { useSelector } from "react-redux";
import { RootState } from "./state/store/store";
import { use } from "react";


export default function HomePage() {


  return (
    <Flex direction="row" gap={12}>

      <Navbar />
      <LeftHandPanel />
    </Flex>
  );
}
