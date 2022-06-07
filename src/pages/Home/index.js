import "./Home.css";
import DrinkList from './DrinkList'


export default function Home() {       
   
  return (
    <div className="container-fluid">
      <div className="row">
          <DrinkList/>
      </div>
  </div> 
  );
  
}