import React, { useState } from 'react';
import ICON from '../components/Icon'
import Address from './Address';
import Modal from './Modal';

const Header = () =>{

    const [showModal, setShowModal]=useState(false)
    const [address,setAddress]=useState([])
    const Alamat=[
        "Tokopedia Tower",
        "Gama Tower",
        "Alpha Tower",
        "RDTX",
        "Monas",
        "Patung Pancoran",
        "Patung Selamat Datang"
    ]
    
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
        return(
            <>
            <ul>
                {   
                    address?.map((val)=>{
                        return(
                            <li style={{listStyleType:'none'}}>{val}</li>
                        )
                    })
                }

            </ul>

            </>
        )
    }

    return(
        <div style={{display:'flex',  width:'350px', marginBottom:'8px', position:'sticky', top:0, background:'#fff', padding:'0 0 8px'}}>
            <div style={{ height:'32px', marginRight:'8px'}}>
                <img src={ICON.ARROW_BACK} alt='back' style={{height:'32px'}} />
            </div>
            <div style={{height:'32px'}} onClick={()=>setShowModal(true)}>
                <p style={{fontSize:'12px', margin:0}}>Alamat Pengantaran</p>
                <p style={{fontSize:'16px', margin:0}}>Tokopedia Tower <span><img src={ICON.DROPDOWN_DOWN} alt='back' style={{height:'16px'}} /></span></p>
            </div>


            <div style={{display:showModal?'block':'none', top:50, position:'fixed', zIndex:1, background:'rgba(255,255,255,0.9)', textAlign:'center' }}>
                <h4>Cek makanan yang tersedia di lokasi kamu!</h4>
                <input type="text" id="searchlocation" name='searchlocation' placeholder='Search Location' onChange={(value)=>{onchangesearch(value)}} /> 
                {renderAddress()}                            
                <div onClick={()=>setShowModal(false)} style={{background:'#f9234a', color:'#fff', padding:'4px', width:'25px', fontSize:'10px', margin:'25px auto'}}>Close</div>
            </div>
        </div>
    )
 
}

export default Header