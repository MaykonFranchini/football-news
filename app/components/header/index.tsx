import { Logo } from '@/app/components/header/logo'
import Link from 'next/link'
import { logoFont } from '@/app/components/header/logo'

export function Header() {
  return(
    <header className='w-100 gap-6 p-3 h-20 flex border-b-2 border-gray-200'>
      <Logo/>
      <div className='flex items-center'>
        <Link href='/clubs' className={`${logoFont.className} text-blue-800 text-lg hover:text-blue-950`}>clubs</Link>
      </div>
    </header>
  )
}