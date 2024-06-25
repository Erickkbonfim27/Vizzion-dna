import React from 'react'

export default function PendenciasIptu({iptu}) {
  return (
    <div className='PendenciasIptu'>
      <h3> Pendências de IPTU </h3>
        {iptu.map((item, index) => (
          <div className='HollPendencias' key={index}>
            <li> { item } </li>
          </div>
        ))}
    </div>
  )
}
