const { Post, User, Category } = require('../models');

const regex = /\S/;

const postController = {

  index: (req, res) => {
    Post.findAll({
      include: [User, Category],
    }).then((posts) => res.json(posts));
  },

  post: (req, res) => {
    Post.findOne({
      include: User,
      where: {
        id: req.params.id,
      },
    }).then((post) => res.json(post));
  },

  add: (req, res) => {
    const { userId } = req.session;
    const { title, content, categoryId } = req.body;

    if (!userId) {
      return res.json({ errorMessage: '請先登入' });
    }

    if (!content || !title || !categoryId) {
      return res.json({ errorMessage: '標題和內文都要寫唷！' });
    }

    Post.create({
      UserId: userId,
      title,
      content,
      CategoryId: categoryId,
    }).then(() => {
      res.send('success');
    }).catch((error) => res.json({ errorMessage: error.toString() }));
    return false;
  },

  handleUpdate: (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    const { userId } = req.session;

    if (!userId) {
      return res.json({ errorMessage: '請先登入' });
    }

    if (!regex.test(title) || !regex.test(content)) {
      return res.json({ errorMessage: '標題和內文不能空白唷！' });
    }

    Post.findOne({
      where: {
        id,
        UserId: userId,
      },
    }).then((post) => post.update({
      title,
      content,
    })).then(() => res.json({ success: true }))
      .catch((error) => res.json({ error }));
    return false;
  },

  handleDelete: (req, res) => {
    const { id } = req.params;
    const { userId } = req.session;

    Post.findOne({
      where: {
        id,
        UserId: userId,
      },
    }).then((post) => post.destroy())
      .then(() => res.send('success'))
      .catch((error) => res.send(error));

    return false;
  },

  getCategory: (req, res) => {
    Category.findAll({
    }).then((category) => res.json(category));
  },

  setCategory: (req, res) => {
    const { category } = req.body;

    if (!category) {
      return res.json({ errorMessage: '標題和內文都要寫唷！' });
    }

    Category.create({
      category,
    }).then(() => res.json({ success: true })).catch((error) => res.json({ errorMessage: error.toString() }));
    return false;
  },
};

module.exports = postController;
