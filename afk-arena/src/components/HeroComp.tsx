import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStartDay, updateMonth, updateYear, updateDays } from '../actions/actions';
import Day from './Day';
import { start } from 'repl';

const HeroComp = () => {

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
    <div className="hero-comp-container">
      This is Hero Comp
    </div>
  );
};

export default HeroComp;
