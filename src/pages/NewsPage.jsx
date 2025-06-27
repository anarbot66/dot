import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../data/firebase';            // ваш инициализированный Firebase
import { collection, getDocs } from 'firebase/firestore';

export default function NewsPage() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const snap = await getDocs(collection(db, 'news'));
      setNewsList(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }
    fetchNews();
  }, []);

  // Общие inline-стили
  const container = {
    width: '100%',
    position: 'relative',
    background: 'black',
    overflow: 'hidden',
  };
  const outer = {
    width: 1920,
    maxWidth: '100%',
    margin: '0 auto',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const section = height => ({
    alignSelf: 'stretch',
    height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });
  const frame771 = {
    width: 901.73,
    maxWidth: '100%',
    display: 'inline-flex',
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
  const title642 = {
    textAlign: 'left',
    color: 'white',
    fontSize: 40,
    fontFamily: 'SF Pro Text',
    fontWeight: 600,
    lineHeight: '64px',
    wordWrap: 'break-word',
  };
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible:{ opacity: 1, y: 0 },
  };

  // Стили для карточки новости
  const card = {
    alignSelf: 'stretch',
    height: 800,                // высота блока
    display: 'flex',            // flex-контейнер
    flexDirection: 'column',
    justifyContent: 'center',   // вертикальное центрирование
    alignItems: 'center',       // горизонтальное центрирование
    marginBottom: 50,
  };
  const frame793 = {
    flex: '0 0 auto',
    display: 'flex',            // flex-контейнер для контента
    flexDirection: 'column',
    justifyContent: 'center',   // вертикальное центрирование контента
    gap: 30,
    width: '100%',
    maxWidth: '900px',
  };
  const headerGroup = {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    width: '100%',
  };
  const topicStyle = {
    color: '#6C6C6C',
    fontSize: 20,
    fontFamily: 'SF Pro Text',
    fontWeight: 400,
    lineHeight: '20px',
    wordWrap: 'break-word',
  };
  const textStyle = {
    color: 'white',
    fontSize: 18,
    fontFamily: 'SF Pro Text',
    fontWeight: 400,
    lineHeight: '20px',
    wordWrap: 'break-word',
  };
  const pointsContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%',
  };
  const pointRow = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
  };
  const dotStyle = {
    width: 15,
    height: 15,
    background: '#FAFAFA',
    borderRadius: 9999,
  };
  const pointText = {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontFamily: 'SF Pro Text',
    fontWeight: 400,
    lineHeight: '14px',
    wordWrap: 'break-word',
  };

  return (
    <div style={container}>
      <div style={outer}>
        {/* Верхний заголовок */}
        <motion.div
          style={section(800)}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div style={frame771}>
            <div style={title64}>
              news news news news news<br/>
              news news news news news<br/>
              news news news news news<br/>
              news news news news news
            </div>
          </div>
        </motion.div>

        {/* Список новостей */}
        {newsList.map(item => (
          <motion.div
            key={item.id}
            style={card}
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div style={frame793}>
              {/* Заголовок и тема */}
              <div style={headerGroup}>
                <div style={title642}>{item.title}</div>
                <div style={topicStyle}>{item.topic}</div>
              </div>

              {/* Основной текст */}
              <div style={textStyle}>{item.text}</div>

              {/* Пункты */}
              <div style={pointsContainer}>
                {item.points?.map((pt, i) => (
                  <div key={i} style={pointRow}>
                    <div style={dotStyle} />
                    <div style={pointText}>{pt}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
