const Member = require("../database/Member");

const getAllMembers = () => {
    try{
        const members = Member.getAllMembers();
        return members;
    } catch (error) {
        throw error;
    }
}

const getOneMember  = (memberId) => {
    try {
        const member = Member.getOneMember(memberId);
        return member;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllMembers,
    getOneMember,
    
}