import './Dom.css'

import HelloWorld from './components/HelloWorld'

function Dom() {
  return (
    <div className='Dom'>
      <HelloWorld>
        <h1>Hello from React with TypeScript and Tailwind!</h1>
      </HelloWorld>
      <video
        width='640'
        height='200'
        preload=''
        loop
        muted
        controls
        className='fixed top-0 left-0 w-1 h-1 opacity-[.01]'
        title='HDR Video'
      >
        <source src='/white.webm' type='video/webm' />
        <source src='/white.mp4' type='video/mp4' />
        <source src='/white2.mp4' type='video/mp4' />
        Turn on JavaScript to see the video.
      </video>
    </div>
  )
}

export default Dom
