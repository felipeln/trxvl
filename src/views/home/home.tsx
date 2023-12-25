import {Categories} from "../../components/categories/categories";
import { Destinations } from './vacation-destinations/vacation-destinations';
import { BottomMenu } from '../../components/bottom-menu/bottom-menu';
import { PropertyTypes } from './property-type/property-type';
import {Header} from '../../components/top-menu/menu';
import {Footer} from '../../components/footer/footer';
import { TravelApp } from './travel-app/travel-app';
import { TravelExpert } from './travel-expert/travel-expert';
import { TravelerCommunity } from './traveler-community/traveler-community';
import { Offers } from './offers/offers';

const Home = () => {
  return(
    <>
      <Header />
        <Categories />
        <Destinations />
        <Offers/>
        <PropertyTypes  />
        <BottomMenu />
        <TravelExpert/>
        <TravelerCommunity/>
        
        <TravelApp/>
      <Footer/>
    </>
  )
}
export default Home