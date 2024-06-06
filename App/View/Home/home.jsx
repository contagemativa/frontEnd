import React from "react";
import Header from "../../Components/Layout/Header/Header.jsx";
import Footer from "../../Components/Layout/Footer/footer.jsx";
import Background from "../../Components/Layout/Background/background.jsx";
import "../../Components/Layout/Background/background.css";
import { FaUserCircle } from "react-icons/fa";
import User from "../../Components/Common/Box/userBox.jsx";
import Button from "../../Components/Common/Button/Button.jsx";
import { FaLocationDot } from "react-icons/fa6";
import Card from "../../Components/Common/Card/Card.jsx";

export default function Home() {
  return (
    <>
      <Background className="background h-72 bg-primary">
        <Header />
        <article className="p-4">
          <div className="grid justify-items-center">
            <div>
              <div className="flex justify-center">
                <FaUserCircle size={120} color="white" />
              </div>
              <div className="my-10">
                <User visible={true}></User>
              </div>
            </div>
          </div>
          <div className="grid justify-items-center">
            <div>
              <Card></Card>
            </div>
          </div>
        </article>
        <Footer />
      </Background>
    </>
  );
}
