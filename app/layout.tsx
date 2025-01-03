import '@mantine/core/styles.css';

import React from 'react';
import { Provider } from 'react-redux';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Header from './components/Header/Header';
import { BackgroundPanelContextProvider } from './state/context/BackgroundPanelContext';
import { SelectPanelContextProvider } from './state/context/SelectPanelContext';
import StoreProvider from './StoreProvider';

export const metadata = {
  title: 'Social Media Post Editor',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <StoreProvider>
          <MantineProvider theme={theme}>
            <SelectPanelContextProvider>{children}</SelectPanelContextProvider>
          </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
