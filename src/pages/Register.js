import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const { register, message } = useAuth();  

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      register(values.email, values.password);
    },
  });

  return (
    <div className="flex flex-col min-h-screen justify-center items-center py-32 px-32 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Create Account</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F2937] focus:border-[#1F2937]"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-xs">{formik.errors.name}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F2937] focus:border-[#1F2937]"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F2937] focus:border-[#1F2937]"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="text-center text-green-600 mt-2">
            {message && <p>{message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#1F2937] text-white py-2 rounded-md hover:bg-[#374151] focus:outline-none focus:ring-2 focus:ring-[#1F2937]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
