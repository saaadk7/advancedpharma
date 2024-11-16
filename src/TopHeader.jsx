import  { useState } from 'react';

const TopHeader = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div style={styles.headerWrapper}>
      <div
        style={{
          ...styles.scrollingContainer,
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Side: Location */}
        <div style={styles.scrollingItem}>📍 Im Prüfling 17 - 19, 60389 Frankfurt am Main</div>

        {/* Right Side: Contact Details */}
        <div style={styles.scrollingItem}>📞 069 9563669-0</div>
        <div style={styles.scrollingItem}>✉️ info@groisman-laube.de</div>
      </div>
      <button style={styles.messageButton}>Send a Message</button>
    </div>
  );
};

const styles = {
  headerWrapper: {
    backgroundColor: '#F7EED3',
    overflow: 'hidden', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 20px',
  },
  scrollingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    animation: 'scrolling 15s linear infinite',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
  },
  scrollingItem: {
    flex: 'none', 
    marginRight: '20px',
    color: '#2A2D34',
  },
  messageButton: {
    padding: '8px 16px',
    backgroundColor: '#1F3A93',
    color: '#E0E0E0',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  '@keyframes scrolling': {
    from: {
      transform: 'translateX(100%)',
    },
    to: {
      transform: 'translateX(-100%)',
    },
  },
  '@media (min-width: 768px)': {
    scrollingContainer: {
      animation: 'none', 
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '10px 20px',
    },
    scrollingItem: {
      marginBottom: '0',
      marginRight: '15px',
    },
  },
  '@media (max-width: 768px)': {
    scrollingContainer: {
      animation: 'scrolling 15s linear infinite',
    },
    scrollingItem: {
      fontSize: '14px',
    },
    messageButton: {
      padding: '6px 12px',
      fontSize: '12px',
    },
  },
};

export default TopHeader;
