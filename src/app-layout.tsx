import { AppShell, Group } from '@mantine/core';
import { Outlet } from 'react-router';
import { LanguageSelector } from './language-selector';

export const AppLayout = () => {
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header>
        <Group justify="space-between" h="100%" p="sm">
          <div>Logo</div>
          <LanguageSelector />
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
