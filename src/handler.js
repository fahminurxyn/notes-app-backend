const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createAt = new Date().toLocaleString();
  const updateAt = createAt;

  const newNote = {
    title,
    tags,
    body,
    createAt,
    updateAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Catatan Berhasil Ditambahkan",
      data: {
        note: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Catatan Gagal Ditambahkan",
    data: {
      note: id,
    },
  });
  response.code(500);
  return response;
};

module.exports = { addNoteHandler };
