
import { DayPicker } from 'react-day-picker';
const AppoinmenBanner = ({date,setDate}) => {
    return (
        <div>
            <div class="lg:hero lg:min-h-screen max-sm:p-4">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/sqyvqR0/johny-georgiadis-3ewk-Nkf-Jj2k-unsplash.jpg" class="lg:max-w-md max-sm:min-w-sm rounded-lg shadow-2xl" />
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