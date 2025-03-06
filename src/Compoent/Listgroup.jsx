import React from 'react'
import Listitem from './Listitem'

function Listgroup({transaction,removetransaction,edittransaction}) {
    
  
  return (
    <ul className="my-3 list-group">
        
   {
    transaction.map((transaction)=>{
        return (<Listitem  key={transaction.id}  transaction={transaction} removetransaction={removetransaction} edittransaction={edittransaction}/>)
    })
   }
   </ul>
  )
}

export default Listgroup