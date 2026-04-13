export default function StatCard({ title, value, subtext, color = "#007bff" }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      flex: 1,
      minWidth: '200px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ color: '#888', fontSize: '14px' }}>{title}</span>
        {/* هنا يمكن إضافة أيقونة مستقبلاً */}
      </div>
      <h2 style={{ margin: '0 0 10px 0', fontSize: '28px' }}>{value}</h2>
      <p style={{ color: '#28a745', fontSize: '12px', margin: 0, fontWeight: '500' }}>
        {subtext}
      </p>
    </div>
  );
}

