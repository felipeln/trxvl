import './App.css'
import {Categories} from "./components/categories/categories";
import { Destinations } from './components/destinations/destinations';
import { BottomMenu } from './components/bottom-menu/bottom-menu';
import { PropertyTypes } from './components/property-type/property-type';
import {Header} from './components/top-menu/menu';
import {Footer} from './components/footer/footer';
import { TravelApp } from './components/travel-app/travel-app';
import { TravelExpert } from './components/travel-expert/travel-expert';
import { TravelerCommunity } from './components/traveler-community/traveler-community';


function App() {

  return (
      <>
        <Header />
        <Categories />
        <Destinations />
        <PropertyTypes  />
        <BottomMenu />
        <TravelExpert/>
        <TravelerCommunity/>
        <TravelApp/>
        <Footer/>
      </>
  )
}

export default App
