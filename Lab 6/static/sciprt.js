// {
//     var x = 5;
//     var y = 7;
//     var z = x+y;
//     console.log("hi");
//     console.log(z);
//     window.alert("hi"+ z)
// }


// var x = 5;
// var y = 7;

// function MyFirstFunction(x,y) {
//     return x+y;
// }
// var z = MyFirstFunction(2,3);
// var z = MyFirstFunction(4456,8890)



// var d = new Date();
// var h = d.getHours();
// // window.alert(d);
// // window.alert(h);


// var student = {name:"Noah", age:19}

// if (h=16) {
//     // window.alert("good afternoon")
//     document.getElementById("123").innerHTML = "good afternoon " + student.name + "!";
    
// }

// links = document.getElementsByName('a');
// newlinks = Array.from(links);
// console.log(newlinks);
// console.log(window.location);

// links.forEach(element => {
//     console.log(element);
// });



const AllLinks = document.querySelectorAll('nav a');
console.log(AllLinks);

AllLinks.forEach(
    MyLink => {
        if (MyLink.href.includes(window.location.pathname)) {
            MyLink.classList.add("active");
            console.log("I am in");
        }
    }
)


function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
