// 1. استيراد المكونات من نفس المجلد
import StatCard from './StatCard';
import StockTable from './StockTable';

export default function Page() {
  // تحديث البيانات التجريبية لتشمل كل الأعمدة (Image, ID, Category, Qty, Price, Total, In-Stock, Supplier, Status)
  const stockData = [
    { 
      id: "45656787", 
      imageUrl: "/images/Pen.svg", // تأكدي أن الاسم يطابق اسم الصورة في مجلد public
      name: "Pen", 
      category: "Stationaries", 
      qtyPurchased: "50pcs", 
      unitPrice: "$100.00", 
      totalAmount: "$5,000.00", 
      inStock: "40pcs", 
      supplier: "Big Ben's Store", 
      status: "In stock" 
    },
    { 
      id: "69956787", 
      imageUrl: "/images/A4.svg", // تأكدي أن الاسم يطابق اسم الصورة في مجلد public
      name: "A4 Paper", 
      category: "Stationaries", 
      qtyPurchased: "20pcs", 
      unitPrice: "$3,000.00", 
      totalAmount: "$60,000.00", 
      inStock: "0pcs", 
      supplier: "Big Ben's Store", 
      status: "Out of Stock" 
    },
    { 
      id: "36426787", 
      imageUrl: "/images/Liquid.svg", // تأكدي أن الاسم يطابق اسم الصورة في مجلد public
      name: "Liquid wash", 
      category: "Detergent", 
      qtyPurchased: "35pcs", 
      unitPrice: "$5000.00", 
      totalAmount: "$175,000.00", 
      inStock: "10pcs", 
      supplier: "Quality wash", 
      status: "Low in stock" 
    },

    { 
      id: "45656788", 
      imageUrl: "/images/Paper.svg", // تأكدي أن الاسم يطابق اسم الصورة في مجلد public
      name: "Paper clips", 
      category: "Stationaries", 
      qtyPurchased: "45pcs", 
      unitPrice: "$200.00", 
      totalAmount: "$9,000.00", 
      inStock: "10pcs", 
      supplier: "Big Ben's Store", 
      status: "Low in stock" 
    },

    { 
      id: "36426788", 
      imageUrl: "/images/Note.svg", // تأكدي أن الاسم يطابق اسم الصورة في مجلد public
      name: "Notepads", 
      category: "Stationaries", 
      qtyPurchased: "100pcs", 
      unitPrice: "$2,000.00", 
      totalAmount: "$200,000.00", 
      inStock: "45pcs", 
      supplier: "Big Ben's Store", 
      status: "In stock" 
    },

    { 
      id: "36420021", 
      imageUrl: "/images/Air.svg", // تأكدي أن الاسم يطابق اسم الصورة في مجلد public
      name: "Air freshner", 
      category: "Stationaries", 
      qtyPurchased: "10pcs", 
      unitPrice: "$1,000.00", 
      totalAmount: "$10,000.00", 
      inStock: "0pcs", 
      supplier: "Quality wash", 
      status: "Out of Stock" 
    },
  ];

  return (
    <div style={{ padding: '30px', backgroundColor: '#f4f7fe', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* الهيدر العلوي */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', color: '#1a3353' }}>Stocks and Inventory</h1>
          <p style={{ color: '#888', margin: '5px 0 0 0' }}>Update stock and inventory table</p>
        </div>
       
      </div>

      {/* منطقة البطاقات (Stats) - أضفنا البطاقات الأربعة كما في الصورة */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
        <StatCard title="Categories" value="15" subtext="↑ 2 more than last year" />
        <StatCard title="Total items" value="800" subtext="↑ 10 more than last year" />
        <StatCard title="Total item cost" value="$5,000,000" subtext="↓ 2.5% less than last year" />
        <StatCard title="Items low in stock" value="200" subtext="↑ 20 more than last week" />
      </div>
      
 <button style={{
          background: 'linear-gradient(90deg, #0052cc, #007bff)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 82, 204, 0.2)'
        }}>
          Update Stock
        </button>



      {/* عنوان الجدول */}
      <h3 style={{ marginBottom: '15px', color: '#1a3353' }}>Stock List</h3>

      {/* الجدول مع تمرير البيانات الجديدة */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <StockTable data={stockData} />
      </div>

    </div>
  );
}