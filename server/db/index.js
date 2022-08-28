const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/quikjernel");

const Entry = db.define("entries", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mood: {
    type: Sequelize.STRING,
  },
  entryText: {
    type: Sequelize.STRING,
  },
});

const sync = async () => {
  await db.sync({ force: true });

  console.log("⛓ Synced!");
};

module.exports = {
  sync,
  Entry,
};
