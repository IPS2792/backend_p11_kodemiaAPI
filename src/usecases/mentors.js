const Mentor = require('../models/mentors')

async function getAll(){
    const allMentors = await Mentor.find()
    return allMentors
}

function create(mentorData){
    return Mentor.create(mentorData)
}

function deleteById(id){
    return Mentor.findByIdAndRemove(id)
}

function updateById(id, newMentorData){
    return Mentor.findByIdAndUpdate(id, newMentorData)
}

module.exports = {
    getAll,
    create, 
    deleteById,
    updateById
}