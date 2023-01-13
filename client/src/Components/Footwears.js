
// import { Grid } from '@mui/material';
// import { Box } from '@mui/material';
// import * as React from 'react';
// import Footwear from './Footwear';
// import './Footwears.css'

// async function getProducts() {

//     var products=[];

//     const req=await fetch('http://localhost:8000/products')
//     const data=await req.json();
//     if(data.status==='ok'){
//       products=data.products;
//       // images=data.movies;
      
//     }
//     else{
      
//     }
//     console.log(data);
//     // var products=[
//     //     {id:1, name: 'Running shoes', price: 999, description:'Type of athletic shoes having have a rubber sole and canvas upper and are designed to be worn while doing physical activity, have additional sole support to protect the feet against ground impact.', image:'./images/running_shoes.jfif'},
//     //     {id:2, name: 'Boat shoes', price: 1299, description:'canvas or leather slip-on shoes that have rubber soles that feature a cut pattern to prevent slippage on wet decks.', image:'./images/boat_shoes.jfif'},
//     //     {id:3, name: 'Tennis shoes', price: 1699, description:'Type of athletic shoes having have a rubber sole and canvas upper and are designed to be worn while doing physical activity and are specifically designed to be flexible for tennis players.', image:'./images/tennis_shoes.jfif'},
//     //     {id:4, name: 'Ballet flats', price: 599, description:'lace-up ballet shoes are worn by ballet dancers when they dance.', image:'./images/ballet_flats.jfif'},
//     //     {id:5, name: 'Clogs', price: 799, description:'slip-on shoe that has a thick, wooden sole and an open back.', image:'./images/clogs.jfif'},
//     //     {id:6, name: 'Flip flops', price: 499, description:'flat sandals that have a Y-shaped strap that separates the big toe from the other toes. Flip flops are everyday casual shoes for the summer, particularly for the beach.', image:'./images/flip_flops.jpg'},
//     //     {id:7, name: 'Loafers', price: 999, description:' Loafers are slip-on shoes with a heel and rounded toe. When made out of leather, loafers can serve as a good pair of business shoes.', image:'./images/loafers.jfif'},
//     //     {id:8, name: 'Strappy sandals', price: 1399, description:'These sandals have straps across the foot and sometimes up the ankles. Strappy sandals can be flat or feature a low or high heel.', image:'./images/strappy_sandals.jfif'} 
//     // ];
//     return products;
// }



// export default function Footwears() {
   
    
//   const [products,setProducts]=React.useState([]);
    
//     var length=0;
//     var rows = [];
//     var i=0;
//   React.useEffect(()=>{},[products]);



    
// async function getProducts() {

//     const req=await fetch('http://localhost:8000/products');


//      const data=await req.json();


//     console.log(data);
//     if(data.status==='ok'){
//       setProducts(data.products);
//       length=products?.length;
//       // images=data.movies;
      
      
//     }
//     else{
      
//     }
    
//     // var products=[
//     //     {id:1, name: 'Running shoes', price: 999, description:'Type of athletic shoes having have a rubber sole and canvas upper and are designed to be worn while doing physical activity, have additional sole support to protect the feet against ground impact.', image:'./images/running_shoes.jfif'},
//     //     {id:2, name: 'Boat shoes', price: 1299, description:'canvas or leather slip-on shoes that have rubber soles that feature a cut pattern to prevent slippage on wet decks.', image:'./images/boat_shoes.jfif'},
//     //     {id:3, name: 'Tennis shoes', price: 1699, description:'Type of athletic shoes having have a rubber sole and canvas upper and are designed to be worn while doing physical activity and are specifically designed to be flexible for tennis players.', image:'./images/tennis_shoes.jfif'},
//     //     {id:4, name: 'Ballet flats', price: 599, description:'lace-up ballet shoes are worn by ballet dancers when they dance.', image:'./images/ballet_flats.jfif'},
//     //     {id:5, name: 'Clogs', price: 799, description:'slip-on shoe that has a thick, wooden sole and an open back.', image:'./images/clogs.jfif'},
//     //     {id:6, name: 'Flip flops', price: 499, description:'flat sandals that have a Y-shaped strap that separates the big toe from the other toes. Flip flops are everyday casual shoes for the summer, particularly for the beach.', image:'./images/flip_flops.jpg'},
//     //     {id:7, name: 'Loafers', price: 999, description:' Loafers are slip-on shoes with a heel and rounded toe. When made out of leather, loafers can serve as a good pair of business shoes.', image:'./images/loafers.jfif'},
//     //     {id:8, name: 'Strappy sandals', price: 1399, description:'These sandals have straps across the foot and sometimes up the ankles. Strappy sandals can be flat or feature a low or high heel.', image:'./images/strappy_sandals.jfif'} 
//     // ];
    
// }


