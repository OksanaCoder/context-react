import React from 'react';
import styles from './Note.module.scss';

const Note = ({ children, title, bgColor }) => {
  return (
    <article className={styles.note} style={{ borderColor: bgColor || '' }}>
      <h2 className={styles.note__h2} style={{ color: bgColor || '' }}>
        {title || 'Note'}
      </h2>
      {children}
    </article>
  );
};

export default Note;
