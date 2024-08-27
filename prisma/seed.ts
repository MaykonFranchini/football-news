import { PrismaClient } from '@prisma/client'
import clubs from '../data.js'
import prisma from '../infra/database'

async function main() {
  await prisma.club.deleteMany()

  clubs.forEach(async (club)=> {
    try {
      console.log(`Creating ${club.name}...`)
      await prisma.club.create({
        data: {
          name: club.name,
          source_url: club.sourceUrl,
          badge_url: club.badgeUrl,
          division: club.division,
          next_match_url: club.nextMatchUrl
        }
      })
      await prisma.$disconnect()
    } catch (err) {
      console.log(err)
      await prisma.$disconnect()
      process.exit(1)
    }
  })
}

main()