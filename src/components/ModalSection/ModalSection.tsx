import styles from './ModalSection.module.css';
import {Button, Input, List, Modal, Placeholder, Section} from '@xelene/tgui';

const PlaceholderImage = () => (
    <img
        alt="Telegram sticker"
        src="https://xelene.me/telegram.gif"
        className={styles.image}
    />
);

const ModalWithTrigger = () => (
    <Modal
        header={<Modal.Header />}
        trigger={<Button size="l" stretched>Open modal</Button>}
    >
        <List>
            <Placeholder
                header="This is nice modal, isn't it?"
                description="Swipe up to close"
            >
                <PlaceholderImage />
            </Placeholder>
            <Section>
                <Input header="Android title" placeholder="Title" />
                <Input header="Android title" placeholder="Url" />
                <Button size="l" stretched>Save</Button>
            </Section>
        </List>

    </Modal>
);

export const ModalSection = () => (
    <Section header="Section with modal">
        <Placeholder
            header="This is placeholder"
            description="And this is placeholder description"
            action={<ModalWithTrigger />}
        >
            <PlaceholderImage />
        </Placeholder>
    </Section>
);
