const { Router } = require("express");
const router = Router();

const {
  authenticateUser,
} = require("../middlewares/authenticationMiddleware.js");

const {
  validateAddCommentary,
  validateIdParamCommentary,
} = require("../middlewares/validationMiddleware.js");

const {
  createCommentary,
  getAllCommentaryArticles,
} = require("../controllers/commentaryController.js");

// As User and Admin, to get all commentaries from single article by id

router.route("/:article_id").get(getAllCommentaryArticles);
router.use(authenticateUser).route("/:id").post(createCommentary),
  validateAddCommentary;

// As User and Admin, to create a commentary

router.post(
  "/:id",
  authenticateUser,
  createCommentary,
  validateIdParamCommentary
);

module.exports = router;

// trycatch of createCommentary

router.post("/:article_id", async (req, res) => {
  try {
    createCommentary(req, res);
  } catch (error) {
    console.log(error);
  }
});
