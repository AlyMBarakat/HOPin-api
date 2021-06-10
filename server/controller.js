const Express = require("express");
const DB = require("./models");
const router = Express.Router();
const { Op } = require("sequelize");


// login
router.post("/login", async (req, res) => {
    try {
        const userCredentials = req.body;
        console.log(userCredentials);
        const user = await DB.User.findOne({
            where: {
                [Op.and]: [
                    { username: userCredentials.username },
                    { password: userCredentials.password }
                ],
            },
        });
        if (user === null) {
            res.status(404).json({
                message: "Invalid Credentials",
            });
        }
        res.status(200).json({
            message: "Login Success",
            data: user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

// create ride
router.post("/user/:id/ride/", async (req, res) => {
    try {
        const ride = req.body;
        ride.userId = req.params.id;
        console.log(ride);
        const newRide = await DB.Ride.create(ride);
        res.status(201).json({
            message: "Ride created successfully",
            data: newRide,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

// get all rides
router.get("/rides", async (req, res) => {
    try {
        const allRides = await DB.Ride.findAll();
        console.log(allRides);
        res.status(201).json({
            message: "Rides retrieved successfully",
            data: allRides,
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});


module.exports = router;
