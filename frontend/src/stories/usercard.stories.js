import React from 'react';
import UserCard from "../components/usercard"

export default {
  title: "04 UserCard",
  component: UserCard
}

const Template = (args) => <UserCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  // label: 'Button',
};