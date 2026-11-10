
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "ONLINE",
        system: "ARVESSO DONATION",
        message: "Donation backend is running!"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`ARVESSO SERVER RUNNING ON PORT ${PORT}`);
});
