// $("#searchButton").on("click", function (event) {
//  event.preventDefault();
//  const apiKey = 'O4IbImplojlwivxMbRog1PeXEgDITdNF';
//  const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey;
//  console.log(queryURL);


//  //Getting the info 
//  let searchForArticle = $("#search-terms").val().trim();    // this shorten it to get the ID
//  console.log(searchForArticle);
//  let numberofRecords = $("#qty-records").val(); //gets the ID
//  console.log(numberofRecords);
//  let startYearArticle = $("#start-year").val();
//  console.log(startYearArticle);
//  let endYearArticle = $("#end-year").val();
//  console.log(endYearArticle);

//  //Fetch API call
//  fetch(queryURL)
//   .then(function (response) {
//    return response.json(); // waiting for the reponse to parse in to JSON format 
//   })
//   .then(function (data) {
//    // console.log(data);

//    // location for the documents 
//    const viewArticle = data.response.docs;
//    // console.log(viewArticle);
//    presentArticles(viewArticle)
//   })
//   // deals with if an error happens when fetching
//   .catch(function (error) {
//    console.error("Error:", error);
//   });
// });

// function presentArticles() {

//  const articlesCont = $("#articles-container");

//  // Clear previous articles
//  articlesCont.empty();

//  // Loops through the articles and display them
//  articles.forEach(function (article) {
//   const articleEl = $("<div>").addClass("article");
//   articleElement.append($("<h3>").text(article.headline.main));
//   articleElement.append($("<p>").text(article.snippet));
//   articlesCont.append(articleEl);
//  });

//  presentArticles(viewArticle) //combining the function with the viewarticles array
// }


// // Function to empty out the articles
// function clear() {
//  const articlesCont = $("#articles-container");
//  articlesCont.empty();

// }

// //  .on("click") function associated with the clear button
// $("#clear-button").on("click", clear);




// console.log("app.js is working ");

