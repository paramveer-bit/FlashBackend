import dotenv from "dotenv"
import express, { query } from "express"
import querys from "./helpers/db.js"

dotenv.config()

const app = express()

app.use(express.json())


const result = await querys("SELECT * FROM users")
console.log(result)
// console.log(query.query("SELECT * FROM users"))

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    return res.json(result)
})