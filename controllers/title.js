const Titles = require('../models/Titles');

const getTitles = async (req, res) => {
  try {
    if (!req.query.id) {
      const allTitles = await Titles.find()
        .select({
          TitleName: 1,
          TitleId: 1,
          ReleaseYear: 1,
          Genres: 1,
          _id: 0
        })
        .sort({ TitleName: 1 });
      res.json(allTitles);
    } else {
      const partialTitle = await Titles.find({
        TitleName: { $regex: req.query.id, $options: 'i' }
      })
        .select({
          TitleName: 1,
          TitleId: 1,
          ReleaseYear: 1,
          Genres: 1,
          _id: 0
        })
        .sort({ TitleName: 1 });
      res.json(partialTitle);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getTitleDetails = async (req, res) => {
  try {
    if (!req.query.id) {
      res.status(422).send('No title found.');
    } else {
      const details = await Titles.findOne({ TitleId: req.query.id });
      res.json(details);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getTitles,
  getTitleDetails
};
