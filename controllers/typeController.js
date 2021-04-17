const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')


 
 




 
  

class TypeController {
    async create(req, res) {
        try {

            const {name, categoryId,img} = req.body

            // let {img} = req.files

            // let fileName = uuid.v4() + '.jpg'

            // img.mv(path.resolve(__dirname, '..', 'static', fileName))
          
            // function uploadFile(file) {
            //     const fileStream = fs.createReadStream(file.path)
            //     const uploadParams = {
            //         Bucket: bucketName,
            //         Body: fileStream,
            //         Key: file.filenameg
            //     }
            
            //     s3.upload(uploadParams).promise()
                
            // }
            // uploadFile(img)
            
            const type = await Type.create({name, categoryId,img})

            return res.json(type)
        } catch (e) {
            ApiError.badRequest(e.message)
        }

        
    }

    async getAll(req, res) {

        const types = await Type.findAll()
        return res.json(types)
    }

}


module.exports = new TypeController()