import { Flex } from "@mantine/core";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle/ColorSchemeToggle";
import { Navbar } from "./components/Navbar/Navbar";
import { Welcome } from "./components/Welcome/Welcome";
import SelectedPanel from "./components/SelectedNavbarSection/SelectedPanel";


export default function HomePage() {
  return (
    <Flex direction="row" gap={12}>

      <Navbar />
      <SelectedPanel />
    </Flex>
  );
}
