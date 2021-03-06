const express = require("express");
const getCategories = require("./controllers/getCategories");
const getReview = require("./controllers/getReview");
const patchReview = require("./controllers/patchReview");
const getUsers = require("./controllers/getUsers");
const getReviews = require("./controllers/getReviews")
const getCommentsByReviewId = require("./controllers/getCommentsByReviewId")

const {
  handleNotFound,
  handleCustomErrors,
  handlePSQLErrors,
  handleServerErrors,
} = require("./errors");

const app = express();
app.use(express.json());

// GET requests

app.get("/api/categories", getCategories);

app.get("/api/reviews/:review_id", getReview);

app.get("/api/users", getUsers);

app.get("/api/reviews", getReviews);

app.get("/api/reviews/:review_id/comments", getCommentsByReviewId);

// PATCH requests

app.patch("/api/reviews/:review_id", patchReview);

// Error handling

app.all("*", handleNotFound);

app.use(handleCustomErrors);

app.use(handlePSQLErrors);

app.use(handleServerErrors);

module.exports = app;
