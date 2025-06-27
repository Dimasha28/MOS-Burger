<script>
    function openModal() {
      document.getElementById("orderModal").style.display = "block";
    }

    function closeModal() {
      document.getElementById("orderModal").style.display = "none";
    }

    // Optional: Close modal when clicking outside it
    window.onclick = function(event) {
      const modal = document.getElementById("orderModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  </script>
