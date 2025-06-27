import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function HomePage() {
  const navigate = useNavigate();

  // Стили
  const container = {
    width: '100%',
    position: 'relative',
    background: 'black',
    overflow: 'hidden',
  };
  const frame783 = {
    width: 1920,
    left: 0,
    top: 0,
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  };
  const frame772 = {
    alignSelf: 'stretch',
    height: 1080,
    paddingTop: 42,
    paddingBottom: 42,
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 374,
  };
  const frame771 = {
    width: 901.73,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30,
  };
  const titleStyle = {
    marginTop: '350px',
    alignSelf: 'stretch',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
    fontSize: 64,
    fontFamily: 'SF Pro Text',
    fontWeight: 600,
    lineHeight: '64px',
    wordWrap: 'break-word',
  };
  const frame782 = {
    alignSelf: 'stretch',
    height: 234,
    paddingLeft: 400,
    paddingRight: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    
  };
  const frame777 = {
    width: 429,
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop: 30,
    paddingBottom: 30,
    overflow: 'hidden',
    borderRadius: 40,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    cursor: 'pointer',
  };
  const detailStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'SF Pro Text',
    fontWeight: 600,
    lineHeight: '24px',
    wordWrap: 'break-word',
  };

  // Анимационные варианты
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Обработчик клика по кнопке
  const handleDetailsClick = () => {
    navigate('/project');
  };

  return (
    <div style={container}>
      <div style={frame783}>

        {/* Основной заголовок */}
        <motion.div
          style={frame772}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div style={frame771}>
            <div style={titleStyle}>
              #WEAREDOT
            </div>
          </div>
        </motion.div>

        {/* Кнопка «Подробнее» */}
        <motion.div
          style={frame782}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={frame777} onClick={handleDetailsClick}>
            <div style={detailStyle}>Подробнее</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
