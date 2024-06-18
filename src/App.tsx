import React from 'react';

import {AppRoot, Cell, List, Radio, Section, Selectable, Steps, Switch, TabsList} from '@xelene/tgui';
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

export const App = () => (
    <AppRoot>
        <List>
            <TabsList>
                <TabsItem
                    onClick={function noRefCheck(){}}
                    selected
                >
                    Label 1
                </TabsItem>
                <TabsItem
                    onClick={function noRefCheck(){}}
                >
                    Label 2
                </TabsItem>
                <TabsItem
                    onClick={function noRefCheck(){}}
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
                    after={<Switch defaultChecked />}
                >
                First radio
                </Cell>
            </Section>
                


           

            <Steps
                count={3}
                progress={1}
            />

            <Section>

                <Cell Component="label" before={<Selectable defaultChecked name="group" value="1" />} description="Pass Component='label' to Cell to make it clickable." multiline>
                    First radio
                </Cell>
                <Cell Component="label" before={<Selectable name="group" value="2" />} description="Pass Component='label' to Cell to make it clickable." multiline>
                    Second radio
                </Cell>
            </Section>
            <Section>

                <Cell
                    before={<Icon32ProfileColoredSquare />}
                >
                    Send text
                </Cell>
                <Cell
                    before={<Icon32ProfileColoredSquare />}
                >
                    Send photo
                </Cell>
                <ButtonCell onClick={() => console.log('a')} before={<Icon28AddCircle />}>
                    Create Ad
                </ButtonCell>
            </Section>

            <CellSection />
            <FormSection />
            <BannerSection />
            <TimelineSection />
            <TooltipSection />
            <ModalSection />
        </List>
    </AppRoot>
);
