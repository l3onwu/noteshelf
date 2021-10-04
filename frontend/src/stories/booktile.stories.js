import React from "react";
import BookTile from "../components/booktile";

export default {
  title: "01 Book Tile",
  component: BookTile,
};

const Template = (args) => <BookTile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: "images/covers/dh.jpeg",
  author: "J.K Rowling",
  title: "Harry Potter and the Deathly Hallows",
  // label: 'Button',
};
