import * as cheerio from 'cheerio';
import axios from 'axios'

export const latestsNews = async(source_url: string) =>{
  const news = <any>[]
  const response = await axios.get(source_url)
  
  const html = response.data 
  const $ = cheerio.load(html)
    

    $(".feed-post-body", html).each(function():void {
      const title = $(this).find('._evt').text()
      const link = $(this).find('._evt').find('a').attr('href')
      const img_url = $(this).find('.feed-media-wrapper').find('img').attr('src')
     
      news.push({
        title,
        link,
        img_url,
        source_img: 'https://s2.glbimg.com/qAiq9Ny0KA4EmGK-aiRLQ8-y3-s=/0x0:2048x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/f/1/ctmjQ9SOypbLkmmJyMuw/ge.png',
        source_name: 'globoesporte.com'
      })
    })

  return news
}