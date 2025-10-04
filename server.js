import { PrismaClient } from "@prisma/client";

import express from "express";
import cors from "cors";

const app = express();

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

//rotas

//GET (vizualizar)
app.get("/", (req, res) => {
  res.send("Artur Wagner Software Engeneering");
});

app.get("/profiles", async (req, res) => {
  try {
    const profiles = await prisma.profile.findMany();
    res.json(profiles); //converte
  } catch (error) {
    res.status(500).json({ error: "Error fetching profiles" });
  }
});

app.listen(3000, () => console.log("Server ON: http://localhost:3000"));

//---------------------------------------------------------//

//POST (criar)
app.post("/profiles", async (req, res) => {
  try {
    const { name, bio, profession, online } = req.body;
    const newProfile = await prisma.profile.create({
      data: { name, bio, profession, online },
    });
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ error: "Error creating profile. Try again." });
  }
});

//---------------------------------------------------------//

//PUT (edit)
app.put("/profiles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bio, profession, online } = req.body;

    const updatedProfile = await prisma.profile.update({
      where: { id: Number(id) },
      data: { name, bio, profession, online },
    });
  } catch (error) {
    res.status(500).json({ error: "Error updating profile..." });

    console.log(error);
  }
});

//---------------------------------------------------------//

//Delete (delete)
app.delete("/profiles/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.profile.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting profile" });
  }
});
