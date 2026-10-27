const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        
        // primero definimos l variable de el texto de la pregunta
        const content = header.nextElementSibling;
        
        // con esto verificamos si el elemento header selecciona esta abierto
        const isActive = header.classList.contains('active');

        // cuando tenemos una pregunta abierta al abrir otra se va a cerrar 
        // les va a remover el valor active de el que este abierto 
        accordionHeaders.forEach(item => {
            item.classList.remove('active');
            const itemContent = item.nextElementSibling;
            itemContent.classList.remove('active');
            itemContent.style.maxHeight = null;
        });

        // con esto si la pregunta esta cerrada la abre o la activa
        if (!isActive) {
            header.classList.add('active');
            content.classList.add('active');
            
            // Calculamos la altura exacta del texto para que la animación fucione
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});