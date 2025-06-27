import React from 'react';
import { motion } from 'framer-motion';
import TaskBarImage from '../assets/image 8.png';


export default function ProjectPage() {
  // Стили контейнеров
  const container = {
    width: '100%',
    position: 'relative',
    background: 'black',
    overflow: 'hidden',
    paddingTop: 40 + 83, // учёт navbar
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });
  const inner = (paddingV = 0, gap = 0) => ({
    alignSelf: 'stretch',
    paddingTop: paddingV,
    paddingBottom: paddingV,
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap,
  });
  const frame771 = {
    width: 901.73,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
  const text20 = {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'SF Pro Text',
    fontWeight: 400,
    lineHeight: '20px',
  };
  const btn = (bg = '#1D1D1F') => ({
    width: 212,
    padding: '15px 25px',
    background: bg,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  const imgStyle = { width: 1296, height: 95.5 };

  // Варианты анимации для скролла
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div style={container}>
      <div style={outer}>

        {/* 1-я секция */}
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
              dot dot dot dot dot dot dot<br/>
              dot dot dot dot dot dot dot<br/>
              dot dot dot dot dot dot dot<br/>
              dot dot dot dot dot dot dot
            </div>
          </div>
        </motion.div>

        {/* 2-я секция */}
        <motion.div
          style={section(1080)}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={inner(42, 50)}>
            <div style={frame771}>
              <div style={title64}>просто</div>
              <div style={text20}>
                Задачи, цели, заметки, документы.<br/>
                Ничего лишнего.
              </div>
            </div>
            <div style={{ display: 'inline-flex', gap: 30 }}>
              {['Создать задачу','Создать заметку','Создать цель','Добавить документ'].map(text => (
                <div key={text} style={btn()}>
                  <span style={{
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'SF Pro Text',
                    fontWeight: 600,
                  }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3-я секция */}
        <motion.div
          style={section(1080)}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div style={inner(42, 50)}>
            <div style={frame771}>
              <div style={title64}>панель задач</div>
              <div style={text20}>Удобная и простая панель задач, все под рукой.</div>
            </div>
            <motion.img
              src={TaskBarImage}
              alt="taskbar"
              style={imgStyle}
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>
        </motion.div>

        {/* 4-я секция */}
        <motion.div
          style={section(1080)}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div style={inner(42, 50)}>
            <div style={frame771}>
              <div style={title64}>локально</div>
              <div style={text20}>Данные хранятся только у вас. Никаких утечек.</div>
            </div>
          </div>
        </motion.div>

        {/* Футер */}
        <motion.div
          style={{
            alignSelf: 'stretch',
            height: 234,
            padding: '0 400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: 10,
          }}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div style={{
            width: 190,
            padding: '20px 45px',
            background: '#1D1D1F',
            borderRadius: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 14,
            fontWeight: 600,
            color: 'white',
          }}>
            Скоро
          </div>
        </motion.div>

      </div>
    </div>
  );
}
