import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  return ( 
    <div>
      <h4>FloorPlan</h4>
      <Bedroom bedNum={1} />
      <Kitchen />
      <LivingRoom />
      <Bath size='Full Bath' />
      <Bedroom bedNum={2} />
      <Bath size='Half Bath' />
      <Bedroom bedNum={3} />
    </div>
    
  );
}
 
export default FloorPlan;