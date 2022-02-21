import express from 'express'
const router = express.Router()
import { v4 as uuidv4 } from 'uuid';


let users_record = [
    {
        name: "AMARACHI",
        lastname: "Izuegbunam",
        nationality: "nigeria"
    },

    {
        "name": "AMARACHI",
        "lastname": "Izuegbunam",
        "nationality": "nigeria"
    }
]

router.get('/', (req, res )=> {
    // console.log('user')
   res.send(users_record)
})

router.post('/', (req, res )=> {
    console.log('you have responded')
    let user_input =  req.body

    // const userid = uuidv4();
    const new_intake = {...user_input, id:uuidv4()}
    users_record.push(new_intake) 


   res.send(`user ${user_input.name} has been added to database`)
})

router.get('/:id', (req, res )=> {
    // console.log(req.params)
    const id = req.params.id
   const founduser = users_record.find((user_input) => user_input.id == id)
   res.send(founduser)
})

router.delete('/:id', (req, res)=>{
    const id = req.params.id
    users_record = users_record.filter((user_input)=>user_input.id !== id)
    res.send(`user with the ${id} deleted`)
} )

router.patch('/:id', (req, res )=> {
    // console.log(req.params)
    const id = req.params.id
    const {name, lastname, nationality, age}  = req.body
   let user_input = users_record.find((user_input) => user_input.id == id)

   if(name) {
       user_input.name = name;
   }
   if(lastname) {
    user_input.lastname = lastname;
   }
   if(nationality) {
    user_input.nationality = nationality;
   }
   if(age) {
    user_input.age = age;
     }
   res.send(`user with the ${id} has been updated`)
})


export default router;