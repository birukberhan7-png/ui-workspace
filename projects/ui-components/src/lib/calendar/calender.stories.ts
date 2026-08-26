import { Meta, StoryObj } from '@storybook/angular-vite';
import { Calendar } from './calendar';


const meta: Meta<Calendar> = {

  title: 'Forms/Date Picker',

  component: Calendar,

  tags:['autodocs']

};

export default meta;

type Story = StoryObj<Calendar>;

export const DateFrom: Story = {

  args:{
    label:'Date From',
    value:'2025-08-17'
  }

};

export const DateTo: Story = {

  args:{
    label:'Date To',
    value:'2025-08-17'
  }

};