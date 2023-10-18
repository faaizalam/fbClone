



const getDistance = (x, y) => {
 
    // } else if (x === "surjani town,karachi sindh pakistan" && y === "karachi saddar sindh karachi") {
    //     return 300;
    // } else if (x === "multan town,karachi sindh pakistan" && y === "lahore punjab") {
    //     return 80;
    // } else if (x === "orangi town 6-b, karachi sindh pakistan" && y === "surjani town,karachi sindh pakistan") {
    //     return 500;
    // }else if(x==="islamabad"&&y==="mirpur"){
    //     return 340

    // }
    // else if(x==="mirpur"&&y==="islamabad"){
    //     return 150

    // }
    // else if(x==="dubai"&&y ==="islamabad"){
    //     return 90
    // }
}

async function filterCities(x) {
    
    // for (const iterator of cities) {
        console.log(x)
    let groupedCity = [];
   
    let distance = 0;
    let groupObj = {};

//  for (const city of x) {
//      const origin = city.origid;
//      const destination = city.destination;
     
//      distance = await getDistance(origin, destination);
//      if (distance<=500) {
            
                
//                 groupObj[distance] = groupObj[distance] || [];
//                 groupObj[distance].push(city);
//             }
//     }
    
//     const sortedDistances = Object.keys(groupObj).sort((a, b) => a - b);
// for (const distance of sortedDistances) {
//     groupedCity.push(...groupObj[distance]);
//     }  
//     console.log(groupedCity)
    
    
    
    let t = [];
    let totalWeight = 0;
    for (const it of x) {
//    console.log(it)
if (totalWeight+it.weight>=11001||t.length===4) {
    console.log(t)
    
    
    totalWeight=0
    t=[]
    console.log("finshed")
}
if (totalWeight+it.weight<=11000&&t.length<=4) {
    t.push(it)
    totalWeight += it.weight;
    }

   
      if (x[x.length-1]===it) {
        console.log(t,"last")
        
      }  
            
            
         
       
        
      
    }

    
    
// }
}

const cities = 
    [
        {
          id: '652e03aff390f35b1a273090',
          weight: 10149,
          user: '652ce0281baea80d5d48405b',
          CarrierType: 'Truckload',
          pickup: 'RAMOS ARIZPE  La-Z-Boy - RAMOS ARIZPE  CU  PARQUE INDUSTRIAL AMISTAD AEROPUERTO  25900',
          destination: 'CARROLLTON  1212 TREND DRIVE  TX  1212 TREND DRIVE  75006'
        },
        {
          id: '652e03aff390f35b1a2730a0',
          weight: 1963,
          user: '652ce0281baea80d5d48405b',
          CarrierType: 'Truckload',
          pickup: 'RAMOS ARIZPE  La-Z-Boy - RAMOS ARIZPE  CU  PARQUE INDUSTRIAL AMISTAD AEROPUERTO  25900',
          destination: 'SHREVEPORT  AHART,L.L.C.  LA  DBA/LA-Z-BOY FURN GALLERIES  71105'
        },
        {
          id: '652e03aff390f35b1a2730a2',
          weight: 1300,
          user: '652ce0281baea80d5d48405b',
          CarrierType: 'Truckload',
          pickup: 'RAMOS ARIZPE  La-Z-Boy - RAMOS ARIZPE  CU  PARQUE INDUSTRIAL AMISTAD AEROPUERTO  25900',
          destination: 'SHREVEPORT  AHART,L.L.C.  LA  DBA/LA-Z-BOY FURN GALLERIES  71105'
        },
        {
          id: '652e03aff390f35b1a27309a',
          weight: 10486,
          user: '652ce0281baea80d5d48405b',
          CarrierType: 'Truckload',
          pickup: 'RAMOS ARIZPE  La-Z-Boy - RAMOS ARIZPE  CU  PARQUE INDUSTRIAL AMISTAD AEROPUERTO  25900',
          destination: 'TUPELO  3406 W MAIN ST  MS  3406 W MAIN ST  38801'
        },
        {
          id: '652e03aff390f35b1a27309c',
          weight: 8822,
          user: '652ce0281baea80d5d48405b',
          CarrierType: 'Truckload',
          pickup: 'RAMOS ARIZPE  La-Z-Boy - RAMOS ARIZPE  CU  PARQUE INDUSTRIAL AMISTAD AEROPUERTO  25900',
          destination: 'TUPELO  3406 W MAIN ST  MS  3406 W MAIN ST  38801'
        },
        {
          id: '652e03aff390f35b1a27309e',
          weight: 8364,
          user: '652ce0281baea80d5d48405b',
          CarrierType: 'Truckload',
          pickup: 'RAMOS ARIZPE  La-Z-Boy - RAMOS ARIZPE  CU  PARQUE INDUSTRIAL AMISTAD AEROPUERTO  25900',
          destination: 'TUPELO  3406 W MAIN ST  MS  3406 W MAIN ST  38801'
        },
        {
          id: '652e03aff390f35b1a273094',
          weight: 2009,
          user: '652ce0281baea80d5d48405b',
          CarrierType: 'Truckload',
          pickup: 'RAMOS ARIZPE  La-Z-Boy - RAMOS ARIZPE  CU  PARQUE INDUSTRIAL AMISTAD AEROPUERTO  25900',
          destination: 'ORLANDO  3057 TRADEPORT DRIVE  FL  3057 TRADEPORT DRIVE  32824'
        },
        {
          id: '652e03aff390f35b1a273098',
          weight: 3239,
          user: '652ce0281baea80d5d48405b',
          CarrierType: 'Truckload',
          pickup: 'RAMOS ARIZPE  La-Z-Boy - RAMOS ARIZPE  CU  PARQUE INDUSTRIAL AMISTAD AEROPUERTO  25900',
          destination: 'ORLANDO  3057 TRADEPORT DRIVE  FL  3057 TRADEPORT DRIVE  32824'
        }
      
    // { origid: "jurjani town,karachi sindh pakistan", destination: "hydrabad sindh pakistan",w:900 },
    // { origid: "lahore pakistan", destination: "hydrabad sindh pakistan",w:300  },
    // { origid: "surjani town,karachi sindh pakistan", destination: "karachi saddar sindh karachi",w:300  },
    // { origid: "multan town,karachi sindh pakistan", destination: "lahore punjab" ,w:600 },
    // { origid: "orangi town 6-b, karachi sindh pakistan", destination: "surjani town,karachi sindh pakistan" ,w:700 },
    // { origid: "islamabad", destination: "mirpur",w:100 },
    // { origid: "mirpur", destination: "islamabad",w:700  },
    // { origid: "dubai", destination: "islamabad",w:100  }
];

filterCities(cities);
