import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://tw.rter.info/capi.php')
    // console.log(data)
    const result = await event.reply(data.USDJPY.Exrate.toString())
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
