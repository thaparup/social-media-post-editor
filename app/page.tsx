'use client';

import { Flex } from '@mantine/core';
import Header from './components/Header/Header';
import LeftHandPanel from './components/LeftHandPanel/LeftHandPanel';
import { Navbar } from './components/Navbar/Navbar';
import RightHandPanel from './components/RightHandPanel/RightHandPanel';

export default function HomePage() {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Header />
      <Flex direction="row" gap={12} style={{ height: '93vh', width: '100vw' }}>
        <Navbar />
        <LeftHandPanel />
        <RightHandPanel />
      </Flex>
    </div>
  );
}
