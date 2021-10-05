export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'noteshelf',
    values: [
      {
        name: 'noteshelf',
        value: '#282732',
      }
    ],
  },
}

import "../src/index.css";
