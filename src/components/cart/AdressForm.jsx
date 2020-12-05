import React, {useState} from 'react'

const AdressForm = ({address, setAdress}) => {

    // personal details
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [secondPhone, setSecondPhone] = useState('');

    // delivery details
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [houseNumber, setHouseNumber] = useState('');

    return (
        <>
        <form className='addressForm' dir='rtl'>
            <div className='personal-detail'>
                <h2>פרטים אישיים</h2>
                <input type='text' required placeholder='שם מלא*'/>
                <input type='email' required placeholder='דואר אלקטרוני*'/>
                <input type='text' required minlength='10' maxlength='10' placeholder='מספר ליצירת קשר*'/>
                <input type='text' placeholder='מספר שני ליצירת קשר'/>

            </div>
             <div className='personal-detail'>
                <h2>פרטים למשלוח</h2>
                <input type='text' required placeholder='עיר*'/>
                <input type='text' required placeholder='רחוב*'/>
                <input type='text' required placeholder="מס' בית*"/>
                <input type='text' placeholder='מיקוד'/>
                <textarea type='text' placeholder='הערות למשלוח'/>
            </div>
            <h5>שדות המסומנים בכוכבית (*) הינם חובה</h5>

        <button type='submit'>submit </button>
        </form>
</>
    )
}

export default AdressForm
