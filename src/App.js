import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'

const shuffle = array2 => {
  let array = new Array(array2);
	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

const noImageIcon = 'http://webint.io/img/3b112900-7d34-11e9-aef4-f342897fbe7f'
let clickedImages=[];
function App() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  let [newScore, setNewScore] =useState(0);
  const [currentChoices, setCurrentChoices] = useState([]);
  
  const handleClick = (e, id)=> {
    e.stopPropagation();

    const visibleImages = images.map(image => {
      if (image.id === id) {
        return { ...image, visible: !image.visible };
      }
      return image;
    });
    setImages(visibleImages);

    const found = images.find(image => image.id === id);
    console.log('found', found);

    if (currentChoices.length === 2) {
      setCurrentChoices([]);
    } else if (currentChoices.length === 1) {
      const choice1 = currentChoices[0];

      if (choice1.src === found.src) {
        console.log('matched!');
        console.log('clicked');
        newScore = score + 1;
        setScore(newScore);
        setNewScore(newScore); 
        setCurrentChoices([]);
      } else {
        setCurrentChoices([...currentChoices, found]);
      }
    } else {
      setCurrentChoices([...currentChoices, found]);
    }



    // TODO: when the user clicks use map to change the visiblity of the image that matches the ID of
    // what was clicked
    // all adding scores, reseting the game, should live here
    // if (clickedImages.indexOf(id) == -1){
    //   console.log('clicked');
    //     newScore = score + 1;
    //   setScore(newScore);
    //   setNewScore(newScore); 
    //   const shuffledImages = shuffle(images);
    //   // setImages(shuffledImages);
    //   clickedImages.push(id);
    //  // console.log('SHUFFLED IMAGES:', images);

    //   //console.log('NEW SCORE: ', newScore);
    //   console.log('USER CLICKED: ', id,clickedImages);
    // } else {
    //   setScore(0); 
    //   const shuffledImages = shuffle(images);
    //   // setImages(shuffledImages);
    // }
    
    
    
  }

  useEffect(() => {
    // images
    const images = [
      { src: 'https://images.unsplash.com/photo-1486989813814-da4a10a6fc7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', id: 1, visible: false },
      { src: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 2, visible: false },
      { src: 'https://images.unsplash.com/photo-1486989813814-da4a10a6fc7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', id: 3, visible: false },
      
      { src: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500', id: 4, visible: false },
      { src: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 5, visible: false },
      { src: 'http://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg', id: 6, visible: false },      
      
      { src: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500', id: 7, visible: false },
      { src: 'http://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg',id: 9, visible: false },
    ];

    setImages(images);

    console.log("effect called!", images);
  }, []);

  return (
    <div> 
    <Header
    score= {score}
    newScore= {newScore}
    />
    <div className="container">
    <div className="row">
      {images.map(image => {
        let imageUrl;
        if (image.visible === false) {
          imageUrl = noImageIcon;
        } else {
          imageUrl = image.src;
        }
        return <img src={imageUrl} width="200" height="200" style={{margin:10}}
        className= "col-md-3" onClick={e => handleClick (e, image.id)} />;
         
    })}
    </div>
    </div>
    </div>
  );
}

export default App;
