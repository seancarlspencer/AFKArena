import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStartDay, updateMonth, updateYear, updateDays } from '../actions/actions';
import Day from './Day';
import HeroComp from './HeroComp';
import { start } from 'repl';

const HeroDamage = () => {

    // componentDidMount equivalent
    useEffect(() => {
      console.log('Component mounted');
      // Additional logic on component mount
  
      // componentWillUnmount equivalent
      return () => {
        console.log('Component unmounted');
        // Cleanup logic before component unmount
      };
    }, []); // Empty dependency array to ensure the effect runs only once on mount
  

  return (
    <div>
        <HeroComp />
    </div>
  );
};

export default HeroDamage;
