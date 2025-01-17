export default () => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://content2.kawasaki.com/ContentStorage/CKM/Products/5485/d289302f-0f0b-4c94-b56b-986f4d6e23b6.png?w=767',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'https://line.me/'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'KAWASAKI',
          weight: 'bold',
          size: 'xl'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Moto',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: 'Kawasaki Motors Taiwan',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5,
                  style: 'italic'
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '總經銷',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                  weight: 'bold'
                },
                {
                  type: 'text',
                  text: '台崎重車股份有限公司',
                  wrap: true,
                  color: '#999999',
                  size: 'sm',
                  flex: 5
                }
              ]
            }
          ]
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: 'WEBSITE',
            uri: 'https://www.kawasaki-motors.com/ja-jp'
          }
        }
      ],
      flex: 0
    }
  }
}
