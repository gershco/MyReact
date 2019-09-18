import React from "react";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div>
      <ContactCard
        contact={{
          name: "Mr Benjamin",
          imgUrl:
            "https://doggiedesigner.com/wp-content/uploads/2018/03/8.1-758x758.jpg",
          phone: "0123 456 7890",
          email: "mr.benjamin@cute.dog"
        }}
      />
      <ContactCard
        contact={{
          name: "Master Jeremiah",
          imgUrl:
            "http://www.theamphibian.co.uk/images/fire_bellied_toad_bombina_orientalis.jpg",
          phone: "01923 847 659",
          email: "master.jeremiah@fire.belly"
        }}
      />
      <ContactCard
        contact={{
          name: "Mrs Kitty",
          imgUrl:
            "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/ManxSH_body_6.jpg?itok=Xx6lRcVZ",
          phone: "01928 374 569",
          email: "mrs.kitty@manx.cat"
        }}
      />
    </div>
  );
}

export default App;
