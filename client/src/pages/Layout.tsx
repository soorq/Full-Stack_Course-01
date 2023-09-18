import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout: FC = () => {
  return (
	<div className='min-h-screen bg-slate-900 font-roboto text-white pb-20'>
    <Header />
    <div className='container'>
        {/* Общий лайаут приложения, куда мы будем встраивать все остальное, мы сказали что всегда будем встраивать все остальные компоненты. Шаблон, чтобы не использовать хедер и футер, и т.п. */}
        <Outlet />
    </div>
  </div>
  )
}

export default Layout