const { Message } = require("../models");
const { Op } = require("sequelize")
const secret = process.env.SECRET;


const getMessages = async (req, res) => {
  const { id, userId, isAdvisor } = req.params;
  console.log(id,userId,isAdvisor === 'true')
  const post = await Message.findAll({
    where: {
        [Op.or] : [
            {fromUserId: id, toUserId: userId},
            {fromUserId: userId, toUserId: id}
        ],
        isAdvisorChat: isAdvisor === 'true'
    },
    order: [["messageId", "ASC"]],
    limit: 20
  });

  if (post) {
    res.json(post);
  } else {
    res.status(400).json("Couldn't find post with that id");
  }
};

const createMessage = async (req, res) => {
  const { id, userId, isAdvisor } = req.params;

  const { message, file, type } = req.body;
  console.log(id,userId,isAdvisor,message,file,type)
  const postDoc = await Message.create({
    message: message,
    file: file,
    fromUserId: userId,
    toUserId: id,
    sendDate: new Date(),
    isAdvisorChat: isAdvisor === 'true',
    type: type,
    subtype: null
  });

  res.json(postDoc);
};

module.exports = { getMessages, createMessage };
