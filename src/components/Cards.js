import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Welcome to the cantina</h1>
      <h2>Come join me at the holotable!</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/swgoh-old.webp"
              text="Join the Dark Side"
              label="Star Wars Galaxy of Heroes"
              path="https://swgoh.gg/p/592983585/"
            />
            <CardItem
              src="images/overwatch.webp"
              text="If at first you don't succeed. Blow it up again!"
              label="Overwatch"
              path="https://www.overbuff.com/players/MasterMcJugs-1812"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/steam.jpg"
              text="Check out my profile"
              label="steam"
              path="https://steamcommunity.com/id/Shawnzylim/"
            />
            <CardItem
              src="images/chess.webp"
              text="I never lose at chess"
              label="chess.com"
              path="https://www.chess.com/member/shawnzylim"
            />
            <CardItem
              src="images/LOL.jpg"
              text="New Champ = dash"
              label="League of legends"
              path="https://app.mobalytics.gg/lol/profile/sg/molestchen/overview"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
