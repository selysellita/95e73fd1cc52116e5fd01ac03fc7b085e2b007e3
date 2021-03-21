import React from 'react';
import ICON from '../components/Icon'
import Address from './Address';

const Header = () =>{

    return(
        <div style={{display:'flex',  width:'350px', marginBottom:'8px'}}>
            <div style={{ height:'32px', marginRight:'8px'}}>
                <img src={ICON.ARROW_BACK} alt='back' style={{height:'32px'}} />
            </div>
            <div style={{height:'32px'}}>
                <p style={{fontSize:'12px', margin:0}}>Alamat Pengantaran</p>
                <p style={{fontSize:'16px', margin:0}}>Tokopedia Tower <span><img src={ICON.DROPDOWN_DOWN} alt='back' style={{height:'16px'}} /></span></p>
            </div>
        </div>
    )

}

export default Header