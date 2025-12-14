import {
  Button,
  Container,
  Group,
  Image,
  List,
  Modal,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import image from './assets/under-construction.svg';
import { ContactForm } from './contact-form';
import classes from './landing.module.css';

export const Landing = () => {
  const [showContact, setShowContact] = useState(false);
  const { t } = useTranslation();

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>{t('worker-coop')}</span>
          </Title>
          <Text c="dimmed" mt="md">
            {t('description')}
          </Text>
          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>{t('item-one')}</b> – {t('item-one-desc')}
            </List.Item>
            <List.Item>
              <b>{t('item-two')}</b> – {t('item-two-desc')}
            </List.Item>
            <List.Item>
              <b>{t('item-three')}</b> – {t('item-three-desc')}
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              onClick={() => setShowContact(true)}
            >
              {t('contact')}
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              {t('view-services')}
            </Button>
          </Group>
        </div>
        <Image src={image} className={classes.image} />
      </div>
      <Modal
        opened={showContact}
        onClose={() => setShowContact(false)}
        title={t('contact')}
      >
        <ContactForm />
      </Modal>
    </Container>
  );
};
