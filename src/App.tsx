import './App.css'
import Menu from './components/top-menu/menu'
import {Categories} from "./components/catogories/categories";
import { Destinations } from './components/destinations/destinations';
import { BottomMenu } from './components/bottom-menu/bottom-menu';

// Now you can use C for components from both menu.js and banner.js

function App() {

  return (
      <>
        <Menu />
        <Categories />
        <Destinations />
        <BottomMenu />
      </>
  )
}

export default App
