
import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Header from './components/Header/Header';
import { SelectPanelContextProvider } from './state/context/SelectPanelContext';

export const metadata = {
  title: 'Social Media Post Editor',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/pie-chart-svgrepo-com.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          <SelectPanelContextProvider>

            {children}
          </SelectPanelContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
