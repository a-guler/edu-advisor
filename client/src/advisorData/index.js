import { fakerTR } from "@faker-js/faker";

export const AdvisorList = [
    {
        id : 0,
        image: fakerTR.image.urlPicsumPhotos(),
        fullName: fakerTR.person.fullName(),
        bio: fakerTR.person.bio()
    },
    {
        id : 1,
        image: fakerTR.image.urlPicsumPhotos(),
        fullName: fakerTR.person.fullName(),
        bio: fakerTR.person.bio()
    },
    {
        id : 2,
        image: fakerTR.image.urlPicsumPhotos(),
        fullName: fakerTR.person.fullName(),
        bio: fakerTR.person.bio()
    }
]

export const Chat_History = [
    {
      type: "msg",
      message: "Hi 👋🏻, How are ya ?",
      incoming: true,
      outgoing: false,
    },
    {
      type: "divider",
      text: "Today",
    },
    {
      type: "msg",
      message: "Hi 👋 Panda, not bad, u ?",
      incoming: false,
      outgoing: true,
    },
    {
      type: "msg",
      message: "Can you send me an abstarct image?",
      incoming: false,
      outgoing: true,
    },
    {
      type: "msg",
      message: "Ya sure, sending you a pic",
      incoming: true,
      outgoing: false,
    },
  
    {
      type: "msg",
      subtype: "img",
      message: "Here You Go",
      img: fakerTR.image.abstract(),
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      message: "Can you please send this in file format?",
      incoming: false,
      outgoing: true,
    },
  
    {
      type: "msg",
      subtype: "doc",
      message: "Yes sure, here you go.",
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      subtype: "link",
      preview: fakerTR.image.cats(),
      message: "Yep, I can also do that",
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      subtype: "reply",
      reply: "This is a reply",
      message: "Yep, I can also do that",
      incoming: false,
      outgoing: true,
    },
  ];

export const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];