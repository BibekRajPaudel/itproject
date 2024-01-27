import Vehicle from "../model/vehicleModel.js";

export const postVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    return res.status(201).json({
      status: "success",
      message: `${req.body?.name} created successfully`,
      data: vehicle,
    });
  } catch (error) {
    // console.log("Error", error);
    return res.status(400).json({
      status: "error",
      message: `Something went worng`,
    });
  }
};

//Check

export const getAllVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.find({});

    return res.status(200).json({
      status: "success",
      data: vehicle,
    });
  } catch (error) {
    return res.status(400).message({
      status: "error",
      message: `Something went worng`,
    });
  }
};
