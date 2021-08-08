import React from 'react'

const Light = ({className, on}) => {
  return (
    <div className={`light ${className} ${on === className ? 'active' : ''}`}>
    </div>
  )
}

export default Light
