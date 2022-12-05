const customGridSchema = {
  title: "Cuadricula custom",
  type: "object",
  properties: {
    gridType: {
      title: "Tipo de Cuadricula",
      //! the following doesn't work with site-editor, even though it is a valid type in TS, we have to specify the type of data and the restrain the values with an enum, as follows:
      // type: 1 | 2 | 3 | 4
      type: "number",
      enum: [
        1,2,3,4
      ]
    }
  }
}

export default customGridSchema
