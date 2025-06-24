// src/pages/TeamPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function TeamPage() {
  // Стили
  const container = {
    width: '100%',
    position: 'relative',
    background: 'black',
    overflow: 'hidden',
    paddingTop: 40 + 83,
  };
  const outer = {
    width: 1920,
    top: 0,
    left: 0,
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const section = (height) => ({
    alignSelf: 'stretch',
    height,
    paddingTop: 42,
    paddingBottom: 42,
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });
  const frame771 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
  };
  const title64 = {
    textAlign: 'center',
    color: 'white',
    fontSize: 64,
    fontFamily: 'SF Pro Text',
    fontWeight: 600,
    lineHeight: '64px',
    wordWrap: 'break-word',
  };
  // bg по умолчанию — градиент
  const btn = (bg = 'linear-gradient(180deg, #212124 0%, #1D1D1F 100%)') => ({
    width: 212,
    padding: '15px 25px',
    background: bg,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  // Варианты анимации (если нужны в будущем)
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div style={container}>
      <div style={outer}>

        {/* Верхняя часть */}
        <motion.div
          style={section(600)}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div style={frame771}>
            <div style={title64}>
              anarbot anarbot anarbot anarbot<br/>
              anarbot anarbot anarbot anarbot<br/>
              anarbot anarbot anarbot anarbot<br/>
              anarbot anarbot anarbot anarbot
            </div>
          </div>
        </motion.div>

        {/* Блок с ролями */}
        <motion.div
          style={{
            alignSelf: 'stretch',
            height: 1080,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 15 }}>
            <div style={{ display: 'inline-flex', gap: 30 }}>
              {['Дизайнер','Разработчик','Тестировщик'].map(txt => (
                <div key={txt} style={btn('transparent')}>
                  <span style={{
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'SF Pro Text',
                    fontWeight: 600,
                  }}>{txt}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'inline-flex', gap: 30 }}>
              {['anarbot66','anarbot66','anarbot66'].map((txt, i) => (
                // Здесь фон прозрачный
                <div key={i} style={btn()}>
                  <span style={{
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'SF Pro Text',
                    fontWeight: 600,
                  }}>{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
