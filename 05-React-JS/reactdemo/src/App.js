import logo from './logo.svg';
import './App.css';
import SuperButton from './components/SuperButton';
import TextBlock from './components/TextBlock';
import MyList from './components/MyList';

function App() {
  return (
    <div className="App">
          Hello
          <SuperButton></SuperButton>
          <TextBlock text='Coffee'>Hey</TextBlock>
          <MyList color="red" children={['Tea','Beer','Tea']} title="My List"></MyList>
    </div>
  );
}

export default App;
