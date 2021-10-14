const express = require("express");
let { people } = require("./data");

const app = express();
const port = 3000;

app
  .use(express.static("./public"))

  .use(express.urlencoded({ extended: false }))
  .use(express.json())

  .get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
  })

  .post("/api/people", (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    if (name) {
      people.push({ id: new Date().getTime(), name });
      console.log(people);
      return res.status(201).json({ person: name });
    }
    res.status(400).json({ success: false, msg: "Please enter a name" });
  })

  .post("/login", (req, res) => {
    const { name } = req.body;
    if (name) return res.status(201).send(`Welcome ${name}`);
    res.status(400).json({ success: false, msg: "Please enter a name" });
  })

  .put("/api/people/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((each) => {
      return each.id === id;
    });

    if (!person) {
      return res
        .status(400)
        .json({ success: false, msg: `No person with id ${id}` });
    }

    const newPeople = people.map((person) => {
      if (person.id === id) person.name = name;
      return person;
    });

    people = newPeople;
    res.status(202).json({ success: true, data: newPeople });
  })

  .delete("/api/people/:id", (req, res) => {
    const { id } = req.params;
    const person = people.find((each) => each.id === +id);
    if (!person) {
      return res
        .status(400)
        .json({ success: false, msg: `No person with id ${id}` });
    }

    const newPeople = people.filter((person) => {
      return person.id !== +id;
    });

    people = newPeople;
    res.status(203).json({ success: true, data: newPeople });
  })

  .listen(port, () => `Listening on port ${port}`);
