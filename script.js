function searchFlight() {
  const from = document.getElementById('from').value.trim();
  const to = document.getElementById('to').value.trim();
  const date = document.getElementById('date').value;
  const passengers = document.getElementById('passengers').value;

  if (!from || !to || !date) {
    alert('⚠️ Please fill in all fields!');
    return;
  }

  alert(`🔍 Searching flights...\n\nFrom: ${from}\nTo: ${to}\nDate: ${date}\n${passengers}\n\n📞 Or call +880 1712-345678 for instant booking!`);
}