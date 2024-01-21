'use client'

import { ThemeProvider } from 'next-themes'

const Theme = ({ component, ...props }) => {
  return (
    <ThemeProvider>
      <component { ...props } />
    </ThemeProvider>
  )
}

export default Theme