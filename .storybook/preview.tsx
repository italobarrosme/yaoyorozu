import '@/tailwind.css'
import React from 'react';
import { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="m-4 flex items-center justify-center">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    )
  ]
}

export default preview