import React from "react";
import "../pages/Quiz.css";
import ScoreCard from "../components/quizComponents/ScoreCard";
import PlayerCard from "../components/quizComponents/PlayerCard";
import Questions from "../components/quizComponents/Questions";
import API from "../utils/API";

class Quiz extends React.Component {
  //set your state of 50 players here
  state = {
    player1: {},
    player2: {},
    score: "",
    brick: "",
  };

  componentDidMount() {
    this.searchPlayers();
  }

  searchPlayers = () => {
    const players = [{ name: "Kawhi Leonard", id: 274, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/c12fb587-fc86-471c-8a84-19caf31325ce/headshot_1570731868.jpg" },
    { name: "Giannis Antetokounmpo", id: 15, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/6c60282d-165a-4cba-8e5a-4f2d9d4c5905/headshot_1570735919.jpg" },
    { name: "Lebron James", id: 237, src: "https://www.google.com/search?q=Lebron+James+headshot&sxsrf=ALeKk02aBVKn4Vl_XjFx553jegcszEMSYA:1590008397899&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiJn_ztqsPpAhWNu54KHXFLC4kQ_AUoAXoECA8QAw&biw=1214&bih=626#imgrc=1mc10dvfkvirkM" },
    // fix
    { name: "James Harden	", id: 192, src: "https://s3-us-west-2.amazonaws.com/osdb-dev-2/headShots/a52b2c84-9c3d-4d6e-8a3b-10e75d11c2bc/205x205-crop.JPG" },
    { name: "Stephen Curry", id: 115, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/8ec91366-faea-4196-bbfd-b8fab7434795/headshot_1570738675.jpg" },
    { name: "Joel Embiid", id: 145, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/bf9ad0fd-0cb8-4360-8970-5f1b5cf3fa8d/headshot_1570232328.jpg" },
    { name: "Anthony Davis", id: 117, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/ea8826b8-1f76-4eab-b61e-ffcb176880f3/headshot_1570570782.jpg" },
    { name: "Nikola Jokic", id: 246, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/f2625432-3903-4f90-9b0b-2e4f63856bb0/headshot_1570744166.jpg" },
    { name: "Russel Westbrook", id: 472, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/74a45eed-f2b0-4886-ae71-d04cf7d59528/headshot_1570734345.jpg" },
    { name: "Damian Lillar", id: 278, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/5382cf43-3a79-4a5a-a7fd-153906fe65dd/headshot_1570575276.jpg" },
    { name: "Kyrie Irving", id: 228, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/dd146010-902b-4ad7-b98c-650d0363a2f0/headshot_1570745806.jpg" },
    { name: "Paul George", id: 172, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/db09f372-9a17-4889-add7-bf8a75ab6da6/headshot_1570731763.jpg" },
    { name: "Karl - Anthony Towns", id: 447, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/ab532a66-9314-4d57-ade7-bb54a70c65ad/headshot_1570663129.jpg" },
    { name: "Jimmy Butler", id: 79, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/0e163d44-67a7-4107-9421-5333600166bb/headshot_1570569842.jpg" },
    { name: "Ben Simmons", id: 417, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/318debd7-dab6-4d4e-8849-03c4c701a7c8/headshot_1570231832.jpg" },
    { name: "Rudy Gobert", id: 176, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/37fbc3a5-0d10-4e22-803b-baa2ea0cdb12/headshot_1570558533.jpg" },
    { name: "Blake Griffin", id: 189, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/18358040-89d8-4e25-a6a6-9e209c26fb3a/headshot_1570744090.jpg" },
    { name: "Bradley Beal", id: 37, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/ff461754-ad20-4eeb-af02-2b46cc980b24/headshot_1570490532.jpg" },
    { name: "Victor Oladipo", id: 357, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/ae9e275c-9dce-4c10-a108-cfee6958df48/headshot_1570732310.jpg" },
    { name: "Kemba Walker", id: 465, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/a35ee8ed-f1db-4f7e-bb17-f823e8ee0b38/headshot_1570733445.jpg" },
    { name: "Jrue Holiday", id: 214, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/65700e81-3aa0-49a9-8a94-004f2cfb64e5/headshot_1570658616.jpg" },
    { name: "D’Angelo Russell", id: 405, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/dbf09e15-1cd8-434e-acda-9527735ef4d6/headshot_1570741562.jpg" },
    { name: "Luka Doncic", id: 132, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/d2ee92e9-3e72-45eb-b156-2dc5adc1e6f7/headshot_1570571962.jpg" },
    // { name: "Nikola Vucevic", id: 460, src: ""},
    { name: "Mike Conley", id: 104, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/460b7264-b98f-483e-b841-59a18c2e4d67/headshot_1570558489.jpg" },
    { name: "Donovan Mitchell", id: 322, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/b6dde96e-3748-4cbe-86d2-798d5dffb3c0/headshot_1570558663.jpg" },
    { name: "Devin Booker", id: 322, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/31baa84f-c759-4f92-8e1f-a92305ade3d6/headshot_1570748858.jpg" },
    { name: "DeMar DeRozan", id: 125, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/5e86a9c3-b4d0-4fe1-a551-acd83e5d60eb/headshot_1570565004.jpg" },
    { name: "Chris Paul", id: 367, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/942c53e3-7268-44e3-b0a9-fdff55a72c03/headshot_1570655037.jpg" },
    { name: "Kyle Lowry", id: 286, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBJnftJwXghZnbAoxL2YGJS34fK-kXPRLyaNd2HV2ve4QCIqBB&usqp=CAU" },
    { name: "Pascal Siakam", id: 416, src: "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/2-pascal-siakam-ron-turenne.jpg" },
    { name: "Jayson Tatum", id: 434, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/98136da3-452f-49dc-a794-1ee9c76443f2/headshot_1570733705.jpg" },
    { name: "Draymond Green", id: 185, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/5e5099d1-4a58-43f2-8d03-f2ae5dd49337/headshot_1570738709.jpg" },
    { name: "Tobias Harris", id: 200, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/82f09975-6a8d-42e4-b42c-a52b9349ed50/headshot_1570232280.jpg" },
    { name: "Kristaps Porzingis", id: 378, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/3c5901ef-af1d-441d-aeed-8e0a93cead49/headshot_1570571633.jpg" },
    { name: "Steven Adams", id: 3, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/a208e22a-6b63-45f9-b7c6-bf913a68f3df/headshot_1571859365.jpg" },
    { name: "Zach Lavine", id: 268, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/db72e294-1c54-454a-96b9-0b4fd2f38112/headshot_1570741846.jpg" },
    { name: "C.J. Mcollum", id: 303, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/bc70a55a-cee0-478f-9a13-cf51c4a4187c/headshot_1570575311.jpg" },
    { name: "Kevin Love", id: 285, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/7d615ccd-db96-42a3-9a6c-7f18ea25634e/headshot_1570746177.jpg" },
    { name: "Julius Randle", id: 387, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/3a6c2262-7f48-4f0e-996e-3e774e822783/headshot_1570750736.jpg" },
    { name: "Khris Middleton", id: 315, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/4c362eee-6474-40ea-b1b4-d8f917f95175/headshot_1570736009.jpg" },
    { name: "Kyle Kuzma", id: 265, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/4fae86e2-4f99-4247-af85-d917b4389d31/headshot_1570570911.jpg" },
    { name: "De'Aaron Fox", id: 161, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/cfc1e41b-74ab-45ee-8132-aaf9ca7f8163/headshot_1570568987.jpg" },
    { name: "Jamal Murray", id: 335, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/685576ef-ea6c-4ccf-affd-18916baf4e60/headshot_1570744014.jpg" },
    { name: "Zion Williamson", id: 666969, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/5cc51c05-06f5-4ae4-89a4-1d329fbbcdfb/headshot_1570659604.jpg" },
    { name: "Trae Young", id: 490, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/cf418e0c-de9d-438f-a1ac-3be539a56c42/headshot_1570728816.jpg" },
    { name: "Bojan Bogdonovic", id: 54, src: "https://s3-us-west-2.amazonaws.com/osdb-production/headShots/7ff02e19-e829-4e56-9a34-233a71fce76c/headshot_1570558387.jpg" },
    ]


    let randomNum1 = Math.floor(Math.random() * players.length)
    let randomNum2 = Math.floor(Math.random() * players.length)

    const player1 = {
      name: players[randomNum1].name,
      id: players[randomNum1].id,
      image: players[randomNum1].src
    }
    const player2 = {
      name: players[randomNum2].name,
      id: players[randomNum2].id,
      image: players[randomNum2].src
    }

    API.search1(player1.id)
      .then((res) => {
        player1.stats = res.data.data[0];
      })
      .then(() => {
        API.search2(player2.id)
          .then((res) => {
            player2.stats = res.data.data[0];
          })
      })
      // console.log("API response", res))
      // this.setState({ player2: res.data.data[1]})
      .then(() => this.setState({ player1: player1 }))
      .then(() => this.setState({ player2: player2 }))
      .then(() => console.log(this.state))
      .catch((err) => console.log(err));
  }

  HandleClick = (event) => {
    event.preventDefault()
    // Get the title of the clicked button
    this.setState({ brick: +1 })
    this.setState({ score: +1 })
  }




  render() {
    return (
      <div className="uk-grid-medium uk-child-width-expand@s uk-height-viewport Quiz" id="quizContainer" uk-grid>
        <Questions />
        <hr className="uk-divider-icon"></hr>
        <div className="uk-flex uk-flex-center" id="centerQuiz">
          <PlayerCard name={this.state.player1.name} image={this.state.player1.image} stats={this.state.player1.stats} HandleClick={this.HandleClick} />
          <ScoreCard score={this.state.score} brick={this.state.brick} />
          <PlayerCard name={this.state.player2.name} image={this.state.player2.image} stats={this.state.player2.stats} />
        </div>
      </div>


    )
  }
}


export default Quiz;