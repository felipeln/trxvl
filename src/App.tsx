import './App.css'
import {Categories} from "./components/catogories/categories";
import { Destinations } from './components/destinations/destinations';
import { BottomMenu } from './components/bottom-menu/bottom-menu';
import { PropertyTypes } from './components/property-type/property-type';
import Header from './components/top-menu/menu';

// Now you can use C for components from both menu.js and banner.js

function App() {

  return (
      <>
        <Header />
        <Categories />
        <Destinations />
        <PropertyTypes  />
        <BottomMenu />
      </>
  )
}

export default App
