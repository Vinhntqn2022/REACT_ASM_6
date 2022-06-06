import "./Home.css";
import DrinkList from './DrinkList'


export default function Dashboard () {       
   
  return (
    <div className="container-fluid">
      <div className="row">
          <DrinkList/>
      </div>
  </div> 
  );
  
}