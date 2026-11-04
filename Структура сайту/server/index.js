import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [];
const consultations = [];

app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Заповніть усі обов'язкові поля." });
  }

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Користувач із таким email вже існує." });
  }

  const newUser = { id: Date.now(), name, email };
  users.push({ ...newUser, password });

  return res.status(201).json({
    token: `fake-jwt-token-${newUser.id}`,
    user: newUser,
  });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Невірний email або пароль." });
  }

  const { password: _, ...userData } = user;
  return res.json({
    token: `fake-jwt-token-${userData.id}`,
    user: userData,
  });
});

app.post("/api/consultation", (req, res) => {
  const { name, email, phone, company, message } = req.body;

  if (![name, email, phone, company, message].every((value) => typeof value === "string" && value.trim())) {
    return res.status(400).json({ message: "Заповніть усі поля заявки на консультацію." });
  }

  consultations.push({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    company: company.trim(),
    message: message.trim(),
  });

  return res.status(201).json({ message: "Заявку успішно відправлено!" });
});

app.listen(PORT, () => {
  console.log(`Сервер успішно запущено на порту ${PORT}`);
});