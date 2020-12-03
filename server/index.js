const express = require('express')

const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')


app.use(session({
	
	
	secret: 'asdfadfas',
	saveUnintialized: false,
	resave: false
}))
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/angulardb')
.then(() => console.log('Mongoose up'))

const User = require('./models/users')
app.use(bodyParser.json())


app.post('/api/login',async (req, res) =>{
	
	const {email, password} = req.body
	console.log(email, password)
	const resp = await User.findOne({email, password})

	if (!resp){
		
		console.log("incorrect details")
		res.json({
			
			success: false,
			message: "Incorrect details"
		})
	}else{
		
		res.json({
			success: true
			
		})
		req.session.user = email;
		console.log("logging you in")
		req.session.save()
	}
	//res.send("k")
})
app.get('/api/isloggedin', (req,res)=>{
	res.json({
		status: !!req.session.user
	})
	
})
app.post('/api/register',async (req, res ) =>{
	
	const {email, password} = req.body
	const existingUser = await User.findOne({email})
	
	if(existingUser){
		res.json({
			success: false,
			message: "Email already in use"
			
		})
		return
	}
	const user = new User({
		email,
		password
	})
	const result = await user.save()
	console.log(result)
	res.json({
		success: true,
		message: "Welcome"
	})
	//store this data on database
	
})
app.get('/api/data', async(req,res) => {
	const user = await User.findOne({email: req.session.user})
	if(!user){
		res.json({
			
			status: false,
			message: "User was deleted"
		})
		return
	}
	res.json({
		status: true,
		email: req.session.user
	})
		

})
app.get('/api/logout', (req, res) => {
	req.session.destroy()
	res.json({
		success: true
	})
})
app.listen(1234, () => console.log('Server listening at 1234')) 