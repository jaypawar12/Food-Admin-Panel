const categoryDetails = require('../models/categoryModel');
const subCategoryDetails = require('../models/subCategoryModel');
const extraCategoryDetails = require('../models/extraCaetgoryModel');
const productDetails = require('../models/productModel');
const fs = require('fs');
const path = require('path');

const addCategoryPage = (req, res) => {
    res.render('category/addCategoryPage', {
        success: req.flash("success"),
        error: req.flash("error")
    });
}

const categoryInsert = (req, res) => {
    console.log(req.body);
    console.log(req.file);
    try {
        req.body.category_image = req.file.path;
        const newCategory = categoryDetails.create(req.body);
        if (newCategory) {
            req.flash("success", "Category added successfully!");
        } else {
            req.flash("error", "Failed to add category.");
        }
        res.redirect('/category/addCategoryPage');
    } catch (e) {
        req.flash("error", `Exception: ${e}`);
        res.redirect("/category/addCategoryPage");
    }
}

const viewCategoryPage = async (req, res) => {
    try {
        const categories = await categoryDetails.find({});

        res.render("category/viewCategoryPage", {
            categories: categories,
            error: req.flash('error'),
            success: req.flash('success')
        });

    } catch (error) {
        console.error("Error fetching categories:", error);
        req.flash("error", "Failed to load categories. Please try again later.");
        res.redirect('/category/addCategoryPage');
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const subCategory = await subCategoryDetails.find({});
        const extraCategory = await extraCategoryDetails.find({});
        const product = await productDetails.find({});

        subCategory.forEach(element => {
            if (element.category_id === id) {
                try { fs.unlinkSync(element.subCategory_image); } catch (e) { }
            }
        });

        extraCategory.forEach(element => {
            if (element.category_id === id) {
                try { fs.unlinkSync(element.extraCategory_image); } catch (e) { }
            }
        });

        product.forEach(element => {
            if (element.category_id === id) {
                try { fs.unlinkSync(element.product_image); } catch (e) { }
            }
        });

        subCategoryDetails.deleteMany({ category_id: id }),
        extraCategoryDetails.deleteMany({ category_id: id }),
        productDetails.deleteMany({ category_id: id })

        const deleteData = await categoryDetails.findByIdAndDelete(id);

        if (deleteData) {
            try { fs.unlinkSync(deleteData.category_image); } catch (e) { }
            req.flash("success", `${deleteData.category_name} Deleted Successfully!`);
        } else {
            req.flash("error", `Category Not Found or Already Deleted.`);
        }

        res.redirect('/category/viewCategory');
    } catch (e) {
        console.error("Delete Error:", e);
        req.flash("error", "Something went wrong while deleting the category.");
        res.redirect('/category/viewCategory');
    }
};


const editCategoryPage = async (req, res) => {
    try {
        const categoryData = await categoryDetails.findById(req.params.id);
        res.render('category/editCategoryPage', {
            categoryData, success: req.flash("success"),
            error: req.flash("error")
        });
    } catch (e) {
        req.flash('error', 'Category Not Found.');
        res.redirect('/category/viewCategory');
    }
}

const updateCategory = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.params.id);
        console.log(req.file);

        const updateCategoryData = await categoryDetails.findById(req.params.id);

        if (req.file) {

            fs.unlinkSync(updateCategoryData.category_image);

            req.body.category_image = req.file.path;

            const updateData = await categoryDetails.findByIdAndUpdate(
                req.params.id,
                req.body
            );

            console.log("Update Data :", updateData);


            if (updateData) {
                req.flash("success", "Category updated successfully!");
                res.redirect('/category/viewCategory');
            } else {
                req.flash("error", "Failed to update category. Please try again.");
                res.redirect('/category/viewCategory');
            }
        } else {
            const update = await categoryDetails.findByIdAndUpdate(req.params.id, req.body);
            if (update) {
                req.flash("success", "Category updated successfully...");
                res.redirect('/category/viewCategory');
            } else {
                req.flash("error", "Category updation failed...");
                res.redirect('/category/viewCategory');
            }
        }
    } catch (e) {
        console.error("Update Error:", error);
        req.flash("error", "⚠️ An error occurred while updating the category.");
        res.redirect('/category/viewCategory');
    }
}

module.exports = {
    addCategoryPage,
    categoryInsert,
    viewCategoryPage,
    editCategoryPage,
    updateCategory,
    deleteCategory
};