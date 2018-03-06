(function($) {
  'use strict';
  
  var categories = [
    { id: 'adm-forums', name: 'Fóruns da Administração', user_level: [ 1, 2 ] },
    { id: 'form-forums', name: 'Formulários' }
  ];

  var links = [{
    name: 'Formulário de postagem 1',
    href: '#link',
    parent: 'form-forums'
  }, {
    name: 'Tópico da administração',
    href: '#adm-link',
    parent: 'adm-forums'
  }];
  
  $(function() {
    const $wrapper = $('<div>', { 'class': 'fa-quick-links' });

    $.each(categories, function(index, userCategorie) {
      /**
       * Usamos a função $.extends do jQuery para aplicar valores caso o usuário não os defina.
       * 
       * Por exemplo, se o usuário não definir um ID, ele será falso.
       * 
       * Outro exemplo: se o usuário não definir nada para a chave `user_level`,
       * o default para este valor será: `[ 0, 1, 2 ]`. 
       * 
       * @see {@link https://api.jquery.com/jquery.extend/}
       */
      var categorie = $.extend({}, { id: false, name: false, user_level: [ 0, 1, 2] }, userCategorie);

      /** Caso nenhum nome ou id forem atribuídos, pule à próxima iteração. */
      if (! categorie.id) return;
      if (! categorie.name) return;

      /** Caso o usuário não esteja na condição de `user_level`, pule à próxima iteração. */
      if (categorie.indexOf(_userdata.user_level) === -1) return;

      /** Criamos a categoria. */
      var $categorie = $('<div>', {
        'data-id': categorie.id,
        'html': [
          $('<h4>', { 'class': 'fa-categorie-title', 'text': categorie.name }).prop('outerHTML'),
          $('<div>', { 'class': 'fa-categorie-append-zone' }).prop('outerHTML')
        ].join('')
      });

      $categorie.appendTo($wrapper);
    });

    $.each(links, function(index, link) {
      // Do stuff...
    });
  });
})(jQuery);
