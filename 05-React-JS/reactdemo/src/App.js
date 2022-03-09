import logo from './logo.svg';
import './App.css';
import SuperButton from './components/SuperButton';
import TextBlock from './components/TextBlock';
import MyList from './components/MyList';
import MyCard from './components/MyCard';

function App() {
  return (
    <div className="App">
          <SuperButton></SuperButton>
          <TextBlock text='Coffee'/>
          <MyList color="red" children={['Tea','Beer','Wine','Vodka','Jack Daniels','Ayran','Red Bull','Whiskey','Gin Tonic','Dom Perignon']} title="My List"/>
          <MyCard src="./avatar.png" title="Mark Zuckerberg" description="CEO"/>
    </div>
  );
}

export default App;
