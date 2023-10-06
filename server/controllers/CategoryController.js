const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const Category = require("../models/Category");

class CategoryController {
  async create(req, res) {
    try {
      const { img, category, desc } = req.body;

      if (!img || !category) {
        return res.json({ message: "Required fields are not filled"});
      }
      
      const result = await Category.create({ img, category, desc })
      res.json(result);

    } catch (e) { 
      console.error(e)
    }
  }
  async update(req, res) {
    try {
      const categId = req.params.id;
      const updateFields = {};
      const { category, desc } = req.body;
      const { img } = req.files || {};
      if (desc) {
        updateFields.desc = desc;
      }
      if (category) {
        updateFields.category = category;
      }
      if (img) {
        const food = await Category.findById(categId);

        const publicId = food.img.split("/")[food.img.split("/").length - 1].split(".")[0];
        const tempFilePath = path.resolve(__dirname, "..", "static", (publicId + path.extname(img.name)));
        fs.writeFileSync(tempFilePath, img.data);

        const uploadResult = await cloudinary.uploader.upload(tempFilePath, {
          resource_type: "image",
          format: "webp",
          quality: "auto",
          flags: "lossy",
          fetch_format: "auto",
          public_id: publicId,
          overwrite: true,
        });

        fs.unlinkSync(tempFilePath);
        // let filename = uuid.v4() + ".jpg";
        // img.mv(path.resolve(__dirname, "..", "static", filename));
        updateFields.img = uploadResult.secure_url;
      }

      const updatedCategory = await Category.findOneAndUpdate({ _id: categId }, { $set: updateFields }, { new: true });

      return res.status(200).json({ message: "Категорію оновлено!" });
    } catch (e) {
      return res.json({ message: 'Internal Server Error' });
    }
  }


  async remove(req, res) {
    try {
      const categId = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(categId)) {
        return res.status(404).json({ message: "Invalid categId" });
      }
      const categ = await Category.findOneAndRemove({ _id: categId });
      if (!categ) { 
        return res.json({message: "Item Not Deleted!"})
      }
      return res.json({message: "Item Deleted"})
    } catch (e) { 
      console.error(e)
    }
  }
  async getAll(req, res) {
    try {
      const categories = await Category.find();
      return res.json(categories);
    } catch (e){ 
      console.error(e)
    }
  }

}

module.exports = new CategoryController();