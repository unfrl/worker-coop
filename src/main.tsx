import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { AppLayout } from './app-layout.tsx';
import './i18n.ts';
import { Landing } from './landing.tsx';

const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [{ index: true, Component: Landing }],
  },
]);

createRoot(document.getElementById('root')!).render(
  <MantineProvider defaultColorScheme="auto">
    <RouterProvider router={router} />
    <ColorSchemeScript />
  </MantineProvider>,
);
