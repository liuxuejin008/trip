import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import { Suspense } from 'react'

export default function Main() {
  return (
    <div className='flex'>
      <Menu />
      <div className="flex-1 min-w-[760px] box-border bg-dark-light p-7">
        <div className="rounded-3xl bg-white h-full box-border pt-12 pr-14 pl-11">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
