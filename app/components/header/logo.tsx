import Image from 'next/image'
import Link from 'next/link'
import logoImg from '@/public/logo.png'
import { Salsa } from 'next/font/google'

export const logoFont = Salsa({
  subsets: ['latin'],
  weight: "400",
})


export function Logo() {
  return (
    <>
      <Link href='/' className='flex gap-2 items-center'>
        <Image
        src={logoImg}
        alt='Football News badge'
        width={50}
        height={50}
        />
        <p className={`text-blue-900 text-xl ${logoFont.className} `}>FOOTBALL NEWS</p>
      </Link>
    </>
  )
}