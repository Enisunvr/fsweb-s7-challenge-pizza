import React from "react";
import "./Home.css";
import HomeBanner from "../../Assets/mile1-assets/home-banner.png";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <div className="home-page">
      <h1 className="home-page-title">
        KOD ACIKTIRIR <br />
        PİZZA DOYURUR
      </h1>

      <Button
        text="Acıktım"
        style={{
          borderRadius: "90px",
        }}
        onClick={() => {
          history.push("/order-pizza");
        }}
      />

      <img src={HomeBanner} alt="" className="home-banner" />
    </div>
  );
}
