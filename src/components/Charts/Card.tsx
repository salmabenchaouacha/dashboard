import React from 'react';


 {/* <Card
          title="Produit 1"
          content="Description du produit 1."
         // Utilisez une image placeholder pour l'exemple
        /> */}
// Composant Card
const Card = ({ title, content}) => {
  return (
    <div style={styles.card}>
      
      <div style={styles.body}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.content}>{content}</p>
      </div>
    </div>
  );
};

// Styles en ligne pour simplifier
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px',
    margin: '16px',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover'
  },
  body: {
    padding: '16px'
  },
  title: {
    fontSize: '1.5em',
    margin: '0 0 8px'
  },
  content: {
    fontSize: '1em',
    margin: '0'
  }
};

export default Card;
