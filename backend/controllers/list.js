import List from "../models/List.js";

export const createList = async (req, res, next) => {
  const newList = new List(req.body);

  try {
    const savedList = await newList.save();
    res.status(200).json(savedList);
  } catch (err) {
    next(err);
  }
};

export const updateList = async (req, res, next) => {
  try {
    const updatedList = await List.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedList);
  } catch (err) {
    next(err);
  }
};

export const deleteList = async (req, res, next) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    res.status(200).json("List has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getList = async (req, res, next) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const getAllLists = async (req, res, next) => {
  try {
    const allLists = await List.find();
    res.status(200).json(allLists);
  } catch (err) {
    next(err);
  }
};
