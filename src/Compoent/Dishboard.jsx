import React from 'react'

function Dishboard({transaction}) {
const Income=transaction.filter((item)=>item.amount>0).reduce((p,c)=>p+c.amount,0)
const  expense= transaction.filter((item)=>item.amount<0).reduce((p,c)=>p+c.amount,0)
const total= transaction.reduce((p,c)=>p+c.amount,0);
//  const total = Income+expense
//  console.log(total)
  return (
   
<div className="row my-2 g-3">

<div className="col-sm-12 col-md-4">

  

<div className="card p-3  bg-dark  rounded-0">
  <h1 className=" text-light display-6" > Expense :</h1>
  <h1 className="text-light  display-6  rounded-0"> {expense}</h1>
 </div>
</div>
<div className="col-sm-12 col-md-4">

<div className="card p-3  bg-danger  rounded-0">
  <h1 className=" text-light display-6" >  balance:</h1>
  <h1 className="text-light  display-6  rounded-0">{total}</h1>
</div>
</div>
<div className="col-sm-12 col-md-4">

<div className="card p-3  bg-success  rounded-0">
  <h1 className=" text-light display-6" > Income :</h1>
  <h1 className="text-light  display-6  rounded-0"> {Income}</h1>
</div>

</div>


 </div>
  )
}

export default Dishboard