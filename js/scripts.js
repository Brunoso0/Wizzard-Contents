
        // Função para mudar a imagem de fundo
        function mudarImagem(urlImagem) {
            document.body.style.backgroundImage = 'url(' + urlImagem + ')';
        }




        function showHarryContainers() {
            hideAllContainers();
            var containers = document.querySelectorAll('.container[data-category="harry"]');
            containers.forEach(function(container) {
                container.style.display = 'flex';
            });
        }
    
        function showAnimalContainers() {
            hideAllContainers();
            var containers = document.querySelectorAll('.container[data-category="animal"]');
            containers.forEach(function(container) {
                container.style.display = 'flex';
            });
        }
    
        function showBookContainers() {
            hideAllContainers();
            var containers = document.querySelectorAll('.container[data-category="book"]');
            containers.forEach(function(container) {
                container.style.display = 'flex';
            });
        }
    
        function hideAllContainers() {
            var containers = document.querySelectorAll('.container');
            containers.forEach(function(container) {
                container.style.display = 'none';
            });
        }
    
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'flex';
        }
    
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }