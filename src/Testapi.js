import {useEffect, useState} from "react"

const Testapi = () => {
    const url = 'https://cekrek.heirro.dev/api/check'
    const [accountBank , accountNumber] = useState([]);

    const getDataBank = async ()=>{
        const response = await fetch(url);
        const dataBank = await response.json();
        accountNumber(dataBank);
        console.log(accountBank)
    }
    useEffect( ()=> {
        getDataBank (); 
    })

    return(
        <h1 color="white">Test API Bank Local</h1>

    )
}

export default Testapi;