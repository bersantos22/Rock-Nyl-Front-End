import { api } from "../../api/api";
import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from "../../utility/CreateProductschema.js";

export function CreateProduct() {
  async function onSubmit(values) {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", values.url_img);
      const upload = await api.post("/upload", uploadData);

      await await api.post("/product/create-product", {
        ...values,
        url_img: upload.data.url,
      });
    } catch (error) {
      console.error(error);
    }
  }
  const CustomInputComponent = ({
    field,
    form: { touched, errors },
    ...props
  }) => (
    <div>
      <textarea type="text" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        setFieldValue
        initialValues={{
          artist: "",
          albumName: "",
          description: "",
          type: "",
          details: "",
          stock: "",
          price: "",
        }}
      >
        {({ isValid, setFieldValue, handleSubmit }) => (
          <Form>
            <div>
              <label>Artist:</label>
              <Field name="artist" type="text" />
              <div>
                <ErrorMessage name="artist" />
              </div>
            </div>
            <div>
              <label>Album Name:</label>
              <Field name="albumName" type="text" />
              <div>
                <ErrorMessage name="albumName" />
              </div>
            </div>
            <div>
              <label>Description:</label>
              <Field name="description" component={CustomInputComponent} />
            </div>
            <div>
              <label>Type:</label>
              <Field name="type" type="text" />
              <div>
                <ErrorMessage name="type" />
              </div>
            </div>
            <div>
              <label>Details:</label>
              <Field name="details" type="text" />
              <div>
                <ErrorMessage name="details" />
              </div>
            </div>
            <div>
              <label>Price:</label>
              <Field name="price" type="number" />
              <div>
                <ErrorMessage name="price" />
              </div>
            </div>
            <div>
              <label>Stock:</label>
              <Field name="stock" type="number" />
              <div>
                <ErrorMessage name="stock" />
              </div>
            </div>
            <Form onSubmit={handleSubmit}>
              <div>
                <label for="file">Album Picture</label>
                <input
                  id="url_img"
                  name="url_img"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("url_img", event.currentTarget.files[0]);
                  }}
                />
              </div>
            </Form>
            <button type="submit" disabled={!isValid}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
