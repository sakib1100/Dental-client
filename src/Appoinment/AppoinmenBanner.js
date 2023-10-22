
import { DayPicker } from 'react-day-picker';
const AppoinmenBanner = ({date,setDate}) => {
    return (
        <div>
            <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/sqyvqR0/johny-georgiadis-3ewk-Nkf-Jj2k-unsplash.jpg" class="max-w-md rounded-lg shadow-2xl" />
    <div>
     <DayPicker
     mode='single'
     selected={date}
     onSelect={setDate}
     ></DayPicker>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default AppoinmenBanner;