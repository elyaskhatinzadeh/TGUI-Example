import styles from './ModalSection.module.css';
import {Button, Input, List, Modal, Placeholder, Section} from '@xelene/tgui';
import {ModalHeader} from "@xelene/tgui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import {ModalClose} from "@xelene/tgui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import {Icon28Close} from "@xelene/tgui/dist/icons/28/close";

const PlaceholderImage = () => (
    <img
        alt="Telegram sticker"
        src="https://xelene.me/telegram.gif"
        className={styles.image}
    />
);

const ModalWithTrigger = () => (
    <Modal
        snapPoints={[1]}
        header={<ModalHeader after={<ModalClose><Icon28Close style={{color: 'var(--tgui--plain_foreground)'}} /></ModalClose>}>Only iOS header</ModalHeader>}
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
