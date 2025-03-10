const memberService  = require("../services/memberService")


const getAllMembers = (req, res) => {
    try {
        const members = memberService.getAllMembers();
        console.log(members)
        res.send({ status: "OK", data: members})
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});
    }
}

const getOneMember = (req, res) => {
    const {params: {memberId}} = req;
    if(!memberId){
        res.status(400)
           .send({
                status: "FAILED",
                data: {error: "Parameter ':memberId' cannot be empty"}
           });
    }

    try {
        const memberData = memberService.getOneMember(memberId);
        res.send({status: "OK" , data: memberData});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({status: "FAILED", data: {error: error?.message || error}});
    }
};


module.exports = {
    getAllMembers,
    getOneMember,
    
};