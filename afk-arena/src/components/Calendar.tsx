import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStartDay, updateMonth, updateYear, updateDays } from '../actions/actions';
import Day from './Day';
import { start } from 'repl';

let dayMap = new Array(35).fill(0);

const Calendar = () => {
  const {startDayIndex, month, year, days} = useSelector((state: any) =>
        ({startDayIndex: state.calendar.startDayIndex,
        month: state.calendar.month,
        year: state.calendar.year,
        days: state.calendar.days}));
  const dispatch = useDispatch();

  const handleUpdateStartDay = (num: Number) => {
    dispatch(updateStartDay(num));
  };

  const handleUpdateMonth = (num: Number) => {
    dispatch(updateMonth(num));
  };

  const handleUpdateYear = (num: Number) => {
    dispatch(updateYear(num));
  };

  const handleUpdateDays = (num: Number) => {
    dispatch(updateDays(num));
  };

    // componentDidMount equivalent
    useEffect(() => {
      console.log('Component mounted');
      // Additional logic on component mount
      let time = document.querySelector(`input[type="month"]`) as HTMLInputElement;
      time.valueAsDate = new Date();
      updateTime();
  
      // componentWillUnmount equivalent
      return () => {
        console.log('Component unmounted');
        // Cleanup logic before component unmount
      };
    }, []); // Empty dependency array to ensure the effect runs only once on mount
  
    // componentDidUpdate equivalent
    useEffect(() => {
      console.log('Component updated');
      // Additional logic on component update
    }, [days]); // Run the effect only when 'count' changes

  const updateTime = () => {
    let time = document.querySelector(`input[type="month"]`) as HTMLInputElement;
    if(time){
      let dates = time.value.split("-");
      handleUpdateMonth(parseInt(dates[1]));
      handleUpdateYear(parseInt(dates[0]));
      const startDate = new Date(parseInt(dates[0]), parseInt(dates[1]) - 1, 1);
      console.log(startDate.toString());
      let startDateParsed = startDate.toString().split(" ")[0];
      let i=0;
      switch(startDateParsed){
        case 'Sun':
          handleUpdateStartDay(0);
          break;
        case 'Mon':
          handleUpdateStartDay(1);
          break;
        case 'Tue':
          handleUpdateStartDay(2);
          break;
        case 'Wed':
          handleUpdateStartDay(3);
          break;
        case 'Thu':
          handleUpdateStartDay(4);
          break;
        case 'Fri':
          handleUpdateStartDay(5);
          break;
        case 'Sat':
          handleUpdateStartDay(6);
          break;
        default:
          break;
      }
      switch (parseInt(dates[1])) {
        case 1: // January
        case 3: // March
        case 5: // May
        case 7: // July
        case 8: // August
        case 10: // October
        case 12: // December
          handleUpdateDays(31);
          break;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
          handleUpdateDays(30);
          break;
        case 2: // February
          // Check for leap year (divisible by 4 but not divisible by 100 unless also divisible by 400)
          if ((parseInt(dates[0]) % 4 === 0 && parseInt(dates[0]) % 100 !== 0) || parseInt(dates[0]) % 400 === 0) {
            handleUpdateDays(29);
          } else {
            handleUpdateDays(28);
          }
          break;
        default:
          throw new Error('Invalid month');
    }
    dayMap = new Array(35).fill(0);
  }
  };

  return (
    <div>
      <p>startDayIndex: {startDayIndex}</p>
      <p>month: {month}</p>
      <p>year: {year}</p>
      <p>days: {days}</p>

      <input type="month"></input>
      <button onClick={updateTime}>Confirm Date</button>
      <div className="calendar-display-container">
        <div className="days-of-the-week">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
        <div className="calendar-display">
          {dayMap.map((x,index)=>{
            if(index<startDayIndex || index>days){
              return <Day
                empty={true}
                dayNumber={index}
              />
            }
            return <Day
            empty={false}
            dayNumber={index - startDayIndex + 1}
            />
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
