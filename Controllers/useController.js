const getUser = async (req, res) =>{
    res.json("user get")
} 
 const singleUser = async (req, res) =>{
    res.json("user singleId")
} 
 const deleteUser = async (req, res) =>{
    res.json("user created")
} 
 const createUser = async (req, res) =>{
    const user = req.body;
    console.log(req.body)
    res.json("user created")
    await user
} 
 const updateUser = async (req, res) =>{
    res.json("user created")
} 


module.exports={createUser, getUser, deleteUser, updateUser, singleUser}