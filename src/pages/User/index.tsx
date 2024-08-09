// import Header from './Header'
import Main from './Main'
import { useEffect } from 'react'

export default function User() {
  useEffect(function () {
    const headerWrapper = document.querySelector('#header>div')
    if (headerWrapper) {
      headerWrapper.classList.add('!w-full')
      headerWrapper.classList.add('!px-12')
    }
    return function () {
      if (headerWrapper) {
        headerWrapper.classList.remove('!w-full')
        headerWrapper.classList.remove('!px-12')
      }
    }
  }, [])

  return (
    <>
      {/* <Header /> */}
      <Main />
    </>
  )
}
