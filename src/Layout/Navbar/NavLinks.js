import React from 'react'
import {linksData} from '../../bd/LinksData'
import Link from 'next/link'

export const NavLinks = () => {
  return (
    <>
    <ul>
      {linksData.map((linksData,index ) => (
        <Link 
        key={index}
        href={linksData.link}
        >
       <li>
      <icon>{linksData.icone}</icon>
       <p>{linksData.secao}</p></li>  
        </Link>      
      )      
      )}
    </ul>       
    </>
  )
}
