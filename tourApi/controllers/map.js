const { GoogleMap } = require('../models');

const googleMapController = {
  createMap: (req, res) => {
    const { lat, lng, mapName } = req.body;
    const { id } = req.params;

    if (!lat || !lng || !mapName) {
      return res.json({ errorMessage: '座標或地名要填寫唷！' });
    }

    GoogleMap.create({
      PostId: id,
      lat,
      lng,
      mapName,
    }).then(() => res.json({ success: true })).catch((error) => req.json({ errorMessage: `${error.toString()}` }));
    return false;
  },

  getMap: (req, res) => {
    const { id } = req.params;

    GoogleMap.findAll({
      where: {
        PostId: id,
      },
    }).then((maps) => res.json(maps));
  },
};

module.exports = googleMapController;
