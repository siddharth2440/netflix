import Movie from "../models/movie.model.js"
export const  createMovie = async(req,res)=>{
    const movie = new Movie(req.body)
    const savedMovie = await movie.save()
    if(!savedMovie){
        return res.status(400).json({
            success:false,
            message:"Can't able to create new Movie"
        })
    }
    return res.status(201).json({
        success:true,
        message:"Movie Created Successfully"
    })
}

export const  updateMovie =async (req,res)=>{
    const {id} = req.params;
    const findMovie = await Movie.findOne({_id:id})

    if(!findMovie){
        return res.status(400).json({
            success:false,
            message:"Movie is not there"
        })
    }

    const movieUpdate = await Movie.updateOne({_id:id},{$set:req.body},{new:true});
    if(!movieUpdate){
        return res.status(400).json({
            success:false,
            message:"Movie is not updated"
        })
    }

    return res.status(200).json({
        success:true,
        message:"Movie updated Successfully"
    })

}

export const  getMovieDetails =async (req,res)=>{
    const getMovieInfo = await Movie.findOne({_id:req.params.id})
    if(!getMovieInfo){
        return res.status(400).json({
            success:false,
            message:"Can't get movie details"
        })
    }
    return res.status(200).json({
        success:true,
        message:"Movie is there",
        getMovieInfo
    })
}

export const  deleteMovie = async (req,res)=>{
    const {id} = req.params
    
    const deleteMovie = await Movie.deleteOne({_id:id})

    if(!deleteMovie){
        return res.status(400).json({
            success:false,
            message:"Movie is not deleted"
        })
    }
    return res.status(400).json({
        success:false,
        message:"Movie is not deleted"
    })
}

export const getRandom =async (req,res)=>{
    const {type} = req.query;
    let movie;
    try {
        if(type=="series"){
            movie = await Movie.aggregate([{$match:{isSeries:true}},{$sample:{size:1}}])
        }else{
            movie = await Movie.aggregate([{$match:{isSeries:false}},{$sample:{size:1}}])
        }
        return res.status(200).json({
            success:true,
            message:"Random Movies or Series are",
            movie
        })
    } catch (error) {
        console.log("Error in Random API");
    }
}

export const getAllMovies = async (req,res)=>{
    const allMovie = await Movie.find({}).limit(10)
    return res.status(200).json({
        success:true,
        message:"Movies are :-",
        allMovie
    })
}