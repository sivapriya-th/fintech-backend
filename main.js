const database = require("./database");

// query(what query to run, what to do with the results -> callback function)
//database.connection.query("select * from seller", (errors, results) => {
  //if (errors) {
  //  console.log("Errors: " + errors);
 // } else {
 //   console.log(results);
//  }
//});

var name = "Jon";
var balance = 20000;

database.connection.query(
  `insert into seller (seller_name, seller_wallet) values ('${name}','${balance}')`,
  (errors, results) => {
    if (errors) {
      console.log("Errors: " + errors);
    } else {
      console.log(results);
    }
  }
);
