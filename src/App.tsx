import React, {useState} from 'react';

import {
    Accordion,
    AppRoot,
    Blockquote,
    Cell,
    Input,
    List,
    Radio,
    Section,
    Select,
    Selectable,
    Steps,
    Switch,
    TabsList
} from '@xelene/tgui';
import { CellSection } from './components/CellSection';
import { FormSection } from './components/FormSection/FormSection';
import { BannerSection } from './components/BannerSection';
import { TimelineSection } from './components/TimelineSection/TimelineSection';
import { TooltipSection } from './components/TooltipSection/TooltipSection';
import { ModalSection } from './components/ModalSection/ModalSection';
import {Icon32ProfileColoredSquare} from "@xelene/tgui/dist/icons/32/profile_colored_square";
import {Icon28AddCircle} from "@xelene/tgui/dist/icons/28/add_circle";
import {ButtonCell} from "@xelene/tgui/dist/components/Blocks/Cell/components/ButtonCell/ButtonCell";
import {TabsItem} from "@xelene/tgui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";
import {
    AccordionSummary
} from "@xelene/tgui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import {
    AccordionContent
} from "@xelene/tgui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";
import {Icon20Copy} from "@xelene/tgui/dist/icons/20/copy";
import {Icon20QuestionMark} from "@xelene/tgui/dist/icons/20/question_mark";
import {Icon24Channel} from "@xelene/tgui/dist/icons/24/channel";
import {Icon16Cancel} from "@xelene/tgui/dist/icons/16/cancel";
import {Icon24Cancel} from "@xelene/tgui/dist/icons/24/cancel";
import {Icon28Close} from "@xelene/tgui/dist/icons/28/close";
import {Icon28CloseAmbient} from "@xelene/tgui/dist/icons/28/close_ambient";
import {Icon36Backspace} from "@xelene/tgui/dist/icons/36/backspace";
import {Icon28Edit} from "@xelene/tgui/dist/icons/28/edit";

export const App = () => {
    const [drop, setDrop] = useState(false)
    return (
        <AppRoot>
            <List>
                <TabsList>
                    <TabsItem
                        onClick={function noRefCheck() {
                        }}
                        selected
                    >
                        Label 1
                    </TabsItem>
                    <TabsItem
                        onClick={function noRefCheck() {
                        }}
                    >
                        Label 2
                    </TabsItem>
                    <TabsItem
                        onClick={function noRefCheck() {
                        }}
                    >
                        Label 3
                    </TabsItem>
                </TabsList>


                <Section>
                    <Cell
                        Component="label"
                        before={<Radio name="radio" value="1"/>}
                        description="Pass Component='label' to Cell to make it clickable."
                        multiline
                    >
                        First radio
                    </Cell>
                    <Cell
                        Component="label"
                        before={<Radio name="radio" value="2"/>}
                        description="Pass Component='label' to Cell to make it clickable."
                        multiline
                    >
                        Second radio
                    </Cell>
                </Section>

                <Section footer="Pass Component='label' to Cell to make it clickable.">
                    <Cell
                        Component="label"
                        after={<Switch defaultChecked/>}
                    >
                        First radio
                    </Cell>
                </Section>


                <Steps
                    count={3}
                    progress={1}
                />

                <Section>

                    <Cell Component="label" before={<Selectable defaultChecked name="group" value="1"/>}
                          description="Pass Component='label' to Cell to make it clickable." multiline>
                        First radio
                    </Cell>
                    <Cell Component="label" before={<Selectable name="group" value="2"/>}
                          description="Pass Component='label' to Cell to make it clickable." multiline>
                        Second radio
                    </Cell>
                </Section>
                <Section>

                    <Cell
                        before={<Icon32ProfileColoredSquare/>}
                    >
                        Send text
                    </Cell>
                    <Cell
                        before={<Icon32ProfileColoredSquare/>}
                    >
                        Send photo
                    </Cell>
                    <ButtonCell onClick={() => console.log('a')} before={<Icon28AddCircle/>}>
                        Create Ad
                    </ButtonCell>
                </Section>

                <Section>


                    <Accordion onChange={() => setDrop(prevState => !prevState)} expanded={drop}>
                        <AccordionSummary before={<Icon28Edit/>}>
                            Link title
                        </AccordionSummary>
                        <AccordionContent>
                            <Input placeholder="Title" status="error"/>
                            <Input placeholder="Url"/>
                        </AccordionContent>
                    </Accordion>

                    <ButtonCell onClick={() => console.log('a')} before={<Icon28AddCircle/>}>
                        Create Ad
                    </ButtonCell>
                </Section>

<Section
                header='Application Launch Data'
                footer='These pages help developer to learn more about current launch information'
            >
                    <Cell
                        after={<>
                            <Select before={<>a</>}>
                                <option>Hello</option>
                                <option>Okay</option>
                            </Select>
                        </>}
                        subtitle='User data, chat information, technical data'>Select lang</Cell>
            </Section>


            <Section
                header='Application Launch Data'
                footer='These pages help developer to learn more about current launch information'
            >
                <Input placeholder='ok' />
            </Section>

                <Section>

                    <Blockquote>
                        <Icon20QuestionMark />
                        <Icon20Copy />
                        <Icon24Channel />
                        <Icon16Cancel />
                        <Icon24Cancel />
                        <Icon32ProfileColoredSquare />
                        <Icon28Close />
                        <Icon28CloseAmbient />
                        <Icon36Backspace />
                        <Icon28Edit  />
                        The accordion's basic form is believed to have been invented in Berlin, in 1822, by
                        Christian Friedrich Ludwig Buschmann, although one instrument was discovered in 2006
                        that appears to have been built earlier. The earliest history of the accordion in
                        Russia is poorly documented.
                    </Blockquote>

                </Section>
                <CellSection/>
                <FormSection/>
                <BannerSection/>
                <TimelineSection/>
                <TooltipSection/>
                <ModalSection/>
            </List>
        </AppRoot>
    )
}
