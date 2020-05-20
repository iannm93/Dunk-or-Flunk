import React from "react";

function PlayerCard() {
  const players = [{ name: "Kawhi Leonard", id: 274 },
  { name: "Giannis Antetokounmpo", id: 15 },
  { name: "Lebron James", id: 237 },
  { name: "James Harden	", id: 192 },
  { name: "Stephen Curry", id: 115 },
  { name: "Joel Embiid", id: 145 },
  { name: "Anthony Davis", id: 117 },
  { name: "Nikola Jokic", id: 246 },
  { name: " Russel Westbrook", id: 472 },
  { name: "Damian Lillar", id: 278 },
  { name: "Kyrie Irving", id: 228 },
  { name: "Paul George", id: 172 },
  { name: "Karl - Anthony Towns", id: 447 },
  { name: "Jimmy Butler", id: 79 },
  { name: "Ben Simmons", id: 417 },
  { name: "Rudy Gobert", id: 176 },
  { name: "Blake Griffin", id: 189 },
  { name: "Bradley Beal", id: 37 },
  { name: "Victor Oladipo", id: 357 },
  { name: "Kemba Walker", id: 465 },
  { name: "Jrue Holiday", id: 214 },
  { name: "D’Angelo Russell", id: 405 },
  { name: "Luka Doncic", id: 132 },
  { name: "Nikola Vucevic", id: 460 },
  { name: "Mike Conley", id: 104 },
  { name: "Donovan Mitchell", id: 322 },
  { name: "Devin Booker", id: 322 },
  { name: "DeMar DeRozan", id: 125 },
  { name: "Chris Paul", id: 367 },
  { name: "Kyle Lowry", id: 286 },
  { name: "Pascal Siakam", id: 416 },
  { name: "Jayson Tatum", id: 434 },
  { name: "Draymond Green", id: 185 },
  { name: "Tobias Harris", id: 200 },
  { name: "Kristaps Porzingis", id: 378 },
  { name: "Steven Adams", id: 3 },
  { name: "Zach Lavine", id: 268 },
  { name: "C.J. Mcollum", id: 303 },
  { name: "Kevin Love", id: 285 },
  { name: "Julius Randle", id: 387 },
  { name: "Khris Middleton", id: 315 },
  { name: "Kyle Kuzma", id: 265 },
  { name: "De'Aaron Fox", id: 161 },
  { name: "Jamal Murray", id: 335 },
  { name: "Zion Williamson", id: 666969 },
  { name: "Trae Young", id: 490 },
  { name: "Bojan Bogdonovic", id: 54 },
  ]




  // Bug: same player can be selected from players array in math.random
  return (
    <div className="uk-card uk-card-hover uk-width-1-3@m">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid>
          <div className="uk-width-auto">
            <img className="uk-border-circle" width="auto" height="auto" src="https://www.sportsnet.ca/wp-content/uploads/2013/02/jordan_michael640.jpg" />
          </div>
        </div>
      </div>
      <div className="uk-card-footer white">
        <h3 className="white">{players[Math.floor(Math.random() * 46)].name}</h3>
      </div>
    </div>
  );
}

export default PlayerCard;