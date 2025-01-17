// 要快速回覆的話，要在文字後面加東西
export default async event => {
  event.reply({
    type: 'text',
    text: '你要搜尋哪種車款',
    // 快速回覆選項的設定(用陣列)，按鈕的行為可以是
    // 1.傳送訊息 (message) 2.跳轉連結 (uri) 3. Postback 資料 (postback)
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            // 按下去後使用者會傳送出的文字
            text: 'NINJA ZX 車系',
            uri: 'http://www.tw-kawasaki.com/moto_list.php#NINJA',
            // 按鈕顯示文字
            label: 'NINJA ZX 車系'
          }
        },
        {
          type: 'action',
          action: {
            type: 'uri',
            text: 'NINJA 車系',
            uri: 'http://www.tw-kawasaki.com/moto_list.php#NINJA',
            label: 'NINJA 車系'
          }
        },
        {
          type: 'action',
          action: {
            type: 'uri',
            text: 'Z 車系',
            uri: 'http://www.tw-kawasaki.com/moto_list.php#NINJA',
            label: 'Z 車系'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: 'postback',
            data: 'end'
          }
        }
      ]
    }
  })
}
