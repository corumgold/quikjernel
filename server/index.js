const PORT = process.env.PORT || 3001;
const app = require("./app");
const db = require("./db");

const init = async () => {
  await db.sync();
  app.listen(PORT, () =>
    console.log(`🔊 Listening at http://localhost:${PORT}`)
  );
};

init();
