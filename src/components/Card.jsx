import React, { useEffect, useState } from 'react';
import ICON from '../components/Icon'
import StarRatings from 'react-star-ratings'
import foodData from './data.json'

const Card = () => {

    const food=foodData

    const renderFood=()=>{
        food.map((val)=>{
            <>
                <div style={{borderRadius:'10px', width:'350px', border:'2px solid #f1f1f2', overflow:'hidden', color:'#6E7679', marginBottom:'24px', boxShadow: '0px 8px 10px 0px rgba(10, 31, 68, 0.1)'}}>
                <div>
                    <img width='350px' src={val.image} />
                </div>
                <div>
                    <p style={{margin: '0 24px',fontSize:'14px'}}>
                        4.5 &ensp;
                        <span>
                            <StarRatings 
                                numberOfStars={5} 
                                rating={val.rating} 
                                starRatedColor='red' 
                                starDimension={'14px'} 
                                starSpacing={'1px'}
                            />
                        </span> 
                    </p>
                    <h1 style={{margin: '0 24px',fontWeight:'bold', fontSize:'16px'}}>
                        {val.nama}
                    </h1>
                    <p style={{margin: '0 24px', fontSize:'12px'}}>{val.nama_restoran}</p>            
                </div>
                <div style={{margin:'12px 24px 24px', display:'flex', justifyContent:'space-between' }}>
                    <div style={{fontSize:'20px', fontWeight:'bold'}}>
                        <a>
                            {val.harga}
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
        })
    }


    return(
        <>
            
           {food.length?

           foodData.map((val,idx)=>{
               return(
                <>
                    <div key={idx} style={{borderRadius:'10px', width:'350px', border:'2px solid #f1f1f2', overflow:'hidden', color:'#6E7679', marginBottom:'24px', boxShadow: '0px 8px 10px 0px rgba(10, 31, 68, 0.1)'}}>
                        <div>
                            <img width='350px' src={val.image} />
                        </div>
                        <div>
                            <a style={{margin: '0 24px',fontSize:'14px'}}>
                                4.5 &ensp;
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
                            <h1 style={{margin: '0 24px',fontWeight:'bold', fontSize:'16px'}}>
                                {val.nama}
                            </h1>
                            <p style={{margin: '0 24px', fontSize:'12px'}}>{val.nama_restoran}</p>            
                        </div>
                        <div style={{margin:'12px 24px 24px', display:'flex', justifyContent:'space-between' }}>
                            <div style={{fontSize:'20px', fontWeight:'bold'}}>
                                <a>
                                    {val.harga}
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