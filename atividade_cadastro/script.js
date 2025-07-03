function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.menu-toggle');

  sidebar.classList.toggle('active');
  
  if (sidebar.classList.contains('active')) {
    toggleBtn.style.display = 'none';
  } else {
    toggleBtn.style.display = 'block';
  }
}

// Fecha a sidebar quando clicar fora dela
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.menu-toggle');

  // Se sidebar está aberta
  if (sidebar.classList.contains('active')) {
    // Clique fora da sidebar e fora do botão menu
    if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
      sidebar.classList.remove('active');
      toggleBtn.style.display = 'block';
    }
  }
});

