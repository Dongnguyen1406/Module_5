import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function HealthForm() {
  const SEX_LIST = [
    { label: "Nam", value: "male" },
    { label: "Nữ", value: "female" },
  ];

  const SYMPTOM_LIST = [
    "Sốt",
    "Ho",
    "Khó thở",
    "Viêm phổi",
    "Đau họng",
    "Mệt mỏi",
  ];

  const CONTACT_HISTORY_LIST = [
    "Người bệnh hoặc nghi ngờ mắc COVID-19",
    "Người từ nước có bệnh COVID-19",
    "Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)",
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    number: Yup.string().required("Required"),
    birthYear: Yup.number()
      .typeError("Birth year must be a number")
      .required("Required")
      .moreThan(1900, "Birth year must be > 1900"),
    nationality: Yup.string().required("Required"),
    province: Yup.string().required("Required"),
    district: Yup.string().required("Required"),
    ward: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string()
      .required("Required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      ),
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 border-b pb-3">
        Tờ khai y tế
      </h1>
      <Formik
        initialValues={{
          name: "",
          number: "",
          birthYear: "",
          gender: "",
          nationality: "",
          company: "",
          department: "",
          insurance: false,
          province: "",
          district: "",
          ward: "",
          address: "",
          phone: "",
          email: "",
          travelHistory: "",
          symptoms: [],
          contactHistory: [],
        }}
        validationSchema={validationSchema}
        onSubmit={() => alert("Khai báo thành công!")}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3 border-l-4 border-blue-500 pl-2">
                Thông tin cá nhân
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Họ tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border p-2 rounded focus:ring focus:ring-blue-200"
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Số hộ chiếu / CMND
                  </label>
                  <input
                    type="number"
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border p-2 rounded focus:ring focus:ring-blue-200"
                  />
                  {touched.number && errors.number && (
                    <p className="text-red-500 text-sm">{errors.number}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Năm sinh
                  </label>
                  <input
                    type="number"
                    name="birthYear"
                    value={values.birthYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border p-2 rounded focus:ring focus:ring-blue-200"
                  />
                  {touched.birthYear && errors.birthYear && (
                    <p className="text-red-500 text-sm">{errors.birthYear}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Giới tính
                  </label>
                  <div className="flex gap-6">
                    {SEX_LIST.map((sex) => (
                      <label
                        key={sex.value}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={sex.value}
                          checked={values.gender === sex.value}
                          onChange={handleChange}
                        />
                        {sex.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Quốc tịch
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={values.nationality}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border p-2 rounded focus:ring focus:ring-blue-200"
                  />
                  {touched.nationality && errors.nationality && (
                    <p className="text-red-500 text-sm">{errors.nationality}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Công ty làm việc
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    className="w-full border p-2 rounded focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Bộ phận làm việc
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={values.department}
                    onChange={handleChange}
                    className="w-full border p-2 rounded focus:ring focus:ring-blue-200"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="insurance"
                    checked={values.insurance}
                    onChange={handleChange}
                  />
                  <label className="font-medium">Có thẻ bảo hiểm y tế</label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3 border-l-4 border-green-500 pl-2">
                Địa chỉ liên lạc tại Việt Nam
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Tỉnh thành
                  </label>
                  <input
                    type="text"
                    name="province"
                    value={values.province}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border p-2 rounded focus:ring focus:ring-green-200"
                  />
                  {touched.province && errors.province && (
                    <p className="text-red-500 text-sm">{errors.province}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Quận / huyện
                  </label>
                  <input
                    type="text"
                    name="district"
                    value={values.district}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border p-2 rounded focus:ring focus:ring-green-200"
                  />
                  {touched.district && errors.district && (
                    <p className="text-red-500 text-sm">{errors.district}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Phường / xã
                  </label>
                  <input
                    type="text"
                    name="ward"
                    value={values.ward}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border p-2 rounded focus:ring focus:ring-green-200"
                  />
                  {touched.ward && errors.ward && (
                    <p className="text-red-500 text-sm">{errors.ward}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Số nhà, phố, tổ dân phố / thôn / đội
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border p-2 rounded focus:ring focus:ring-green-200"
                  />
                  {touched.address && errors.address && (
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Điện thoại
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border p-2 rounded focus:ring focus:ring-green-200"
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border p-2 rounded focus:ring focus:ring-green-200"
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3 border-l-4 border-red-500 pl-2 ">
                Thông tin sàng lọc
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-1 text-start">
                    Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh
                    thổ nào?
                  </label>
                  <textarea
                    name="travelHistory"
                    value={values.travelHistory}
                    onChange={handleChange}
                    className="w-full border p-2 rounded focus:ring focus:ring-red-200"
                  ></textarea>
                </div>
                <div>
                  <label className="block font-medium mb-2 text-start">
                    Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu
                    nào sau đây không?
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {SYMPTOM_LIST.map((symptom) => (
                      <label key={symptom} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="symptoms"
                          value={symptom}
                          checked={values.symptoms.includes(symptom)}
                          onChange={handleChange}
                        />
                        {symptom}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-2 text-start">
                    Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?
                  </label>
                  <div className="space-y-2">
                    {CONTACT_HISTORY_LIST.map((contact) => (
                      <label key={contact} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="contactHistory"
                          value={contact}
                          checked={values.contactHistory.includes(contact)}
                          onChange={handleChange}
                        />
                        {contact}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Gửi tờ khai
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default HealthForm;
