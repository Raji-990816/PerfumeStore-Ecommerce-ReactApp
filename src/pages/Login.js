import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login, message } = useAuth(); 

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      login(values.email, values.password); 
    },
  });

  return (
    <div className="flex flex-col min-h-screen justify-center items-center py-16 sm:py-24 lg:py-32 px-4 sm:px-16 lg:px-32 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg ">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs">{formik.errors.password}</div>
            ) : null}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#1F2937] text-white py-2 rounded-md hover:bg-[#374151] focus:outline-none focus:ring-2 focus:ring-[#1F2937]"
            >
              Login
            </button>
          </div>

          <div className="text-center mt-4">
            <p>
              Don't have an account?{' '}
              <a href="/register" className="text-blue-500 hover:text-blue-700">Register here</a>
            </p>
          </div>
        </form>
        {message && <p className="text-center text-green-600 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Login;