const subCategoryDetails = require('../models/subCategoryModel');
const categoryDetails = require('../models/categoryModel');
const extraCategoryDetails = require('../models/extraCaetgoryModel');
const productDetails = require('../models/productModel');
const fs = require('fs');
const path = require('path');

const addSubCategory = async (req, res) => {
    const categories = await categoryDetails.find();
    res.render('subCategory/addSubCategoryPage', {
        success: req.flash("success"),
        error: req.flash("error"),
        categories
    });
};

const subCategoryInsert = (req, res) => {
    console.log(req.body);
    console.log(req.file);
    try {
        req.body.subCategory_image = req.file.path;
        const newSubCategory = subCategoryDetails.create(req.body);

        if (newSubCategory) {
            req.flash("success", "Sub Category added successfully.");
        } else {
            req.flash("error", "Failed to add Sub Category!");
        }
        res.redirect('/subCategory/addSubCategoryPage');
    } catch (e) {
        req.flash("error", `Exception: ${e}`);
        res.redirect('/subCategory/addSubCategoryPage');
    }

};

const viewSubCategoryPage = async (req, res) => {
    try {
        const subCategory = await subCategoryDetails.find().populate("category_id").exec();
        // console.log(subCategory);
        const categories = await categoryDetails.find();


        if (subCategory) {
            res.render("subCategory/viewSubCategoryPage", {
                subCategory,
                categories,
                success: req.flash("success"),
                error: req.flash("error"),
            });
        } else {
            req.flash("error", "SubCategory not found.");
            res.redirect("/subCategory/viewSubCategoryPage");
        }

    } catch (error) {
        console.error("Error fetching subcategories:", error);
        req.flash("error", "Failed to load subcategories. Please try again later.");
        res.redirect('/subCategory/viewSubCategoryPage');
    }
};

const editSubCategoryPage = async (req, res) => {
    try {

        const categoryData = await categoryDetails.find({});
        const subCategoryData = await subCategoryDetails.findById(req.params.id);

        if (categoryData && subCategoryData) {

            return res.render('subCategory/editSubCategoryPage', {
                categoryData,
                subCategoryData,
                success: req.flash('success'),
                error: req.flash('error')
            });

        } else {
            req.flash('error', 'SubCategory not found.');
            res.redirect('/viewSubCategoryPage');
        }
        res.redirect('/subCategory/viewSubCategoryPage');
    } catch (e) {
        console.error("Edit Page Error:", err);
        req.flash('error', 'Something went wrong.');
        res.redirect('/subCategory/viewSubCategoryPage');
    }
};

const updateSubCategory = async (req, res) => {
    console.log("Update Body:", req.body);
    console.log("SubCategory ID:", req.params.id);
    console.log("SubCategory Image:", req.file);

    try {
        const updateCategoryData = await subCategoryDetails.findById(req.params.id);

        console.log("updateCategoryData:", updateCategoryData);

        if (req.file) {
            fs.unlinkSync(updateCategoryData.subCategory_image);
            req.body.subCategory_image = req.file.path;
        }
        const updated = await subCategoryDetails.findByIdAndUpdate(req.params.id, req.body);

        if (updated) {
            req.flash('success', 'SubCategory updated successfully.');
        } else {
            req.flash('error', 'SubCategory not found or not updated.');
        }

        return res.redirect('/subCategory/viewSubCategoryPage');
    } catch (err) {
        console.error("Update Error:", err);
        req.flash('error', 'Error updating SubCategory.');
        res.redirect('/subCategory/viewSubCategoryPage');
    }
};

const deleteSubCategory = async (req, res) => {
    const { id } = req.params;
    console.log("Delete SubCategory Id", id);

    try {
        const extraCategory = await extraCategoryDetails.find({});
        const product = await productDetails.find({});

        extraCategory.forEach(element => {
            if (element.subCategory_id === id) {
                try { fs.unlinkSync(element.extraCategory_image); } catch (e) { }
            }
        });

        product.forEach(element => {
            if (element.subCategory_id === id) {
                try { fs.unlinkSync(element.product_image); } catch (e) { }
            }
        });

        extraCategoryDetails.deleteMany({ subCategory_id: id }),
        productDetails.deleteMany({ subCategory_id: id })

        const deleteSubCategory = await subCategoryDetails.findByIdAndDelete(id);

        if (deleteSubCategory) {
            try { fs.unlinkSync(deleteSubCategory.subCategory_image); } catch (e) { }
            req.flash("success", `${deleteSubCategory.subcategory_name} deleted successfully...`);
        } else {
            req.flash("error", "SubCategory Not Found or Already Deleted.");
        }

        res.redirect("/subCategory/viewSubCategoryPage");
    } catch (e) {
        console.error(e);
        req.flash("error", "Something went wrong while trying to delete the sub-category.");
        res.redirect("/subCategory/viewSubCategoryPage");
    }
};


module.exports = {
    addSubCategory,
    subCategoryInsert,
    viewSubCategoryPage,
    editSubCategoryPage,
    updateSubCategory,
    deleteSubCategory,
};