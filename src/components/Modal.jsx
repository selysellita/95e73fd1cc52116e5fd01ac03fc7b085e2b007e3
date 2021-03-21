import React, { useEffect, useState } from 'react';

const Modal = ({isOpen}) =>{
    const [address,setAddress]=useState([])
    const [showModal, setShowModal]=useState(false)

    const Alamat=[
        "Tokopedia Tower",
        "Gama Tower",
        "Alpha Tower",
        "RDTX",
        "Monas",
        "Patung Pancoran",
        "Patung Selamat Datang"
    ]

    useEffect(()=>{
        isOpen(showModal)
    },[showModal])

    const onchangesearch=(e)=>{       
        var inputName=e.target.value
        var hasilFilter=Alamat.filter((alamat)=>{
            return (
                alamat.toLowerCase().includes(inputName.toLowerCase())                
            )
        })        
        return setAddress(hasilFilter)
    }

    const renderAddress=()=>{
        address?.map((val)=>{
            return(
                <li>{val}</li>
            )
        })
    }


    return(
        <>
            <div style={{display:showModal?'block':'none'}}>
                <h1>Cek makanan yang tersedia di lokasi kamu!</h1>
                <input type="text" id="searchlocation" name='searchlocation' placeholder='Search Location' onChange={(value)=>{onchangesearch(value)}} /> 
                {renderAddress()}                            
                <div onClick={()=>setShowModal(false)}>Close</div>
            </div>
        </>
    )
}

export default Modal