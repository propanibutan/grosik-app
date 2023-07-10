import User from "../models/User.js";

export const addList = async (req, res, next) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { lists } = user;
      const userLists = lists.find(({ id }) => (id = data.id));
      if (!userLists) {
        await User.findByIdAndUpdate(user._id, {
          lists: [...user.lists, data],
        });
      }
    }
  } catch (err) {
    next(err);
  }
};
