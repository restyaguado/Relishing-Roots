import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/relishing_roots_icon.svg';

function SignUp({ onLogin }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ name: name.trim(), email: email.trim() });
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 sm:px-10 py-16">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Relishing Roots logo" className="w-16 h-16" />
          <h1
            className="text-center"
            style={{ fontFamily: 'Caveat, cursive', color: '#4A1A44', fontSize: '2.75rem', margin: '8px 0 0' }}
          >
            Join Relishing Roots
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 text-left">
          <label className="flex flex-col gap-1">
            <span className="font-medium text-gray-700">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border rounded-lg px-4 py-2"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-medium text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded-lg px-4 py-2"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-medium text-gray-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="border rounded-lg px-4 py-2"
            />
          </label>

          <button
            type="submit"
            className="mt-2 bg-purple-900 text-white px-6 py-3 rounded-full font-semibold"
          >
            Create account
          </button>
        </form>

        <p className="pt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold" style={{ color: '#4A1A44' }}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;