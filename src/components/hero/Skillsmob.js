import React from 'react'
import MovingText from 'react-moving-text'


function Skillsmob() {
    return (
        <MovingText
      type="typewriter"
      dataText={[
        'React JS',
        'HTML 5',
        'CSS 3',
        'Bootstrap etc..'
      ]}
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none">
      Content, html, js...
    </MovingText>
    )


}

export default Skillsmob
