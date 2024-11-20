// 要快速回覆的話，要在文字後面加東西
export default async event => {
  event.reply({
    type: 'text',
    text: '你要查哪個縣市的ubike',
    // 快速回覆選項的設定(用陣列)，按鈕的行為可以是
    // 1.傳送訊息 (message) 2.跳轉連結 (uri) 3. Postback 資料 (postback)
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            // 按下去後使用者會傳送出的文字
            text: 'ubike:taipei',
            // 按鈕顯示文字
            label: '台北市'
          }
        },
        {
          type: 'action',
          action: {
            type: 'uri',
            uri: 'https://x.com',
            label: '網站'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: 'postback',
            data: 'aaa'
          }
        }
      ]
    }
  })
}
