import Main from './components/Main/Main';
import './App.css';
import Invitation from './components/Invitation/Invitation';
import WeddingDay from './components/WeddingDay/WeddingDay';
import HeartfelWishes from './components/HeartfeltWishes/HeartfeltWishes.jsx';
import OurPreciousMoment from './components/OurPreciousMoment/OurPreciousMoment.jsx';
import GroomAndBride from './components/GroomAndBride/GroomAndBride.jsx';
import Parents from './components/Parents/Parents.jsx';
import OurStory from './components/OurStory/OurStory.jsx';
import Guestbook from './components/Guestbook/Guestbook.jsx';
import Directions from './components/\bDirections/Directions.jsx';

function App() {
  return (
    <div className="App">
      <Main />
      <Invitation />
      <WeddingDay />
      <HeartfelWishes />
      <OurPreciousMoment />
      <GroomAndBride />
      <Parents />
      <OurStory />
      <Guestbook />
      <Directions />
    </div>
  );
}

export default App;
