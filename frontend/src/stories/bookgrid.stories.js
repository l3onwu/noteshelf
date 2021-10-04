import React from 'react';
import BookGrid from "../components/bookgrid"

export default {
  title: "02 Book Grid",
  component: BookGrid
}

const Template = (args) => <BookGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  // label: 'Button',
};