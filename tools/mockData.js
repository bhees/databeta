const articles = [
  {
    id: 1,
    title: `A Clinical Trial using Methylation Age
    to Evaluate Current Anti-Aging Practices`,
    slug: "http://043c484.netsolhost.com/databeta/Mitteldorf_REJ_2018-2083.pdf",
    authorId: 1,
    category: "Scientific Research"
  },
  {
    id: 2,
    title: `DNA methylation-based biomarkers
    and the epigenetic clock theory of ageing`,
    slug: "http://043c484.netsolhost.com/databeta/Horvath-NatureRev2018.pdf",
    authorId: 2,
    category: "Scientific Research"
  },
  {
    id: 3,
    title: `DNA methylation GrimAge strongly predicts lifespan and healthspan`,
    slug: "http://043c484.netsolhost.com/databeta/Horvath2019_GrimAge.pdf",
    authorId: 2,
    category: "Scientific Research"
  },
  {
    id: 4,
    title: "An epigenetic biomarker of aging for lifespan and healthspan",
    slug: "http://043c484.netsolhost.com/databeta/Levine-Clock-2018.pdf",
    authorId: 2,
    category: "Scientific Research"
  },
  {
    id: 5,
    title: `DNA methylation age of human tissues and cell types`,
    slug: "http://043c484.netsolhost.com/databeta/Horvath2013_Methylation-Clock.pdf",
    authorId: 2,
    category: "Scientific Research"
  },
  {
    id: 6,
    title: `Epigenetic ageing is distinct from senescence-mediated ageing and is not prevented by telomerase expression`,
    slug: "http://043c484.netsolhost.com/databeta/Kabacik-Horvath-CellSen-and-methAge.pdf",
    authorId: 3,
    category:  "Scientific Research"
  }
];

const authors = [
  { id: 1, name: "Josh Mitteldorf" },
  { id: 2, name: "Steve Horvath" },
  { id: 3, name: "Sylwia Kabacik" }
];

const newArticle = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const users = [
  { id: 1, name: "Josh Mitteldorf", email:"", password:"" },
  { id: 2, name: "Walter Crompton", email:"", password:""  },
  { id: 3, name: "William Hees", email:"william.hees@gmail.com", password:"123"  },
  { id: 4, name: "Aleksndar Penchev", email:"alpenchev@yahoo.com", password:"123"  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newArticle,
  articles,
  authors,
  users
};
