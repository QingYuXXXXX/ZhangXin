import React from 'react'
import i18n from 'i18next'

function LanguageChange() {
  return (
    <>
      <button onClick={() => i18n.changeLanguage('en')}>change</button>
    </>
  )
}
export default LanguageChange
