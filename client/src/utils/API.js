import axios from "axios";

export default {
  // Gets all books
  getSenators: function() {
    return axios.get("/api/senators");
  },
  // Gets the book with the given id
  getSenator: function(id) {
    return axios.get("/api/senators/" + id);
  },
  // Deletes the book with the given id
  deleteSenator: function(id) {
    return axios.delete("/api/senators/" + id);
  },
  // Saves a book to the database
  saveSenator: function(senatorData) {
    return axios.post("/api/senators", senatorData);
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
     getUsers: function() {
      return axios.get("/api/users");
    },
    // Gets the book with the given id
    getUser: function(id) {
      return axios.get("/api/users/" + id);
    },
    // Deletes the book with the given id
    deleteUser: function(id) {
      return axios.delete("/api/users/" + id);
    },
    // Saves a book to the database
    saveUser: function(stateData) {
      return axios.post("/api/users", stateData);
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
