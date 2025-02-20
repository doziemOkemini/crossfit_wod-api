const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
    try {
        const recordForWork = recordService.getRecordForWorkout();
        res.send({ status: 400, data: recordForWork })
    }catch (error) {
        res
        .status(error?.status || 500)
        .send({status: "FAILED", data: {error: error?.message || error }});
    }
}

module.exports = { getRecordForWorkout };