import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Mainboard from './components/Mainboard/Mainboard';
import { search} from './services/unsplash';
import db from './firebase';
import './App.css';

function App() {

  const [searchedPins, setSearchedPins] = useState([]);

  const onSearchSubmit = (term) => {
      let promises = [];
      let searchedPins = [];
      promises.push(
        search(term).then((res)=> {
          let r = (res.data.results);
          searchedPins = r
          // r.map((pin)=> {
           // searchedPins.push(pin);
          //})
        })
      );
      Promise.all(promises).then(()=> {
        setSearchedPins(searchedPins);
      })
  }

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    db.collection('terms').onSnapshot((snapshot)=> {
      let snapshotData = snapshot.docs; 

      if(snapshotData.length >= 10){
        snapshotData = snapshotData.slice(
          snapshotData.length - 5,
          snapshotData.length
        );
      }
    
      snapshotData.forEach((doc)=> {
        promises.push(
          search(doc.data().term).then((res)=> {
            res.data.results.forEach((obj)=> {
            pinData.push(obj);
            })
            pinData.sort((a,b) => {
              return 0.5 - Math.random();
            })
          })
        )
      })
      
      Promise.all(promises).then(()=> {
        setSearchedPins(pinData);
      })
    })    
  }

  useEffect(() => {
    getNewPins()
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <Header onSearch={onSearchSubmit}/>  
      </div>
      <div className="app__body">
        <Mainboard pinsData={searchedPins}/>
      </div>
    </div>
  );
}

export default App;
