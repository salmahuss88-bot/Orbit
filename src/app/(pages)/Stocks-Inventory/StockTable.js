export default function StockTable({ data }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', fontSize: '14px' }}>
        <thead>
          <tr style={{ textAlign: 'left', color: '#888', borderBottom: '2px solid #eee' }}>
            <th style={{ padding: '12px' }}>S/N</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Category</th>
            <th>QTY Purchased</th>
            <th>Unit Price</th>
            <th>Total Amount</th>
            <th>In-Stock</th>
            <th>Supplier</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
              
              {/* 1. عمود الرقم التسلسلي (هذا الذي كان ناقصاً) */}
              <td style={{ padding: '15px 12px' }}>
                {String(index + 1).padStart(2, '0')}
              </td>

              {/* 2. عمود الصورة (تعديلك فيه بطل!) */}
              <td>
                <div style={{ 
                  width: '45px', 
                  height: '45px', 
                  backgroundColor: '#f9f9f9', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid #eee',
                  overflow: 'hidden' 
                }}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                </div>
              </td>

              {/* 3. باقي الأعمدة بالترتيب الصحيح */}
              <td style={{ fontWeight: '500' }}>{item.name}</td>
              <td style={{ color: '#666' }}>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.qtyPurchased}</td>
              <td>{item.unitPrice}</td>
              <td>{item.totalAmount}</td>
              <td>{item.inStock}</td>
              <td>{item.supplier}</td>
              <td style={{ 
                color: item.status === "In stock" ? "#28a745" : 
                       item.status === "Out of Stock" ? "#dc3545" : "#ffc107",
                fontWeight: 'bold' 
              }}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}