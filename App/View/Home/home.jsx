import React from "react";
import Header from "../../Components/Layout/Header/Header.jsx";
import Footer from "../../Components/Layout/Footer/footer.jsx"
import Background from "../../Components/Layout/Background/background.jsx";
import "../../Components/Layout/Background/background.css";

export default function Home() {
  return (
   
      <div className="min-h-screen">

        <Background className="bg-primary text-base-100 h-82 oval">
          <div className="p-2">
            <Header />
          </div>
        </Background>
        
        <p>Esse é um teste</p>

        <Footer />

      </div>
       
  

    
    

  );
}
