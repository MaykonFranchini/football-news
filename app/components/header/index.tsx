import { Logo } from '@/app/components/header/logo'
export function Header() {
  return(
    <header className='w-100 p-3 h-20 flex align-center border-b-2 border-gray-200'>
      <Logo/>
    </header>
  )
}