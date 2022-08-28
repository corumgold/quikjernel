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

  await Entry.create({
    title: "Feeling Good!",
    mood: "😊",
    entryText: "today was a great day! I am feeling great!",
  });

  await Entry.create({
    title: "Feeling Sad!",
    mood: "😞",
    entryText: "I am feeling sad today...",
  });

  console.log("⛓ Synced!");
};

module.exports = {
  db,
  sync,
  Entry,
};
