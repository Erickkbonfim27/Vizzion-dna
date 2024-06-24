import React from 'react'

export default function Restricoes({restricoes}) {


  return (
    <div className='Restricoes'>
        <div className='titulo'>
            <h3>Restrições do imóvel</h3>
        </div>
        {restricoes.map((restricao, index) => (
            <div key={index} className='restricaoText'>
                <li>{restricao}</li>
            </div>
        ))}
    </div>
  )
}
