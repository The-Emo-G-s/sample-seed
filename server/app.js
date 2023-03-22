const PORT = 8080;
const server = require("");
const { db } = require("../prisma/schema.prisma");



db.sync().then(() => {
    server.listen(PORT, () =>
        console.log(`
        Listening on port ${PORT}
        http://localhost:${PORT}/
    `)
    );
});
