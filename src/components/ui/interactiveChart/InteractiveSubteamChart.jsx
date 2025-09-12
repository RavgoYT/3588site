import React, { useState, useEffect } from 'react';
import Select from 'react-select';

export default function InteractiveSubteamChart({ subteams, activeTeam, setActiveTeam, landscapeMode }) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 900px)').matches);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // react-select options
  const selectOptions = subteams.map(team => ({ value: team.key, label: team.title }));
  const selectedOption = selectOptions.find(opt => opt.value === activeTeam);

  return (
    <div className={`relative mb-4 ${landscapeMode ? 'h-24' : 'h-16 sm:h-20'} flex items-center justify-start overflow-x-auto`}>
      {/* Mobile: show dropdown, hide buttons */}
      {isMobile ? (
        <div className="w-full px-2">
          <Select
            options={selectOptions}
            value={selectedOption}
            onChange={opt => setActiveTeam(opt.value)}
            classNamePrefix="react-select"
            isSearchable={false}
            menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
            styles={{
              control: (base) => ({ ...base, background: 'linear-gradient(90deg, #6586c7, #e23942)', color: 'white', borderRadius: '8px', border: 'none', minHeight: '48px' }),
              singleValue: (base) => ({ ...base, color: 'white', fontWeight: 700 }),
              menu: (base) => ({ ...base, background: '#121216', color: 'white', minHeight: '220px', maxHeight: '400px' }),
              menuList: (base) => ({ ...base, maxHeight: '400px', minHeight: '220px', paddingTop: 0, paddingBottom: 0 }),
              menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              option: (base, state) => ({ ...base, color: 'white', background: state.isSelected ? '#6586c7' : '#121216' }),
            }}
          />
        </div>
      ) : (
        <div className="flex items-center gap-3 sm:gap-4 min-w-max pl-0">
          {subteams.map((team, index) => {
            const isActive = activeTeam === team.key;
            const activeIndex = subteams.findIndex(t => t.key === activeTeam);
            const marginRight = index === activeIndex ? '240px' : '0px';
            return (
              <div key={team.key} className="relative" style={{ marginRight, transition: 'margin-right 300ms ease-in-out' }}>
                {/* Extending Panel */}
                <div 
                  className={`mentorship-extending-panel absolute ${landscapeMode ? 'top-1/2 left-8' : 'top-1/2 left-6 sm:left-8'} h-full flex items-center justify-center shadow-xl origin-left overflow-hidden z-0 rounded-lg`}
                  style={{ 
                    background: 'linear-gradient(180deg, #121216, #545469)',
                    width: isActive ? '280px' : '0px',
                    transition: 'width 300ms ease-in-out',
                    paddingLeft: isActive ? '16px' : '0',
                    paddingRight: isActive ? '16px' : '0',
                    height: landscapeMode ? '48px' : '40px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                >
                  <span
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        textAlign: 'center',
                        fontFamily: 'HK Modular, sans-serif',
                        color: 'white',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        whiteSpace: 'nowrap',
                        fontSize: '1.05rem',
                        lineHeight: 1.1,
                        paddingLeft: team.title.length < 6
                          ? '0px'
                          : team.title.length <= 8
                          ? '38px'
                          : team.title.length <= 10
                          ? '38px'
                          : '38px',
                      }}
                    >
                      {team.title}
                    </span>
                  </span>
                </div>
                {/* Circular Button */}
                <button
                  onClick={() => setActiveTeam(team.key)}
                  data-testid={`subteam-button-${team.key}`}
                  className={`mentorship-circle-btn ${landscapeMode ? 'w-[72px] h-[72px]' : 'w-[55.2px] h-[55.2px] sm:w-[72px] sm:h-[72px]'} flex items-center justify-center relative z-10`}
                  style={{ background: 'linear-gradient(90deg, #6586c7, #e23942)', padding: 0, border: 'none', borderRadius: '9999px', fontFamily: 'TT Norms Pro, sans-serif' }}
                >
                  <span className="flex items-center justify-center w-2/3 h-2/3">
                    {team.icon}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
