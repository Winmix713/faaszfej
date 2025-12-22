import React, { useState } from 'react';
import { Menu, Bell, Settings, Palette, HelpCircle, LogOut, Activity, Shield, Clock, TrendingUp, Cpu, Zap, MessageSquare, BarChart3, Upload, FileUp, CheckCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../../contexts/sidebarContext';
import NotificationDrawer from '../ui/NotificationDrawer';
import HeadlessMenu from '../ui/HeadlessMenu';
import HeadlessPopover from '../ui/HeadlessPopover';

const PageHeader = () => {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [isDragging, setIsDragging] = useState(false);

  const actionButtonStyles = `
    group relative w-10 h-10 rounded-full flex items-center justify-center
    border border-transparent bg-transparent text-gray-400
    hover:bg-white/5 hover:text-white hover:border-white/10
    active:scale-95 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-k-lime/50
  `;

  const adminMenuItems = [
    {
      section: 'System',
      items: [
        { label: 'Admin Dashboard', icon: <Activity className="w-4 h-4" />, route: '/admin/dashboard' },
        { label: 'Health & Monitoring', icon: <Shield className="w-4 h-4" />, route: '/admin/health' },
        { label: 'Jobs & Schedules', icon: <Clock className="w-4 h-4" />, route: '/admin/jobs' },
      ],
    },
    {
      section: 'ML & Predictions',
      items: [
        { label: 'Predictions', icon: <TrendingUp className="w-4 h-4" />, route: '/admin/predictions' },
        { label: 'Stats Analyzer', icon: <BarChart3 className="w-4 h-4" />, route: '/admin/stats' },
        { label: 'ML Models', icon: <Cpu className="w-4 h-4" />, route: '/admin/models' },
        { label: 'Phase 9 Features', icon: <Zap className="w-4 h-4" />, route: '/admin/phase9' },
      ],
    },
    {
      section: 'Feedback',
      items: [
        { label: 'Prediction Feedback', icon: <MessageSquare className="w-4 h-4" />, route: '/admin/feedback' },
      ],
    },
  ];

  const settingsMenuItems = [
    {
      label: 'Appearance',
      icon: <Palette className="w-4 h-4" />,
      onClick: () => console.log('Appearance settings')
    },
    {
      label: 'Help & Support',
      icon: <HelpCircle className="w-4 h-4" />,
      onClick: () => console.log('Help clicked')
    },
    {
      label: 'Sign Out',
      icon: <LogOut className="w-4 h-4" />,
      onClick: () => console.log('Sign out'),
      danger: true
    },
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/csv') {
      setSelectedFile(file);
      setUploadStatus('idle');
    } else if (file) {
      setUploadStatus('error');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === 'text/csv') {
      setSelectedFile(file);
      setUploadStatus('idle');
    } else if (file) {
      setUploadStatus('error');
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setUploadStatus('uploading');

    setTimeout(() => {
      setUploadStatus('success');
      setTimeout(() => {
        setSelectedFile(null);
        setUploadStatus('idle');
      }, 2000);
    }, 1500);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setUploadStatus('idle');
  };

  return (
    <header className="h-16 lg:h-20 flex items-center justify-between px-4 lg:px-8 border-b border-white/10 bg-[#030303]/90 backdrop-blur-xl sticky top-0 z-40 transition-all duration-300">
      
      {/* --- LEFT SECTION: Mobile Toggle Only --- */}
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar} 
          className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
        {/* A korábbi tartalom (breadcrumbs, live feed) innen el lett távolítva */}
      </div>

      {/* --- RIGHT SECTION: System Status + Actions --- */}
      <div className="flex items-center gap-3 lg:gap-6">
        
        {/* CSV Upload Button */}
        <div className="hidden md:block">
          <HeadlessPopover
            button={
              <button className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-200">
                <Upload className="w-4 h-4 text-gray-400 group-hover:text-k-lime transition-colors" />
                <span className="text-xs font-medium text-gray-300 group-hover:text-white">CSV feltöltése</span>
              </button>
            }
            align="right"
            className="w-96 backdrop-blur-xl bg-[#0a0a0a]/95 border border-white/10 shadow-2xl rounded-xl"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <h3 className="text-sm font-semibold text-white">CSV Fájl Feltöltése</h3>
                {selectedFile && (
                  <button
                    onClick={handleReset}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Reset"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {uploadStatus === 'success' ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="text-white font-semibold">Sikeres feltöltés</h4>
                  <p className="text-xs text-gray-400">A fájl sikeresen fel lett dolgozva</p>
                </div>
              ) : (
                <>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                      isDragging
                        ? 'border-k-lime bg-k-lime/5'
                        : selectedFile
                        ? 'border-k-lime/30 bg-k-lime/5'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <input
                      type="file"
                      accept=".csv"
                      onChange={handleFileSelect}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      id="csv-upload"
                    />
                    <div className="pointer-events-none space-y-3">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto">
                        <FileUp className={`w-6 h-6 ${selectedFile ? 'text-k-lime' : 'text-gray-400'}`} />
                      </div>
                      {selectedFile ? (
                        <div>
                          <p className="text-sm font-semibold text-white">{selectedFile.name}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {(selectedFile.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Húzd ide a CSV fájlt
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            vagy kattints a tallózáshoz
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {uploadStatus === 'error' && (
                    <div className="text-xs text-red-400 text-center">
                      Csak CSV fájlokat lehet feltölteni
                    </div>
                  )}

                  {selectedFile && uploadStatus !== 'uploading' && (
                    <button
                      onClick={handleUpload}
                      className="w-full py-2.5 px-4 rounded-lg bg-k-lime text-black font-semibold text-sm hover:bg-k-lime/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-k-lime focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
                    >
                      Feltöltés
                    </button>
                  )}

                  {uploadStatus === 'uploading' && (
                    <div className="flex items-center justify-center gap-2 py-2.5">
                      <div className="w-4 h-4 border-2 border-k-lime border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm text-gray-300">Feltöltés folyamatban...</span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-white/5">
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      A CSV fájl feldolgozásra kerül és az adatok tárolódnak az adatbázisban.
                      Támogatott formátum: .csv
                    </p>
                  </div>
                </>
              )}
            </div>
          </HeadlessPopover>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>

        {/* Admin Menu */}
        <div className="hidden md:block">
          <HeadlessPopover
            button={
              <button className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-k-lime/50">
                <Shield className="w-4 h-4 text-gray-400 group-hover:text-k-lime transition-colors" />
                <span className="text-xs font-medium text-gray-300 group-hover:text-white">Admin</span>
              </button>
            }
            align="right"
            className="w-80 backdrop-blur-xl bg-[#0a0a0a]/95 border border-white/10 shadow-2xl rounded-xl"
          >
            <div className="p-4 space-y-4">
              {adminMenuItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h4 className="text-[10px] uppercase tracking-wide text-gray-500 font-bold mb-2 px-2">
                    {section.section}
                  </h4>
                  <div className="space-y-1">
                    {section.items.map((item, itemIdx) => (
                      <button
                        key={itemIdx}
                        onClick={() => navigate(item.route)}
                        className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-xs text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-k-lime/50"
                      >
                        <span className="text-gray-500 group-hover:text-k-lime">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </HeadlessPopover>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>

        {/* Action Buttons Group */}
        <div className="flex items-center gap-2">
          {/* Notification Bell */}
          <button
            onClick={() => setIsNotificationsOpen(true)}
            className={`${actionButtonStyles} ${isNotificationsOpen ? 'bg-k-lime/10 !text-k-lime border-k-lime/20' : ''}`}
            aria-label="Notifications"
          >
            <Bell className={`w-5 h-5 transition-transform duration-300 ${isNotificationsOpen ? 'rotate-12' : 'group-hover:rotate-12'}`} />
            {!isNotificationsOpen && (
              <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-k-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-k-lime border border-[#030303]"></span>
              </span>
            )}
          </button>

          {/* Settings Menu */}
          <HeadlessMenu
            button={
              <button className={actionButtonStyles} aria-label="Settings">
                <Settings className="w-5 h-5 transition-transform duration-500 group-hover:rotate-90" />
              </button>
            }
            items={settingsMenuItems}
            align="right"
            menuClassName="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl"
          />
        </div>
      </div>

      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
    </header>
  );
};

export default PageHeader;