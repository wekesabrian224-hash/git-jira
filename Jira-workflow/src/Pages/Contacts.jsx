import { useState } from 'react'

function Contacts() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#120d16',
      color: '#f5e9f7',
      paddingBottom: '60px',
      fontFamily: 'sans-serif',
    },
    header: {
      textAlign: 'center',
      padding: '70px 20px 40px',
    },
    title: {
      fontSize: '3rem',
      marginBottom: '15px',
      color: '#d8a7e0',
    },
    subtitle: {
      maxWidth: '650px',
      margin: '0 auto',
      color: '#c7b8ca',
      fontSize: '1.1rem',
      lineHeight: '1.7',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
    },
    card: {
      backgroundColor: '#1d1422',
      border: '1px solid #4b3153',
      borderRadius: '12px',
      padding: '35px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '18px',
    },
    label: {
      fontWeight: '600',
      color: '#ead5ee',
    },
    input: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '13px 15px',
      border: '1px solid #5a3d63',
      borderRadius: '8px',
      backgroundColor: '#120d16',
      color: '#f5e9f7',
      fontSize: '1rem',
    },
    textarea: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '13px 15px',
      border: '1px solid #5a3d63',
      borderRadius: '8px',
      backgroundColor: '#120d16',
      color: '#f5e9f7',
      fontSize: '1rem',
      resize: 'vertical',
    },
    button: {
      marginTop: '8px',
      padding: '14px 20px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#7b3f87',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      width: '100%',
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent to the coven! 🦇')
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contact the Coven</h1>
        <p style={styles.subtitle}>Have a question, want to work with us, or simply want to say hello? Send us a message.</p>
      </header>

      <main style={styles.container}>
        <section style={styles.card}>
          <h2 style={{ color: '#d8a7e0', marginBottom: '20px' }}>Get in Touch</h2>
          <p style={{ color: '#c7b8ca', lineHeight: '1.7', marginBottom: '30px' }}>
            We are a team of software engineering students working together to build creative solutions.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', color: '#bcaec0' }}>
            <div><strong>📧 Email:</strong> coven@example.com</div>
            <div><strong>📍 Location:</strong> Nairobi, Kenya</div>
            <div><strong>🕸️ Availability:</strong> Monday - Friday</div>
          </div>
        </section>

        <section style={styles.card}>
          <h2 style={{ color: '#d8a7e0', marginBottom: '20px' }}>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <input 
                type="text" 
                style={styles.input} 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input 
                type="email" 
                style={styles.input} 
                placeholder="Enter your email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea 
                style={styles.textarea} 
                rows="5" 
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>

            <button type="submit" style={styles.button}>Send Message 🦇</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Contacts