// while(i<length){
//     if(i+3<length){
//         rows.push(
//             <div>
//             <Grid container>
//             <Grid item xs={1}>
//             </Grid>
//             <Grid item xs={2}>
//                 <Footwear key={i} message={products[i]} />
//             </Grid>
//             <Grid item xs={0.7}>  
//             </Grid>
//             <Grid item xs={2}>
//                 <Footwear key={(i+1)} message={products[i+1]} />
//             </Grid>
//             <Grid item xs={0.7}>   
//             </Grid>
//             <Grid item xs={2}>
//             <Footwear key={(i+2)} message={products[i+2]} />
//             </Grid>
//             <Grid item xs={0.7}>   
//             </Grid>
//             <Grid item xs={2}>
//             <Footwear key={(i+3)} message={products[i+3]} />
//             </Grid>
//             </Grid> 
//             <div className='smallheight'></div>
//             </div>)
//     }
//     else if(i+2<length){
//         rows.push(
//             <div>
//             <Grid container>
//             <Grid item xs={1}>
//             </Grid>
//             <Grid item xs={2}>
//                 <Footwear key={i} message={products[i]} />
//             </Grid>
//             <Grid item xs={0.7}>  
//             </Grid>
//             <Grid item xs={2}>
//                 <Footwear key={(i+1)} message={products[i+1]} />
//             </Grid>
//             <Grid item xs={0.7}>   
//             </Grid>
//             <Grid item xs={2}>
//             <Footwear key={(i+2)} message={products[i+2]} />
//             </Grid>
            
//             </Grid> 
//             <div className='smallheight'></div>
//             </div>)
//     }
//     else if(i+1<length){
//         rows.push(
//             <div>
//         <Grid container>
//             <Grid item xs={1}>
//             </Grid>
//             <Grid item xs={2}>
//                 <Footwear key={i} message={products[i]} />
//             </Grid>
//             <Grid item xs={0.7}>  
//             </Grid>
//             <Grid item xs={2}>
//                 <Footwear key={(i+1)} message={products[i+1]} />
//             </Grid>
            
//             </Grid> 
//             <div className='smallheight'></div>
//             </div>)
//     }
//     else if(i<length){
//         rows.push(
//             <div>
//             <Grid container>
//             <Grid item xs={1}>
//             </Grid>
//             <Grid item xs={2}>
//                 <Footwear key={i} message={products[i]} />
//             </Grid>
            
//             </Grid>
//             <div className='smallheight'></div>
//             </div> 
//         )
//     }
   
//     i=i+4;
// }


    
//     return(
// <Box>
//     {products.length!==0?
// <Box
//         sx={{
//           mx: '10%',
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'space-around'
//         }}>
//         {products.map(product => (
//             <div>
//                 <h1>1</h1>
            
//             </div>

//         ))}
//         </Box>
// : <Box>Loading</Box>}
// </Box>
        
//     //     <div>
//     // {dataget ?
//     //     <div>
//     //         <div className='smallheight'></div>
//     //         {rows}
//     //     </div>
//     //     :<div>Loading</div>
//     // }
//     // </div>
//     );
// }


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Footwear from './Footwear'

