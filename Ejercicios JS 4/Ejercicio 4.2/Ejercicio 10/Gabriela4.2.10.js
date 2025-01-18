const $input = $('#searchInput');
const $categoryFilter = $('#categoryFilter');
const $productosNombres = $('.product');

$input.on('input', () => {
    let nuevoHtml = '';
    const productosMostrados = $('#productList');

    if($input.val()) {
        $productosNombres.each((i, producto) => {
            nuevoHtml = nuevoHtml + coincideFiltro($input.val().toLowerCase(), producto, $('#categoryFilter').val());
        });
    }
    else {
        $productosNombres.each((i, producto) => {
            nuevoHtml = nuevoHtml + $(producto).prop('outerHTML');
        });
    }
    productosMostrados.fadeOut(500, () => {
        productosMostrados.html(nuevoHtml);
        productosMostrados.fadeIn(500);
    });
})

$categoryFilter.change(() => {
    let nuevoHtml = '';
    const productosMostrados = $('#productList');

    if ($categoryFilter.val()) {
        $productosNombres.each((i, producto) => {
            nuevoHtml = nuevoHtml + coincideFiltro($input.val().toLowerCase(), producto, $('#categoryFilter').val());
        });
    }
    else {
        $productosNombres.each((i, producto) => {
            nuevoHtml = nuevoHtml + $(producto).prop('outerHTML');
        });
    }

    productosMostrados.fadeOut(500, () => {
        productosMostrados.html(nuevoHtml);
        productosMostrados.fadeIn(500);
    });
})

function coincideFiltro(input, producto, filtraCategoria = null) {
    let div = '';
    const nombre = $(producto).find('h3').text();
    const data_category = $(producto).attr('data-category');

    if(
        !input ||
        (input && nombre.toLowerCase().startsWith(input))
    ) {
        if(
            !filtraCategoria || 
            (filtraCategoria && data_category === filtraCategoria)
        ) {
            div = $(producto).prop('outerHTML');
        }
    }
    return div;
}

