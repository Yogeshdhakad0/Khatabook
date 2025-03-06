  // import { useState } from 'react'
// const [count, setCount] = useState(0)

import { useState } from "react"
import Dishboard from "./Compoent/Dishboard"
import Input from "./Compoent/Input"
import Listgroup from "./Compoent/Listgroup"
import Navber from "./Compoent/Navber"



function App() {

  const[edit,setedit]=useState([
    {  transaction:{},isedit :false}
   ])
  const [transaction,  settransactioln]=useState([
    {id:1,
      text: 'salary',
      amount: 12500000
    },
    {id:2,
      text: ' Phone EMI',
      amount: -30000
    },
    {id:3,
      text: ' grocery',
      amount:-5000
    },
    {id:4,
      text: 'Divided',
      amount: 2000
    },
    {id:5,
      text: 'car EIM',
      amount: -100000
    },
  ])


const removetransaction=(id)=>{
   settransactioln(transaction.filter((transaction) => transaction.id !== id))
}




const  addtransaction=(text ,amount )=>{
  // console.log(text,amount),
  settransactioln([{id:crypto.randomUUID(),amount:amount,text:text}, ...transaction])

}


const edittransaction=(oldTransaction)=>{
 
setedit({transaction : oldTransaction,isedit:true})
}
const updatetransaction=(updateTransaction)=>{
  console.log(updateTransaction);
  
 settransactioln(transaction.map((trans) => trans.id === updateTransaction.id ? updateTransaction : trans))
  setedit({transaction:{},isedit:false});
}

  return (
    <>
     
<div className="main-container">
 <Navber/>


 <div className="container">
<Input addtransaction={addtransaction} edit={edit} updatetransaction={updatetransaction}/>
<Dishboard transaction={transaction}/>
<Listgroup transaction={transaction} removetransaction={removetransaction} edittransaction={edittransaction} />
</div>
</div>



    </>
  )
}

export default App
