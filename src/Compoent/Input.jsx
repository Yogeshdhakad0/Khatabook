import React, { useState, useEffect } from 'react'

function Input({addtransaction,edit,updatetransaction}) {
    const [text ,settext]=useState('')
    const[amount,setamount]=useState('')
    
 useEffect(() => {
  // settext(edit.transaction.text);
  
 settext(edit.transaction?.text)
setamount(edit.transaction?.amount)


 }, [edit])
    const  headlar=(e)=>{
    
        e.preventDefault()
          !edit.isedit ? addtransaction(text, parseInt(amount)): updatetransaction({id: edit.transaction.id, text:text,amount:parseInt(amount)})
         settext('')
         setamount('')
    }

  return (
    <form className="my-3" onSubmit={(e)=>headlar(e)} >

    <input type="text" className="form-control my-3  rounded-0"  placeholder=" Enter transaction"
    value={text}
    onChange={(e)=>settext(e.target.value)}

    />
    <input type="number" className="form-control  my-3"  placeholder=" Enter Amount" 
    value={amount}
    onChange={(e)=>setamount(e.target.value)}
     />
    <button className="btn  btn-success w-100">Save</button>
  </form>
  
  )
}

export default Input