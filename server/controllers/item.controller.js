const { Router } = require('express');
const { Item, ItemStatus } = require('../models/item');
const { User } = require('../models/user');
const { badRequest, notFound } = require('../errors/index');

const router = Router();

/**
 * /item
 * create item
 */
router.post('/', (req, res, next) => {
  const item = new Item({
    ...req.body,
  });

  item
    .save()
    .then(() => {
      res.json({
        itemId: item.id,
      });
    })
    .catch(() => {
      next(badRequest());
    });
});

/**
 * /item/{itemId}
 */
router.get('/:id', (req, res, next) => {
  Item.getItemById(req.params.id)
    .then(item => res.json({ ...item }))
    .catch(() => next(notFound('Item Not Found')));
});


/**
 * /item/status/{ItemStatus}
 */
router.get('/status/:status', (req, res, next) => {
  const STATUS = req.params.status;
  try {
    if (
      Object.keys(ItemStatus).findIndex(status => STATUS === status) !== -1
    ) {
      Item.getItemsByStatus(STATUS).then(items => res.json(items));
    } else {
      throw badRequest();
    }
  } catch (error) {
    next(error);
  }
});

router.post('/:id/favorite', async (req, res) => {
  try {
    const itemId = req.params.id;
    const userid = req.get('userid');
    const item = await Item.getItemById(itemId, false);
    const user = await User.getUserById(userid, false);

    Item.addFavorite(item, user);
    User.addFavorite(user, item);

    res.status(200).send();
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
