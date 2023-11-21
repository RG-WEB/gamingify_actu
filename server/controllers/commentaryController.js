const db = require("../db");
const { StatusCodes } = require("http-status-codes");

// Retourne tous les commentaires d'un seul article avec son ID

const getAllCommentaryArticles = async (req, res) => {
  const { article_id } = req.params;
  const result = await db.query(
    "SELECT commentary_id, description, date_of_creation, name FROM commentary JOIN users ON commentary.user_id = users.user_id where article_id = $1 order by date_of_creation ASC",
    [article_id]
  );
  res.status(StatusCodes.CREATED).json({ items: result.rows });
};

// Créer un commentaire

const createCommentary = async (req, res) => {
  console.log(req.user.userId);
  const { description } = req.body;
  const userId = req.user.userId;
  const { id } = req.params;
  console.log(req.params);

  const result = await db.query(
    "INSERT INTO commentary (description, user_id, article_id) VALUES ($1, $2, $3) RETURNING *",
    [description, userId, id]
  );

  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Commentaire créé", item: result });
};

module.exports = {
  createCommentary,
  getAllCommentaryArticles,
};