// import SwipeableViews from '../react-swipeable-views';
// import { autoPlay } from '../react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Footwears() {

  React.useEffect(()=>{populateData();},[])
  // let i=0;
  // const location = useLocation();
  const [products,setProducts]=React.useState([]);
  // var images=[];
  // const images = [
  //   { label: 'Raya and the Last Dragon', imgPath: '/images/Raya_cardImg.jpeg', backgroundImage:'/images/Raya_backgroundImg.jpeg', date: 'March 5, 2021', about: "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.", description: "Raya and the Last Dragon is a 2021 American computer-animated fantasy action-adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures.  It was directed by Don Hall and Carlos López Estrada, co-directed by Paul Briggs and John Ripa (in their feature directorial debuts), and produced by Osnat Shurer and Peter Del Vecho.  Featuring the voices of Kelly Marie Tran, Awkwafina, Izaac Wang, Gemma Chan, Daniel Dae Kim, Benedict Wong, Sandra Oh, Thalia Tran, Lucille Soong, and Alan Tudyk, Raya and the Last Dragon is about the titular warrior princess, Raya. She seeks out the fabled last dragon, hoping to restore the dragon gem that would bring back her father and banish the evil spirits known as the Druun from the land of Kumandra.", titleImage:'/images/Raya_titleImg.png' },
  //   { label: 'Tangled', imgPath: "/images/Tangled_cardImg.jpeg", backgroundImage:'/images/Tangled_backgroundImg.jpeg', date: 'November 24, 2010', about: "Rapunzel, a naive and young girl, is locked up by her overly protective mother. Her wish to escape into the world outside finally comes true when she meets the good-hearted thief, Flynn.", description: "Tangled is a 2010 American 3D computer-animated musical adventure fantasy comedy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.   The film was directed by Nathan Greno and Byron Howard (in the former’s feature directorial debut), and produced by Roy Conli, with a screenplay written by Dan Fogelman.  The film stars the voices of Mandy Moore, Zachary Levi, and Donna Murphy. Tangled tells the story of Rapunzel, a lost young princess with magical long blonde hair who yearns to leave her secluded tower. She accepts the aid of an intruder to take her out into the world which she has never seen.", titleImage:'/images/Tangled_titleImg.png'},
  //   { label: 'The Simpsons', imgPath: "/images/The_Simpsons_cardImg.jpeg", backgroundImage:'/images/The_Simpsons_backgroundImg.jpeg', date: 'December 17, 1989', about: "Working-class father Homer Simpson and his dysfunctional family deal with comical situations and the ups-and-downs of life in the town of Springfield.", description: "The Simpsons is an American animated sitcom created by Matt Groening for the Fox Broadcasting Company.  he series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie.  The family was conceived by Groening shortly before a solicitation for a series of animated shorts with producer James L. Brooks. He created a dysfunctional family and named the characters after his own family members, substituting Bart for his own name; he thought Simpson was a funny name in that it sounded similar to 'simpleton'.", titleImage:'/images/The_Simpsons_titleImg.png' },
  //   { label: 'Inside Out', imgPath: "/images/Inside_out_cardImg.jpeg", backgroundImage:'/images/Inside_out_backgroundImg.jpeg', date: 'June 19, 2015', about: "Eleven-year-old Riley moves to San Francisco, leaving behind her life in Minnesota. She and her five core emotions, Fear, Anger, Joy, Disgust and Sadness, struggle to cope with her new life.", description: "Inside Out is a 2015 American computer-animated film directed by Pete Docter from a screenplay he co-wrote with Meg LeFauve and Josh Cooley.  It stars the voices of Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader, Lewis Black, Mindy Kaling, Kaitlyn Dias, Diane Lane, and Kyle MacLachlan.  The film follows the inner workings inside the mind of a young girl named Riley, as five personified emotions administer her thoughts and actions as she adapts to her family's relocation.", titleImage:'/images/Inside_out_titleImg.png' },
  //   { label: 'Legends', imgPath: "/images/Legends_cardImg.jpeg", backgroundImage:'/images/Legends_backgroundImg.jpeg', date: 'September 9, 2015', about: "Identical twins Reggie and Ronnie Kray rise through the ranks of the criminal underworld to become two of London's most dreaded gangsters.", description: "Legend is a 2015 biographical crime thriller film written and directed by American director Brian Helgeland.  It is adapted from John Pearson's book The Profession of Violence: The Rise and Fall of the Kray Twins, which deals with their career and the relationship that bound them together, and follows their gruesome career to life imprisonment in 1969.  This is Helgeland's fifth feature film. Tom Hardy, Emily Browning, David Thewlis and Christopher Eccleston star with Colin Morgan, Chazz Palminteri, Paul Bettany, Tara Fitzgerald and Taron Egerton as well as the singer Duffy featured in supporting roles.", titleImage:'/images/Legends_titleImg.png' },
  //   { label: 'Incredible 2', imgPath: "/images/Incredibles_2_cardImg.jpeg", backgroundImage:'/images/Incredibles_2_backgroundImg.jpeg', date: 'June 15, 2018', about: "Entrusted with a task to restore public faith in superheroes, Helen sets off on a mission to catch a supervillain, while Bob faces the challenges of stay-at-home parenting.", description: "Incredibles 2 is a 2018 American computer-animated superhero film produced by Pixar Animation Studios and released by Walt Disney Pictures. Written and directed by Brad Bird, it is the sequel to The Incredibles.  The story follows the Incredibles as they try to restore the public's trust in superheroes while balancing their family life, only to combat a new foe who seeks to turn the populace against all superheroes.  Craig T. Nelson, Holly Hunter, Sarah Vowell and Samuel L. Jackson reprise their roles from the first film; newcomers to the cast include Huckleberry Milner, Bob Odenkirk, Catherine Keener and Jonathan Banks. Michael Giacchino returned to compose the score.", titleImage:'/images/Incredibles_2_titleImg.png'}
  // ];
 
  async function populateData(){
    const req=await fetch('http://localhost:8000/products',{
      
    })
    const data=await req.json();
    if(data.status==='ok'){
      setProducts(data.products);
      // images=data.movies;
      console.log(data);
    }
    else{
      alert(data.error);
    }
    console.log(data);
  }

  
  return (
    <Box>
    {products.length!=0?
    
    <Box
    sx={{
      mx: '10%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }}>
        {
          products.map(product => (
            <div style={{height:350, width:300,  margin:10}}>
                <Footwear key={7} message={product} />
            </div>
            
          ))
        }



      </Box>
    :<Box></Box>  }
    </Box>
  );
}