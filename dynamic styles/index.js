// odd_sum=0;
// even_sum=0;
// for(let i=1;i<=10;i++)
// {
//     if(i%2!=0){
//         odd_sum+=i;
//     }
//     else if(i%2==0){
//         even_sum+=i;
//     }
// }
// console.log(odd_sum);
// console.log(even_sum);



// let i=1;
// while (i<=5)
// {
//     console.log(i);
//     i+=1;
// }



//object creation
// let carobj={
//     color:"red",
//     speed:50,
//     drive:4,
//     milage:20
// };

// for(let key in carobj){
//     console.log(carobj[key]);
// }


// carobj["milage"]=400;
// console.log(carobj);


// carobj.speed=1000;
// console.log(carobj);

// carobj.model="lambo"
// console.log(carobj)



// let userobj={
//     name:"saipavan",
//     email:"saipavanpulluri07@gmail.com",
//     password:"Pavan@071204",
//     marks:
//     {
//         phy:99,
//         mat:100,
//         eng:54
//     }
// };

// console.log(userobj.marks["eng"]);

// let users=[
//     {name:"abc" ,age:20},
//     {name:"aaa",age:19},
// ]

// let user="aaa";   // check whether the name is there and give the object as output

// for(let obj of users)
// {
//     if(obj.name==user){
//         console.log(obj);
//     }
// }


// let users=[
//     {email:"saipavan@gmail.com",pass:"ddd123"},
//     {email:"saipavan727@gmail.com",pass:"dd34123"}
// ]

// let formemail="saipavan@gmail.com";
// let formpass="ddd123";


// let isValid=false;
// for(let obj of users){
//     if (obj.email==formemail && obj.pass==formpass)
//     {
//         isValid=true;
//     }
// }
// if(isValid==true ){
//     console.log("valid");
// }
// else{
//     console.log("invalid");
// }




// let arr=[1,2,3,4,5,7,8,9];
// let x=arr.unshift(10000);
// console.log(x);
// console.log(arr);
// let remove=arr.pop();
// console.log(remove);
// console.log(arr);


// let arr1=[1,2,3,4,5];
// let arr2=[4,5,6,7];
// let rv=arr1.concat(arr2);
// console.log(rv);


// let arr1=[1,2,3,4,5];
// // let x=arr1.splice(1,2);
// // console.log(x);
// // console.log(arr1);
// console.log(arr1.indexOf(4));
// console.log(arr1.includes(4));
// console.log(Math.round(1.5))

// obj={
//     'name':"Raju",
//     'age':10
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// console.log('hi');
// console.log(document);


// let API="http://localhost:3000/student";
// async function getData(){
//     let res=await fetch(API,{
//         method:"GET"
//     });
//     let data=await res.json();
//     console.log(data);
// }
// getData();


  // const form = document.querySelector('.contact-form');
  // form.addEventListener('submit', async (e) => {
  //   e.preventDefault();

  //   const name = form.querySelector('input[placeholder="Your Name"]').value;
  //   const email = form.querySelector('input[placeholder="Your Email"]').value;
  //   const subject = form.querySelector('input[placeholder="Subject"]').value;
  //   const message = form.querySelector('textarea').value;

  //   const response = await fetch('http://localhost:5000/submit-form', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email, subject, message }),
  //   });

  //   const result = await response.json();
  //   alert(result.success || result.error);
  // });

// API="http://localhost:3000/student";
// async function getData()
// {
//   try{
//     let res=await axios.delete(API);
//     console.log(res.data);

//   }
//   catch(err)
//   {
//     console.log("error handled");
//   }
//   alert("cant deleted");
// }

// const apiKey = "0edf63c143df47d2b0d74154250207";
// const city = "Hyderabad";
// const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

// async function getData() {
//   try {
//     const res = await axios.get(url);
//     const data = res.data;

//     const location = data.location.name + ", " + data.location.region;
//     const temp = data.current.temp_c + "°C";
//     const condition = data.current.condition.text;

//     document.getElementById("weather").innerHTML = `
//       <p><strong>Location:</strong> ${location}</p>
//       <p><strong>Temperature:</strong> ${temp}</p>
//       <p><strong>Condition:</strong> ${condition}</p>
//     `;
//   } catch (err) {
//     document.getElementById("weather").innerText = "Failed to fetch weather data.";
//   }
// }

// getData();


