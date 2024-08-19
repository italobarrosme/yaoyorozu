import '../src/tailwind.css'
import React from 'react';
import { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="w-screen">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        {Story && <Story />}
      </div>
    )
  ],
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'Components'],
      },
    },
  },
}

export default preview