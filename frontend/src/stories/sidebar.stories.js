import React from 'react';
import Sidebar from "../components/sidebar"

export default {
  title: "03 Sidebar",
  component: Sidebar
}

const Template = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  // label: 'Button',
};