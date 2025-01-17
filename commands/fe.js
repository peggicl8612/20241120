import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/fe.js'
import fs from 'node:fs'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.kawasaki-motors.com/ja-jp')
    const $ = cheerio.load(data)
    // console.log($('#fe .card-title').text())
    const courses = []
    let i = 1
    $('.vehicleContainer').each(function () {
      if (i <= 9) {
        const t = template()
        const url = new URL($(this).find('img').attr('data-src'), 'https://www.kawasaki-motors.com/ja-jp').href
        const moto = $(this).find('.headThree').text().trim()
        // console.log(moto)
        t.hero.url = url
        // console.log(t.hero.url)
        t.body.contents[0].text = moto
        courses.push(t)
        i += 1
      }
    })

    // console.log(courses)

    const result = await event.reply({
      type: 'flex',
      altText: '車款查詢結果',
      contents: {
        type: 'carousel',
        contents: courses
      }
    })
    // console.log(result)

    if (process.env.DEBUG === 'true' && result.message) {
      fs.writeFileSync('./dump/fe.json', JSON.stringify(courses, null, 2))
    }
  } catch (error) {
    console.log('error')
    console.error(error)
  }
}
