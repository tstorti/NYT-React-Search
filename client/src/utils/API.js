import axios from "axios";

export default {
  // Gets all articles
  getArticles: function(searchTerm, startYear, endYear) {
    
    //set queryURL
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=";
    let queryURL = queryURLBase + searchTerm;
    //need to check if these values aren't provided, then ignore below code
    // queryURL = queryURL + "&begin_date=" + startYear + "0101";
    // queryURL = queryURL + "&end_date=" + endYear + "0101";

    return axios.get(queryURL);
  },
  getSavedArticles: function(){
    return axios.get("/api/articles/");
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
