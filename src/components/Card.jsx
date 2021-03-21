import React, { useEffect, useState } from 'react';
import ICON from '../components/Icon'
import StarRatings from 'react-star-ratings'
import foodData from './data.json'

const Card = () => {
    const [isSelect, setIsSelect]=useState(true)

    const food=foodData

    const [scrollUp,setScrollUp] = useState(true)

    const handleScroll = () =>{
        var prevScrollpos = window.scrollY;
        window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            setScrollUp(true)
        } else {
            setScrollUp(false)
        }
        prevScrollpos = currentScrollPos;
        }
    }

    
    return(
        <>
            <div onScroll={handleScroll()} style={{display:'flex',justifyContent:'center', borderRadius:'5px', marginBottom:'8px', border:'1px solid #f1f1f2', textAlign:'center', fontWeight:'bold', top:scrollUp?40:-50, position:'sticky', overflow:'hidden', fontSize:'14px'}}>
                <div onClick={()=>setIsSelect(true)} style={{width:'50%', padding:'4px', background:isSelect?'#424749':'#f1f1f2', color:isSelect?'#f1f1f2':'#e2e4e4'}}>
                    <a >Lunch</a>    
                </div>
                <div onClick={()=>setIsSelect(false)} style={{width:'50%', padding:'4px', background:isSelect?'#f1f1f2':'#424749', color:isSelect?'#e2e4e4':'#f1f1f2'}}>
                    <a >Dinner</a>
                </div>
            </div>
            
           {food.length?
            
           food.map((val,idx)=>{
               return(
                <>
                    <div key={idx} style={{borderRadius:'10px', width:'350px', border:'2px solid #f1f1f2', overflow:'hidden', color:'#6E7679', marginBottom:'24px', boxShadow: '0px 8px 10px 0px rgba(10, 31, 68, 0.1)'}}>
                        <div>
                            <img width='350px' src={val.image} />
                        </div>
                        <div>
                            <a style={{margin: '0 24px',fontSize:'14px', color:'#6E7679'}}>
                                {val.rating} &ensp;
                                <span>
                                    <StarRatings 
                                        numberOfStars={5} 
                                        rating={val.rating} 
                                        starRatedColor='red' 
                                        starDimension={'14px'} 
                                        starSpacing={'1px'}
                                    />
                                </span> 
                            </a>
                            <h1 style={{margin: '0 24px',fontWeight:'bold', fontSize:'20px'}}>
                                {val.nama}
                            </h1>
                            <p style={{margin: '0 24px', fontSize:'12px'}}>{val.nama_restoran}</p>            
                        </div>
                        <div style={{margin:'12px 24px 24px', display:'flex', justifyContent:'space-between' }}>
                            <div style={{fontSize:'20px', fontWeight:'bold'}}>
                                <a>
                                    Rp.{val.harga}
                                </a>    
                            </div>
                            <div style={{ borderRadius:'5px', background:'#F9234A', color:'#fff', width:'100px', margin: 0, fontSize:'16px', fontWeight:'bold', padding:'4px 4px', justifyContent:'center', alignItems:'center', display:'flex'}}> 
                                <a >
                                    ADD &ensp;
                                </a>
                                    <svg  fill='#fff' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>              
                                                    
                            </div>
                        </div>
                    </div>
                </>
            )})
            :
                <div>
                    Loading
                    {console.log('loading')}
                </div>
            }
        </>
    )

}

export default Card