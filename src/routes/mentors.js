const express = require('express')
const mentors = require ('../usecases/mentors')
const router = express.Router()

router.get('/', async(request, response) => {
    try{
        const allMentors =await mentors.getAll()
        response.json({
            message: 'All mentors',
            data:{
                mentor: allMentors
            }
        })
    } catch{
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.post('/', async(request, response) => {
    try{
        const newMentor =await mentors.create(request.body)
        response.json({
            success: true,
            message: 'New mentor was created',
            data:{
                mentor: newMentor
            }
        })
    } catch(error){
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

// DELETE /koders/:id
router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params
        const mentorDeleted = await mentors.deleteById(id)
        response.json({
            success: true,
            message: `mentor with id ${id} was deleted`,
            data:{
                mentor: mentorDeleted
            }
        })
    } catch(error){
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

// PATCH /koders/:id
router.patch('/:id', async (request, response) => {
    try{
        const {id} = request.params
        const mentorUpdated = await mentors.updateById(id, request.body)
        response.json({
            success: true,
            message: `Koder with id ${id} was updated`,
            data:{
                mentor: mentorUpdated
            }
        })
    } catch(error){
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router

// try & catch
/*
try{
    //intenta hacer algo
} catch (error){
    // muestra error
}
*/
