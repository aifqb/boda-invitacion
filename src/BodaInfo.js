import React from 'react';
import styles from './BodaInfo.module.css';

function BodaInfo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Invitación de Boda</h1>

      <div style={{ margin: '20px 0', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
        <h2 className={styles.sectionHeading}>Ceremonia Religiosa:</h2>
        <p className={styles.paragraph}><strong className={styles.label}>Mensaje:</strong> <span style={{ fontFamily: "'Great Vibes', cursive" }}>Queremos unir nuestras vidas delante de Dios, y caminar juntos en bendición siempre...</span></p>
        <p className={styles.paragraph}><strong className={styles.label}>Novios:</strong> <span style={{ fontFamily: "'Great Vibes', cursive" }}>Daniel & Paola</span></p>
        <p className={styles.paragraph}><strong className={styles.label}>Bendición:</strong> <span style={{ fontFamily: "'Great Vibes', cursive" }}>CON LA BENDICIÓN DE DIOS Y DE NUESTROS PADRES</span></p>
        <p className={styles.paragraph}><strong className={styles.label}>Padres del Novio:</strong> Alejandro Quisbert Barrientos (†), Esperanza Burgoa de Quisbert</p>
        <p className={styles.paragraph}><strong className={styles.label}>Padres de la Novia:</strong> Fabiana Yujra Mamani, Fernando Nacho G. Yujra (Hno.)</p>
        <p className={styles.paragraph}><strong className={styles.label}>Invitación:</strong> <span style={{ fontFamily: "'Great Vibes', cursive" }}>Tenemos el Honor de invitarles a Nuestra Boda</span></p>
        <p className={styles.paragraph}><strong className={styles.label}>Fecha:</strong> <span style={{ fontFamily: "'Great Vibes', cursive" }}>SÁBADO 26 ABRIL</span></p>
        <p className={styles.paragraph}><strong className={styles.label}>Lugar:</strong> Iglesia de "San Pedro", de la nueva paz, plaza Sucre</p>
        <p className={styles.paragraph}><strong className={styles.label}>Hora:</strong> <span style={{ fontFamily: "'Great Vibes', cursive" }}>13:30 P.M.</span></p>
        <p className={styles.paragraph}><strong className={styles.label}>Padrinos de Religión:</strong> Nicolás Catacora Bustillos, Alejandra Gutiérrez de Catacora</p>
        <p className={styles.paragraph}><strong className={styles.label}>Padrinos de Civil:</strong> Claver Burgoa Mamani, Rosario Adrián Vargas</p>
        <p className={styles.paragraph}><strong className={styles.label}>Padrinos de Torta y Conteo de Regalos:</strong> Walter Mamani Quispe, Patricia Yujra de Mamani</p>
        <p className={styles.paragraph}><strong className={styles.label}>Código QR:</strong> (Presente en la imagen - Aquí podrías mostrar una imagen del código QR)</p>
      </div>

      <div style={{ margin: '20px 0', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
        <h2 className={styles.sectionHeading}>Recepción:</h2>
        <p className={styles.paragraph}><strong className={styles.label}>Invitación:</strong> <span style={{ fontFamily: "'Great Vibes', cursive" }}>Pasada la ceremonia religiosa, invitamos a compartir la alegría de Nuestra Boda en el Salón de Eventos:</span></p>
        <p className={styles.paragraph}><strong className={styles.label}>Lugar:</strong> "La orquídea", Calle A, entre Alfredo Sanjines y Diego de Ocaña Ciudad Satélite.</p>
      </div>

      <p className={styles.italic}>Agradecemos de antemano su gentil asistencia.</p>
    </div>
  );
}

export default BodaInfo;