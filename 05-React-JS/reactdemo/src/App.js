import logo from "./logo.svg";
import styles from "./App.css";
import SuperButton from "./components/SuperButton";
import TextBlock from "./components/TextBlock";
import MyList from "./components/MyList";
import MyCard from "./components/MyCard";
import Vote from "./vote-modules/Vote";

function App() {
  return (
    <div className="App">
      <SuperButton></SuperButton>
      <TextBlock text="Coffee" />
      <MyList
        color="red"
        children={[
          "Tea",
          "Beer",
          "Wine",
          "Vodka",
          "Jack Daniels",
          "Ayran",
          "Red Bull",
          "Whiskey",
          "Gin Tonic",
          "Dom Perignon",
        ]}
        title="My List"
      />
      <div className="rich">
        <MyCard src="./avatar.png" title="Mark Zuckerberg" description="CEO" />
        <MyCard src="./avatar.png" title="Elon Musk" description="CEO" />
        <MyCard src="./avatar.png" title="Jeff Bezos" description="CEO" />
      </div>
      <div className="rich">
        <Vote candidate="Bob" location="Bregenz" job="Bauarbeiter" />
        <Vote candidate="Deniz" location="Dornbirn" job="Dönermann" />
        <Vote candidate="Herbert" location="Feldkirch" job="Bierbrauer" />
      </div>
    </div>
  );
}

export default App;
