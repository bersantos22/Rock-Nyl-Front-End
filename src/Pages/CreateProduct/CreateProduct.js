import { api } from "../../api/api";
import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from "../../utility/CreateProductschema.js";

export function CreateProduct() {
  async function onSubmit(values) {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", values.url_img);
      const upload = await api.post("/upload", uploadData);

      const productCreated = await await api.post("/product/create-product", {
        ...values,
        url_img: upload.data.url,
      });
      window.location.href = `/product/album/${productCreated.data._id}`;
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
        <div className="flex justify-end font-serif text-xs font-extrabold tracking-wide text-red-600">
          {errors[field.name]}
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-5 mb-5 flex flex-col items-center">
      <div className="title2 mt-1 mb-5">
        <h3>Create Product</h3>
      </div>

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
          <Form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 mb-5 w-1/2">
            <div className=" container  w-full mx-auto">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-800">
                Artist:
              </label>
              <Field
                name="artist"
                type="text"
                className="bg-gray-400 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-700 dark:placeholder-gray-400 dark:text-grey mb-5"
              />
              <div className="flex justify-end font-serif text-xs font-extrabold tracking-wide text-red-600">
                <ErrorMessage name="artist" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-800">
                Album Name:
              </label>
              <Field
                name="albumName"
                type="text"
                className="bg-gray-400 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-700 dark:placeholder-gray-400 dark:text-grey mb-5"
              />
              <div className="flex justify-end font-serif text-xs font-extrabold tracking-wide text-red-600">
                <ErrorMessage name="albumName" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-800">
                Description:
              </label>
              <Field
                name="description"
                component={CustomInputComponent}
                className="bg-gray-400 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-700 dark:placeholder-gray-400 dark:text-grey mb-5"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-800">
                Type:
              </label>
              <Field
                name="type"
                type="text"
                className="bg-gray-400 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-700 dark:placeholder-gray-400 dark:text-grey mb-5"
              />
              <div className="flex justify-end font-serif text-xs font-extrabold tracking-wide text-red-600">
                <ErrorMessage name="type" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-800">
                Details:
              </label>
              <Field
                name="details"
                type="text"
                className="bg-gray-400 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-700 dark:placeholder-gray-400 dark:text-grey mb-5"
              />
              <div className="flex justify-end font-serif text-xs font-extrabold tracking-wide text-red-600">
                <ErrorMessage name="details" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-800">
                Price:
              </label>
              <Field
                name="price"
                type="number"
                className="bg-gray-400 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-700 dark:placeholder-gray-400 dark:text-grey mb-5"
              />
              <div className="flex justify-end font-serif text-xs font-extrabold tracking-wide text-red-600">
                <ErrorMessage name="price" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-800">
                Stock:
              </label>
              <Field
                name="stock"
                type="number"
                className="bg-gray-400 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-700 dark:placeholder-gray-400 dark:text-grey mb-5"
              />
              <div className="flex justify-end font-serif text-xs font-extrabold tracking-wide text-red-600">
                <ErrorMessage name="stock" />
              </div>
            </div>

            <div onSubmit={handleSubmit}>
              <label
                htmlFor="file"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-800"
              >
                Album Picture:
              </label>
              <input
                className="bg-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-700 dark:placeholder-gray-400 dark:text-grey mb-5"
                id="url_img"
                name="url_img"
                type="file"
                onChange={(event) => {
                  setFieldValue("url_img", event.currentTarget.files[0]);
                }}
              />
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className="bg-green-800 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline mr-6"
            >
              Create Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
