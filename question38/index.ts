//question 38
//     Default value. function called describe_city() such as Karachi is in Pakistan.at least one of which is not in the default country.

function different_cities(city: string , country: string = "pakistan"){
  console.log(`${city} is in ${country}.`);
};
different_cities("Lahore");
different_cities("Dubai","U.A E");
different_cities("New york","U.S"); 