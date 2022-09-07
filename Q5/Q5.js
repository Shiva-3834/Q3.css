const people = [
    {name:"Rohan", age:24}, /*creating a array of name and age*/
    {name:"Ujjwal", age:27},
    {name:"Tara", age:18},
    {name:"Sagar", age:20},
    {name:"Kumar", age:21}
  
  ];
  
  
  
  
  
  people.sort(function(a, b){return a.age - b.age});// Comparing the values
  // When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
  displaypeople();
  
  function displaypeople() {
    document.getElementById("demo").innerHTML =
    people[0].name +"<br>" + //now people[0] contains the lowest age

    people[1].name +"<br>" +
    people[2].name +"<br>" +
    people[4].name ;
  
  }