import React from 'react';

function BodaInfo() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', color: '#555' }}>Invitación de Boda</h1>

      <div style={{ margin: '20px 0', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
        <h2 style={{ color: '#888' }}>Ceremonia Religiosa:</h2>
        <p><strong>Mensaje:</strong> Queremos unir nuestras vidas delante de Dios, y caminar juntos en bendición siempre...</p>
        <p><strong>Novios:</strong> Daniel & Paola</p>
        <p><strong>Bendición:</strong> CON LA BENDICIÓN DE DIOS Y DE NUESTROS PADRES</p>
        <p><strong>Padres del Novio:</strong> Alejandro Quisbert Barrientos (†), Esperanza Burgoa de Quisbert</p>
        <p><strong>Padres de la Novia:</strong> Fabiana Yujra Mamani, Fernando Nacho G. Yujra (Hno.)</p>
        <p><strong>Invitación:</strong> Tenemos el Honor de invitarles a Nuestra Boda</p>
        <p><strong>Fecha:</strong> SÁBADO 26 ABRIL</p>
        <p><strong>Lugar:</strong> Iglesia de "San Pedro", de la nueva paz, plaza Sucre</p>
        <p><strong>Hora:</strong> 13:30 P.M.</p>
        <p><strong>Padrinos de Religión:</strong> Nicolás Catacora Bustillos, Alejandra Gutiérrez de Catacora</p>
        <p><strong>Padrinos de Civil:</strong> Claver Burgoa Mamani, Rosario Adrián Vargas</p>
        <p><strong>Padrinos de Torta y Conteo de Regalos:</strong> Walter Mamani Quispe, Patricia Yujra de Mamani</p>
        <p><strong>Código QR:</strong> (Presente en la imagen - Aquí podrías mostrar una imagen del código QR)</p>
        {/* Si tienes la imagen del código QR, podrías agregar algo como: */}
        {/* <img src="/images/codigo_qr.png" alt="Código QR" style={{ maxWidth: '200px' }} /> */}
        {/* Asegúrate de crear una carpeta 'public/images' y colocar la imagen allí */}
      </div>

      <div style={{ margin: '20px 0', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
        <h2 style={{ color: '#888' }}>Recepción:</h2>
        <p><strong>Invitación:</strong> Pasada la ceremonia religiosa, invitamos a compartir la alegría de Nuestra Boda en el Salón de Eventos:</p>
        <p><strong>Lugar:</strong> "La orquídea", Calle A, entre Alfredo Sanjines y Diego de Ocaña Ciudad Satélite.</p>
      </div>

      <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#777' }}>Agradecemos de antemano su gentil asistencia.</p>
    </div>
  );
}

export default BodaInfo;