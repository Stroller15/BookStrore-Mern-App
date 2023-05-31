import Book from '../model/Book.js';


const getAllBooks = async(req, res, next) => {
     let books;
     try {
       books = await Book.find();
     } catch (err) {
       console.log(err);
     }

     if (!books) {
       return res.status(404).json({ message: "No products found" });
     }
     return res.status(200).json({ books });
}

const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let book;

  try {
    book = await Book.findOne({ _id: id });
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ book });

}

const addBooks = async (req, res, next) => {
    const {name, author, description, price, avaible, image} = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            avaible,
            image,
        });
        await book.save();

    } catch(err) {
        console.log(err)
    }

    if(!book) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    else {
        return res.status(201).json({book});
    }
}

const updateBook = async (req, res, next) => {
  const id = req.params.id;

  const {name, author, description, price, avaible, image} = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      avaible,
      image,
    });

    book = await book.save();

  } catch (err) {
    console.log(err);
  }

  if(!book) {
    return res.status(404).json({message: "Unable To Update By This ID"});
  }
  return res.status(201).json({book});
};


const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;

  try {
    book = await Book.findByIdAndRemove(id);
  }
 catch (err) {
  console.log(err);
 }

 if(!book) {
  return res.status(404).json({message: "Unable To Delete By This ID"});
 }
 return res.status(200).json({message: "Product Successfully Deleted"}); 
}

export { getAllBooks, getBookById, addBooks, updateBook, deleteBook };


