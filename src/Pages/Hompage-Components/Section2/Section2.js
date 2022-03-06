import React from "react";
import "./Section2.css";
import { LittleCard } from '../../../Components/LittleCard/LittleCard';
import imgTeste from '../../../images/nirvanatestando-removebg-preview.png'

export function Section2() {
  return (
    <section className="section2">
      <div className="title2">
        <p>NEW RELEASES</p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">

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
      </div>

      
    </section>
  );
}
