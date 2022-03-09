import React from "react";
import "./Section2.css";
import { LittleCard } from '../../../Components/LittleCard/LittleCard';
import imgTeste from '../../../images/nirvanatestando-removebg-preview.png'
import { useCart } from "../../../contexts/CartContext/CartContext";

export function Section2() {
  
  return (
    <section className="section2 container mx-auto mt-5 mb-10">
      <div className="title2 mt-3 mb-5">
        <p>NEW RELEASES</p>
      </div>
      
        <div className="divGrid grid gap-x-1 gap-y-2 grid-cols-4">

            <LittleCard
            img={imgTeste}
            artist='Nirvana'
            albumName='Nevermind'
            price='$25'
            description='The vinyl edition of Nirvanas hit album, NEVERMIND, helped usher in the Grunge era of the 1990s.'
            />

          <LittleCard
          img={imgTeste}
          artist='Nirvana'
          albumName='Nevermind'
          price='$25'
          description='The vinyl edition of Nirvanas hit album, NEVERMIND, helped usher in the Grunge era of the 1990s.'
          />  

          <LittleCard
          img={imgTeste}
          artist='Nirvana'
          albumName='Nevermind'
          price='$25'
          description='The vinyl edition of Nirvanas hit album, NEVERMIND, helped usher in the Grunge era of the 1990s.'
          />  

          <LittleCard
          img={imgTeste}
          artist='Nirvana'
          albumName='Nevermind'
          price='$25'
          description='The vinyl edition of Nirvanas hit album, NEVERMIND, helped usher in the Grunge era of the 1990s.'
          />  

          <LittleCard
          img={imgTeste}
          artist='Nirvana'
          albumName='Nevermind'
          price='$25'
          description='The vinyl edition of Nirvanas hit album, NEVERMIND, helped usher in the Grunge era of the 1990s.'
          />
          <LittleCard
            img={imgTeste}
            artist='Nirvana'
            albumName='Nevermind'
            price='$25'
            description='The vinyl edition of Nirvanas hit album, NEVERMIND, helped usher in the Grunge era of the 1990s.'
            />
            <LittleCard
            img={imgTeste}
            artist='Nirvana'
            albumName='Nevermind'
            price='$25'
            description='The vinyl edition of Nirvanas hit album, NEVERMIND, helped usher in the Grunge era of the 1990s.'
            />
            <LittleCard
            img={imgTeste}
            artist='Nirvana'
            albumName='Nevermind'
            price='$25'
            description='The vinyl edition of Nirvanas hit album, NEVERMIND, helped usher in the Grunge era of the 1990s.'
            />
         
          </div>

      
    </section>
  );
}
