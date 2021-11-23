import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ForPressHero } from './for-press-hero';

export default {
  title: 'Components/ForPressHero',
  component: ForPressHero,
} as ComponentMeta<typeof ForPressHero>;

const Template: ComponentStory<typeof ForPressHero> = (args) => {
  return <ForPressHero {...args}/>;
};

export const Default = Template.bind({});

Default.parameters = {
  layout: 'fullscreen'
};
