import React from 'react'

function Title({children, className = ""}) {
  return (
    <p className={`${className} flex flex-col text-3xl md:text-4xl lg:text-[56px] text-white md:leading-[40px] lg:leading-[70px]`}>{children}</p>
  )
}

export default Title