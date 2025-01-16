'use client';

import { useState } from 'react';
import {
  IconHome2,
  IconLetterCase,
  IconPhotoScan,
  IconShape,

} from '@tabler/icons-react';
import { Stack, Tooltip, UnstyledButton } from '@mantine/core';
import { useSelectPanelContext } from '@/app/state/context/SelectPanelContext';
import style from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={style.link} data-active={active || undefined}>
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Background' },
  { icon: IconLetterCase, label: 'Text' },
  { icon: IconPhotoScan, label: 'Background Image' },
  { icon: IconShape, label: 'Shapes' },

];

export function Navbar() {
  const [active, setActive] = useState(0);
  const { setSelected } = useSelectPanelContext();

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        setSelected(link.label);
      }}
    />
  ));
  return (
    <nav className={style.navbar} style={{ height: '93vh', overflow: 'hidden', minWidth: '6vw', maxWidth: '6vw' }}>
      <div className={style.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
    </nav>
  );
}
