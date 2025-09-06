import React, { useState, useEffect } from 'react';
import { Lock, RefreshCw, Mail, Calendar, User, MessageSquare } from 'lucide-react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Simple client-side password protection
  const ADMIN_PASSWORD = 'rita2024admin'; // Change this to something secure

  useEffect(() => {
    // Check if already authenticated in this session
    const authStatus = sessionStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      const savedKey = sessionStorage.getItem('adminKey');
      if (savedKey) {
        setAdminKey(savedKey);
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleSetApiKey = (e) => {
    e.preventDefault();
    if (adminKey.trim()) {
      sessionStorage.setItem('adminKey', adminKey);
      fetchSubmissions();
    }
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://smartspoon-backend-production-35d9.up.railway.app/api/v1/contact/submissions?admin_key=${adminKey}&limit=100`
      );
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid admin key. Please check your API key.');
        }
        throw new Error('Failed to fetch submissions');
      }
      
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-wine to-brand-plum rounded-lg flex items-center justify-center text-white">
              <Lock size={24} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-brand-plum mb-6">Admin Access</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-wine to-brand-plum text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-plum to-brand-wine text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Contact Form Submissions</h1>
          <p className="text-brand-lavender/90">Admin Dashboard</p>
        </div>
      </div>

      {/* API Key Setup */}
      {!sessionStorage.getItem('adminKey') && (
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 mb-3">Please enter your Railway admin API key to fetch submissions:</p>
            <form onSubmit={handleSetApiKey} className="flex gap-3">
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple"
                placeholder="Enter your ADMIN_API_KEY from Railway"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-brand-wine text-white rounded-lg hover:bg-brand-plum transition-colors"
              >
                Set Key
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-2">
              Add ADMIN_API_KEY to your Railway environment variables and use the same key here.
            </p>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-600">
              Total submissions: {submissions.length}
            </p>
          </div>
          <button
            onClick={fetchSubmissions}
            disabled={loading || !adminKey}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-brand-lavender rounded-lg hover:bg-brand-lavender/20 transition-colors disabled:opacity-50"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
            {error}
          </div>
        )}

        {/* Submissions List */}
        {loading ? (
          <div className="text-center py-12">
            <RefreshCw className="animate-spin mx-auto mb-4 text-brand-purple" size={32} />
            <p className="text-gray-600">Loading submissions...</p>
          </div>
        ) : submissions.length > 0 ? (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-plum mb-1">
                      {submission.subject}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {submission.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail size={14} />
                        {submission.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(submission.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  ID: {submission.id}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl">
            <MessageSquare className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600">No submissions yet</p>
            <p className="text-sm text-gray-500 mt-2">Contact form submissions will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;