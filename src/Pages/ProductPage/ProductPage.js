import React from "react";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";
import { Section2 } from "../Hompage-Components/Section2/Section2";

export function ProducPage(){
    return(
        
        <SingleProduct 
            img='https://cdn.shopify.com/s/files/1/0287/4323/7725/products/Motown_12GoldPackshot_650x650.jpg?v=1633546720'
            artist='Motown'
            albumName='A Symphony Of Soul (with the Royal Philharmonic Orchestra) (Gold Limited Edition)'
            type='GOLD 1LP'
            price={39.98}
            description='Motown: A Symphony Of Soul features some of Motown’s best-known and loved singles now reimagined with new orchestration by the Royal Philharmonic Orchestra. Also included are some beautiful new guest vocalist versions that sit alongside the original vocals laid down over 50 years ago. Beverley Knight joins Marvin Gaye on the seminal Abraham Martin & John, and Mica Paris joins Jimmy Ruffin on "What Becomes Of The Broken Hearted."'

        />
     
    
    )
}