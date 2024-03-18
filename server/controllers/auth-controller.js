const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
// Home
const home = (req, res) => {
    try {
        res.status(200).send("This is Home");
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
        console.error(error);
    }
}

// Register
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            res.status(400).json({ error: "Email already registered" });
            console.log("User is already registered");
            return;
        }

        const newUser = await prisma.user.create({ data: { name, email, password } });

        res.status(201).json({
            msg: "User created successfully",
            userId: newUser.id,
        });
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
        console.error(error);
    }
}

// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const isPasswordValid = user.password === password;

        if (!isPasswordValid) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const token = jwt.sign({ userId: user.id }, "akslwpozoownn", { expiresIn: '1h' });
        return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error in login:", error);
        return res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
    }
};

const user = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(400).json({ error: "User not found please login" });
        }

        const isPasswordValid = user.password === password;

        if (!isPasswordValid) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const user_name = user.name;
        return res.status(200).json(user_name);
    } catch (error) {
        console.error("Error in login:", error);
        return res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
    }
};

module.exports = { home, register, login, user };
