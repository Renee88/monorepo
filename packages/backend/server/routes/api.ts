export { }
const express = require('express')
const router: any = express.Router()
var unirest = require("unirest");
var fs = require('fs');
const users: User[] = require('../../Users.json')
let talks = require('../../Talks.json')

interface APISuccessResponse<Data> {
    data: Data;
    success: true;
}

interface APIErrorResponse<Data> {
    data?: Data;
    success: false;
    error: string;
    errorCode: string;
}

interface User {
    id: number;
    name: string;
    picture: string;
    email: string;
    age: number;
    dogs: any[];
}

type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse<T>;


router.get('/users/:page', function (req: any, res: any) {
    const page = req.params.page
    const firstUserIndex = (page - 1) * 10
    const usersOnPage = users.splice(firstUserIndex, 10)
    res.send(usersOnPage)
})

router.get('/user/:id', function (req: any, res: any) {
    let response: APIResponse<User>
    try {
        const id = req.params.id
        const user = users.find(user => user.id == id)
        if (user) {
            response = {
                data: user,
                success: true
            }
        } else {
            throw new Error('User does not exist')
        }
    }
    catch (error) {
        response = {
            success: false,
            error: error.message,
            errorCode: '404'
        }
    }
    
    res.send(response)
})

router.post('/user', function (req: any, res: any) {
    const newUser: User = req.body
    let response: APIResponse<User>
    try{
        if(newUser){
            response = {
                data: newUser,
                success: true
            }
        } else {
            throw new Error('Something went wrong, please try again later')
        }
    } catch(error){
        response = {
            success: false,
            error: error.message,
            errorCode: '500'
        }
    }
    res.send(response)
})

router.get('/talks', function (req: any, res: any) {
    res.send(talks);
})

process.on('warning', e => console.warn(e.stack))


module.exports = router