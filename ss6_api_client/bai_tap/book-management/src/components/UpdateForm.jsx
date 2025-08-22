import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { getAllBooks, updateBook } from "../services/BookService";

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    title: "",
    quantity: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await getAllBooks();
        const selected = res.data.find((b) => b.id === parseInt(id));
        if (selected)
          setInitialValues({
            title: selected.title,
            quantity: selected.quantity,
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();
  }, [id]);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .min(1, "Quantity must be at least 1"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await updateBook(id, values);
      toast.success("Cập nhật thành công!");
      navigate("/");
    } catch (error) {
      toast.error("Cập nhật thất bại!");
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit Book
        </h2>

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Title
                </label>
                <Field
                  type="text"
                  name="title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Quantity
                </label>
                <Field
                  type="number"
                  name="quantity"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="quantity"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200"
                >
                  Update Book
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateForm;
