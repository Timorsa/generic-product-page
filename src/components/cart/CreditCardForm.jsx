import React, {useState} from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';

// ! disable and opacity less than one until address is filled
const CreditCardForm = () => {
      const state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const [mm, setMM] = useState('');
    const [yy, setYY] = useState('');
    const [cvc, setCvc] = useState('');

    const [focusItem, setFocuseItem] = useState('')


    return (
        <div class='credit-card-form' >
  <Cards
          cvc={cvc}
          expiry={`${mm+"/"+ yy}`}
          focused={ focusItem}
          name={ name}
          number={ number}
        />
        <form dir='rtl'>
                	<input
            type="text"
            name="name"
            placeholder="שם בעל הכרטיס"
                         onChange={(e) => setName(e.target.value)}

             onFocus={(e) => setFocuseItem(e.target.name)}
          />
                     	<input
            type="text"
            name="ownerId"
            placeholder="תעודת זהות בעל הכרטיס"
                                    onChange={(e) => setNumber(e.target.value)}

             onFocus={(e) => setFocuseItem(e.target.name)}
          />
        	<input
            type="tel"
            name="number"
            placeholder="מספר כרטיס אשראי"
             onChange={(e) => setNumber(e.target.value)}
             onFocus={(e) => setFocuseItem(e.target.name)}
          />
         
                    	<input
            type="text"
            name="cvc"
            placeholder="CVV"
                         onChange={(e) => setCvc(e.target.value)}

             onFocus={(e) => setFocuseItem(e.target.name)}
          />
                 	<input
            type="text"
            name="expiry"
            placeholder="MM"
                         onChange={(e) => setMM(e.target.value)}
             onFocus={(e) => setFocuseItem(e.target.name)}
          />
                    	<input
            type="text"
            name="expiry"
            placeholder="YY"
                                     onChange={(e) => setYY(e.target.value)}

             onFocus={(e) => setFocuseItem(e.target.name)}
          />
      

    
          
        </form>
        </div>
    )
}

export default CreditCardForm
