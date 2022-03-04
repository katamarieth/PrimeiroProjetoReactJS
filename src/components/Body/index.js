import './styles.css'

import { Card } from '../card'
import {comidas} from '../../data';

export default function Body() {
    return (
        <>
            <h1 className='title_home'>Fast-Food House</h1>
            <div className='container_card_home'>

                {comidas.map((item) =>(
                    <Card item={item} />
                ))
                
                }

                

                
            </div>    
        </>    
           
   
    )
}