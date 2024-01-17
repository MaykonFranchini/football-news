import * as cheerio from 'cheerio';
import axios from 'axios'

export const topNews = async() =>{
  const news = <any>[]
  const response = await axios.get('https://onefootball.com/pt-br/inicio')
  
  const html = response.data 
  const $ = cheerio.load(html)

  $(".Gallery_gallery__teaser--mobile--xl__xyOSs", html).each(function() {
    const title = $(this).find('.NewsTeaser_teaser__title__OsMxr').text()
    const link = $(this).find('.NewsTeaser_teaser__content__BP26f').attr('href')
    const img_url = $(this).find('.ImageWithSets_of-image__picture__4hzsN').find('img').attr('src')
    const source_img = $(this).find('.NewsTeaser_teaser__publisherNameLogo__cuYQe').find('img').attr('src')
    const source_name = $(this).find('.NewsTeaser_teaser__publisherName__sm1ZN').text()
    

    news.push({
      title,
      link: 'https://onefootball.com' + link,
      img_url,
      source_img,
      source_name
    })
  })
    
  $(".Gallery_gallery__teaser--desktop--xs__A14oS", html).each(function() {
    const title = $(this).find('.NewsTeaser_teaser__title__OsMxr').text()
    const link = $(this).find('.NewsTeaser_teaser__content__BP26f').attr('href')
    const img_url = $(this).find('.ImageWithSets_of-image__picture__4hzsN').find('img').attr('src')
    const source_img = $(this).find('.NewsTeaser_teaser__publisherNameLogo__cuYQe').find('img').attr('src')
    const source_name = $(this).find('.NewsTeaser_teaser__publisherName__sm1ZN').text()
    
    const newUrl = img_url!.split('w=64&h=64')
    
    const resizedImgUrl = `${newUrl[0]}w=300&h=300${newUrl[1]}`
    

    news.push({
      title,
      link: 'https://onefootball.com' + link,
      img_url: resizedImgUrl,
      source_img,
      source_name
    })
  }) 

  return news
}
