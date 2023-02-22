import logo from './logo.svg';
import './App.css';

function description(props) {
  const audios = document.getElementsByTagName("audio");
  for (const audio of audios) {
    audio.controls = false;
  }
  document.getElementById(props.id).controls = true;
  document.getElementById("display").innerHTML = props.display;
}

function PadDrum(props) {
  const content = props.posts.map((post) => (
    <div
      className="drum-pad btn btn-info"
      id={post.display}
      key={post.id}
      onClick={() => {
        const audio = new Audio(post.title);
        audio.play();

        description(post);
      }}
    >
      {post.id}
      <audio id={post.id} className="clip" src={post.title}></audio>
    </div>
  ));
  return (
    <div id="drum-machine" className="container">
      <h1>Drum Machine</h1>
      {content}
      <div id="display"> </div>
    </div>
  );
}

const posts = [
  {
    id: "Q",
    title: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    display: "Heater-1"
  },
  {
    id: "W",
    title: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    display: "Heater-2"
  },
  {
    id: "E",
    title: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    display: "Heater-3"
  },
  {
    id: "A",
    title: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    display: "Heater-4_1"
  },
  {
    id: "S",
    title: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    display: "Heater-6"
  },
  {
    id: "D",
    title: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    display: "Dsc_Oh-1"
  },
  {
    id: "Z",
    title: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    display: "Kick_n_Hat-1"
  },
  {
    id: "X",
    title: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    display: "RP4_KICK_1-1"
  },
  {
    id: "C",
    title: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    display: "Cev_H2"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PadDrum posts={posts} />
      </header>
    </div>
  );
}

export default App;
