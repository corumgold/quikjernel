const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/quikjernel");

const sync = async () => {
  await db.sync({ force: true });

  console.log("⛓ Synced!");
};

module.exports = {
  sync,
};
