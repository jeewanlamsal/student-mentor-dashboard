import React, { useState } from 'react';
import { Code, Link2, Lock, ChevronRight, Bookmark, HelpCircle, FileText, ExternalLink, Moon } from 'lucide-react';
import ProgressIndicator from './ProgressIndicator';
import  Warnings  from '../pages/Warnings';
import Notifications from './Notifications';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const CourseModulePage: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<number>(1);
  const [currentSection, setCurrentSection] = useState<'overview' | 'progress' | 'warnings' | 'notifications'>('overview');


  const tasks = [
    { id: 1, title: 'Task 1', subtitle: 'HTML Structure Basics', locked: false },
    { id: 2, title: 'Task 2', subtitle: 'CSS Styling', locked: false },
    { id: 3, title: 'Task 3', subtitle: 'Responsive Layouts', locked: false },
    { id: 4, title: 'Task 4', subtitle: 'JavaScript Intro', locked: true },
  ];

  const handleTaskClick = (taskId: number, isLocked: boolean) => {
    if (!isLocked) {
      setSelectedTask(taskId);
      console.log('Task clicked:', taskId);
    }
  };
  const {logout}= useAuth();
const navigate =useNavigate();
const handleLogout=()=>{
  logout();
  navigate("/login", {
    replace: true,
  });
};

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col items-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center mb-3">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='20' fill='%23fff'/%3E%3Cpath d='M20 85 Q20 60 50 60 Q80 60 80 85 Z' fill='%23fff'/%3E%3C/svg%3E"
                alt="Profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Alex Johnson</h2>
            <p className="text-sm text-gray-500">STD ID: #2024-893</p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-semibold text-gray-900">25%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>

        {/* Mentor Details */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Mentor Details</h3>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Sarah Connor</h4>
              <p className="text-sm text-gray-500">Senior Dev</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              mentor@example.com
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
              </svg>
              Contact Mentor
            </div>
          </div>
        </div>

        {/* Dashboard Menu */}
        <div className="flex-1 p-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Dashboard</h3>
         <nav className="space-y-1">
  <button
    onClick={() => setCurrentSection('overview')}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition-colors ${
      currentSection === 'overview' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    Overview
  </button>

  <button
    onClick={() => setCurrentSection('progress')}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition-colors ${
      currentSection === 'progress' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    Progress Indicator
  </button>

  <button
    onClick={() => setCurrentSection('warnings')}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition-colors ${
      currentSection === 'warnings' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    Warnings
  </button>

  <button
    onClick={() => setCurrentSection('notifications')}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition-colors ${
      currentSection === 'notifications' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    Notifications
  </button>
</nav>


          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-3">Socials</h3>
          <div className="flex gap-3">
            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </button>
            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
              <Code className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="p-6 border-t border-gray-200">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          onClick={handleLogout}>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"/>
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Web Development Course</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Moon className="w-5 h-5 text-gray-600" />
            </button>
            <span className="text-sm text-gray-600">Currently Viewing: <span className="font-semibold text-gray-900">Module 1</span></span>
          </div>
        </div>

        <div className="p-4">
          
  {/* OVERVIEW (your existing dashboard + tasks UI) */}
  {currentSection === 'overview' && (
    <>
      {/* Live Class Link */}
       
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Link2 className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Live Class Link</h3>
                <p className="text-sm text-gray-600">course-url.com/meet/xyz-abc</p>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
              Go to URL
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
     

      {/* Task List + Task Details */}
       <div className="grid grid-cols-2 gap-8">
            {/* Task List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Task List</h2>
                <span className="text-sm text-gray-500">1/4 Completed</span>
              </div>

              <div className="space-y-3">
                {tasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => handleTaskClick(task.id, task.locked)}
                    disabled={task.locked}
                    className={`w-full flex items-center justify-between p-4 border-2 rounded-xl transition-all ${
                      task.locked
                        ? 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'
                        : selectedTask === task.id
                        ? 'bg-indigo-50 border-indigo-500'
                        : 'bg-white border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {task.locked && (
                        <Lock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                      <div className="text-left">
                        <h3 className={`font-bold mb-0.5 ${task.locked ? 'text-gray-400' : 'text-indigo-600'}`}>
                          {task.title}
                        </h3>
                        <p className={`text-sm ${task.locked ? 'text-gray-400' : 'text-gray-600'}`}>
                          {task.subtitle}
                        </p>
                      </div>
                    </div>
                    {!task.locked && (
                      <ChevronRight className="w-5 h-5 text-indigo-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Task Details */}
            
          
      <div>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Current Task</span>
                    <div className="flex gap-2">
                      <button className="p-1.5 hover:bg-indigo-100 rounded transition-colors">
                        <Bookmark className="w-4 h-4 text-indigo-600" />
                      </button>
                      <button className="p-1.5 hover:bg-indigo-100 rounded transition-colors">
                        <HelpCircle className="w-4 h-4 text-indigo-600" />
                      </button>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mt-2">HTML Structure Basics</h2>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Create a standard HTML5 boilerplate. Include a header, a main content area with two sections, and a footer. Use semantic tags correctly. Ensure your document passes the W3C validator without errors.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">Requirements</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-gray-600">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Use <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm font-mono">&lt;header&gt;</code>, <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm font-mono">&lt;main&gt;</code>, and <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm font-mono">&lt;footer&gt;</code> tags.</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Include at least one image.</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Create an unordered list of navigation links.</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex gap-3">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Documentation & Resources</h4>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                          Read the MDN Guide on Semantic HTML
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Upload Task 1 Github Link</h3>
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="https://github.com/username/repo"
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                        Submit
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">* Ensure the repository is public before submitting.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
      
    </>
  )}

  {/* PROGRESS INDICATOR PAGE */}
  {currentSection === 'progress' && <ProgressIndicator />}

  {/* WARNINGS PAGE */}
  {currentSection === 'warnings' && <Warnings />}

  {/* NOTIFICATIONS PAGE */}
  {currentSection === 'notifications' && <Notifications />}
   </div>


         

         
        </div>
      </div>
    
  );
};

export default CourseModulePage;