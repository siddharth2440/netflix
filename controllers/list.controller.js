import List from "../models/lists.model.js"
export const createList = (req,res)=>{
    const create = new List(req.body)
    const saveList = create.save()
    if(!saveList){
        return res.status(400).json({
            success:false,
            message:"List is not created"
        })
    }
    return res.status(400).json({
        success:true,
        message:"List is created"
    })
}

export const deleteList = async (req,res)=>{
    const {id} = req.params;
    const isListExists = await List.findById(id)
    if(!isListExists){
        return res.status(400).json({
            success:false,
            message:"List doesn't exists"
        })
    }

    const deleteTheList = await List.deleteOne({_id:id})
    if(!deleteTheList){
        return res.status(400).json({
            success:false,
            message:"List successfully Deleted"
        })
    }

    return res.status(200).json({
        success:true,
        message:"List deleted Successfully"
    })
}

export const getList =async (req,res)=>{
    // console.log("Called");
    const typeQuery = req.query.type
    const genreQuery = req.query.genre
    console.log("GenreQuery is "+genreQuery);
    console.log("TypeQuery "+typeQuery);
    let list = []
    console.log("log");
    try {
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([{$sample:{size:10}},{$match:{type:typeQuery,genre:genreQuery}}])

            }else{
                list = await List.aggregate([{$sample:{size:10}},{$match:{type:typeQuery}}])
            }
        }else{
            list = await List.aggregate([{$sample:{size:10}}])
        }
        // console.log(list);
       return res.status(200).json({
        success:true,
        message:"List is there",
        list
       }) 
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"List is not there"
        }) 
    }
}