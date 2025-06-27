// Chart.js Line Chart for Weekly Sales
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Sales (LKR)',
      data: [1500, 3200, 2400, 4100, 3700, 5200, 4400],
      fill: true,
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: '#dc6b19',
      borderWidth: 3,
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#dc6b19'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Table Data
const salesData = [
  { id: 'P001', customer: 'John', date: '2025-06-26', total: 1500 },
  { id: 'P002', customer: 'Sara', date: '2025-06-26', total: 2300 },
  { id: 'P003', customer: 'Liam', date: '2025-06-25', total: 1200 },
  { id: 'P004', customer: 'Maya', date: '2025-06-24', total: 3100 },
  { id: 'P005', customer: 'Nimal', date: '2025-06-24', total: 2800 }
];

const tbody = document.getElementById('salesTableBody');
salesData.forEach(order => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${order.id}</td>
    <td>${order.customer}</td>
    <td>${order.date}</td>
    <td>LKR ${order.total.toFixed(2)}</td>
  `;
  tbody.appendChild(row);
});
