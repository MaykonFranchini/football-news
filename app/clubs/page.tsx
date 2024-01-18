import prisma from '@/infra/database'
import { ClubsCard } from '../components/clubsCard'
import { Header } from '../components/header'
import { logoFont } from '../components/header/logo'

export default async function Clubs() {

  const clubs = await prisma.club.findMany({
    orderBy: {
      name: 'asc'
    }
  })

  const serie_a  = clubs.filter(club => club.division === 'serie-a')
  const serie_b  = clubs.filter(club => club.division === 'serie-b')
  const europa  = clubs.filter(club => club.division === 'europa')

  
  
  return (
    <>
      <Header/>
      <h1 className={`${logoFont.className} text-2xl text-center mt-6 text-blue-900`}>Clubs</h1>

      <div className='mt-10 w-full flex flex-wrap justify-center gap-5'>
        <ClubsCard  clubsList={serie_a} division='Serie A'/>
        <ClubsCard  clubsList={serie_b} division='Serie B'/>
        <ClubsCard  clubsList={europa} division='Europa'/>
      </div>
    </>
  )
}