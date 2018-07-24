import axios from "axios";

export default {
  // Gets all books
  getPersons: function() {
    return axios.get("/api/persons");
  },
  // Gets the book with the given id
  getPerson: function(id) {
    return axios.get("/api/persons/" + id);
  },
  // Deletes the book with the given id
  deletePerson: function(id) {
    return axios.delete("/api/persons/" + id);
  },
  // Saves a book to the database
  savePerson: function(personData) {
    return axios.post("/api/persons", personData);
  },
  getBills: function() {
    return axios.get("/api/bills");
  },
  // Gets the book with the given id
  getBill: function(id) {
    return axios.get("/api/bills/" + id);
  },
  // Deletes the book with the given id
  deleteBill: function(id) {
    return axios.delete("/api/bills/" + id);
  },
  // Saves a book to the database
  saveBill: function(billData) {
    return axios.post("/api/bills", billData);
  },
   // Gets all books
   getStates: function() {
    return axios.get("/api/states");
  },
  // Gets the book with the given id
  getState: function(id) {
    return axios.get("/api/states/" + id);
  },
  // Deletes the book with the given id
  deleteState: function(id) {
    return axios.delete("/api/states/" + id);
  },
  // Saves a book to the database
  saveState: function(stateData) {
    return axios.post("/api/states", stateData);
  },

   // Gets all books
   getBlogs: function() {
    return axios.get("/api/blogs");
  },

  getVotes: function() {
    return axios.get("/api/blogs/votes");
  },
  // Gets the book with the given id
  getBlog: function(id) {
    return axios.get("/api/blogs/" + id);
  },
  // Deletes the book with the given id
  deleteBlog: function(id) {
    return axios.delete("/api/blogs/" + id);
  },
  // Saves a book to the database
  saveBlog: function(blogData) {
    return axios.post("/api/blogs", blogData);
  },

     // Gets all books
     getComments: function() {
      return axios.get("/api/comments");
    },
  
    // Gets the book with the given id
    getComment: function(id) {
      return axios.get("/api/comments/" + id);
    },
    // Deletes the book with the given id
    deleteComment: function(id) {
      return axios.delete("/api/comments/" + id);
    },
    // Saves a book to the database
    saveComment: function(blogData) {
      return axios.post("/api/comments", blogData);
    }
};
