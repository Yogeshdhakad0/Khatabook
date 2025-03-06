import React from 'react'

function Listitem({transaction,removetransaction,edittransaction}) {
  return (
  
    <li className="list-group-item  rounded-0">
    <p className="text-secondary" >{transaction.text} :</p>
    <h1 className="display-6" >{transaction. amount}</h1>
    <span className="float-end">
    <button className="btn btn-success btn-sm mx-2" onClick={()=>edittransaction(transaction)}> Edit</button>
    <button className="btn btn-primary btn-sm mx-2" onClick={()=>removetransaction( transaction.id)} > Delete</button>
    </span>
  </li>

  )
}

export default Listitem