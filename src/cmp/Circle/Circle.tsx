import React, { useEffect } from 'react'

type Props = {
  text: string
}

const Canvas = ({ text }: Props) => {
  useEffect(() => {
    const canvas = document.getElementById('canv') as HTMLCanvasElement

    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        context.font = '600 35px Neausa'
        context.fillStyle = 'gold'
        context.textAlign = 'center'

        const string = text.toUpperCase() + ' '
        const angle = Math.PI * 2
        const radius = 17.5

        context.translate(150, 150)
        context.rotate((-6 * angle) / 2)

        for (let i = 0; i < string.length; i++) {
          context.rotate(angle / string.length)
          context.save()
          context.translate(0, -6 * radius)
          context.fillText(string[i], 0, 0)
          context.restore()
        }
      }
    }
  }, [])
  return (
    <div className='animate-spin-slow'>
      <canvas width='300' height='300' id='canv'></canvas>
    </div>
  )
}

export default React.memo(Canvas)
