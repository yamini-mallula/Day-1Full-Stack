import One from "../src/one"
import Three from "../src/three"
import F4 from "./four";
import F5 from "./five";
function Two(){
   
    var name='yamini';
    var branch='IT';
    var year='3rd';
    return(
        
        <div>
            <h1>{name}</h1>
            <h1>{branch}</h1>
            <h1>{year}</h1>
            <One/>
            <Three/>
            <F4/>
            <F5/>
        </div>
       
        
    );
}
export default Two;