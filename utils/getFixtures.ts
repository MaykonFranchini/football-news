import * as cheerio from 'cheerio';
import axios from 'axios'

export const getFixtures = async(next_match_url: string) =>{
  const fixtures = <any>[]
  const response = await axios.get(next_match_url)
  
  const html = response.data 
  const $ = cheerio.load(html)
    

  $(".Table__TBODY",".Table__Scroller", html).each(function() {
    
    $(this).find('.Table__TR').each(function() {
      const day = $(this).find('.matchTeams').text()
      const home = $(this).find('.local').find('a').text()
      const away = $(this).find('.away').find('a').text()
      const time = $(this).find('.Table__TD').find('.AnchorLink').text()
      const league = $(this).find('.Table__TD').find('span').text()
      const convert_time = time.split('').slice(-5).join('')
      fixtures.push({
        home,
        away,
        day,
        time: convert_time,
        league: league.replace('Volta', '').replace('v', '').replace('Ida', '')
      })
    })
    
  })

  return fixtures
}