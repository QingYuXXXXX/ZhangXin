import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@/react-i18next/i18n'
import '@/utils/rem'
process.env.NODE_ENV === 'development' && require('@/mock')

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}
