const asyncHandler = require("express-async-handlr");
const ApiError = require("../utills/apiError");
const ApiFeatures = require("../utills/apifeatures");

exports.deleteOne = (model) =>
  asyncHandler(async (req, res, next) => {
    const document = await model.findByIdAndDelete(req.params.id);
    if (!document) {
      return next(
        new ApiError(` No subCategory for this id ${req.params.id}`, 404)
      );
    }
    res.status(204).send();
  });

exports.updateOne = (model) =>
  asyncHandler(async (req, res, next) => {
    const document = await model.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!document) {
      return next(
        new ApiError(` No SubCategory for this id ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ data: document });
  });

exports.createOne = (model) =>
  asyncHandler(async (req, res) => {
    const document = await model.create(req.body);
    res.status(201).json({ data: document });
  });

exports.getOne = (model) =>
  asyncHandler(async (req, res, next) => {
    const document = await model.findById(req.params.id);
    if (!document) {
      return next(new ApiError(`No Brand for this id: ${req.params.id}`, 404));
    }
    res.status(200).json({ data: document });
  });

exports.getList = (model) =>
  asyncHandler(async (req, res) => {
    const Features = new ApiFeatures(model.find(), req.query);

    Features.sort().filter().limitFields().paginate();

    const { mongoosequery, paginationresult } = Features;

    const document = await mongoosequery;

    res.status(200).json({
      result: document.length,
      page: paginationresult.page,
      limit: paginationresult.limit,
      data: document,
    });
  });
