import User from "../models/User.js";

export const addList = async (req, res, next) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { lists } = user;
      const userLists = lists.find(({ id }) => (id = data.id));
      if (!userLists) {
        await User.findByIdAndUpdate(
          user._id,
          {
            lists: [...user.lists, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "list already added" });
    } else await User.create({ email, lists: [data] });
    return res.json({ msg: "list added successfully" });
  } catch (err) {
    next(err);
  }
};