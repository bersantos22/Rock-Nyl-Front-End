import React from "react";
import "./Section2.css";
import { LittleCard } from '../../../Components/LittleCard/LittleCard';
import imgTeste from '../../../images/nirvanatestando-removebg-preview.png'

export function Section2() {
  return (
    <section className="section2 container mx-auto">
      <div className="title2 mt-4 mb-2">
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
