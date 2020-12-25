let categories = []

let setCategories = (data) => {
  $.each(data, (indice, data) => {
    categories.push(data)
    $(" ul").append(
      ` 
            <li class="nav-item">
              <a id=${data.id} class="nav-link one-new">${data.nome}</a>
            </li>
          `
    )
  })
}

let getNews = (data) => {
  $("main").empty()
  $.each(data, (indice, data) => {
    if (data.editavel) {
      $("main").append(`
          <div id="${data.id}">
            <h1 id="title">Título: ${data.titulo}</h1>
            <p id="subtitle">Subtitulo: ${data.subtitulo} </p>
            <p id="content">Conteúdo: ${data.conteudo} </p>
            <button type="button" class="btn btn-primary" id="edit-news">Editar</button>
            <button type="button" class="btn btn-danger" id="delete-news">Deletar</button>
          </div>
          `)
    } else {
      $("main").append(`
          <div>
            <h1>Título: ${data.titulo}</h1>
            <p>Subtitulo: ${data.subtitulo} </p>
            <p>Conteúdo: ${data.conteudo} </p>
          </div>
          `)
    }
  })
}

let toastSucess = (msg) => {
  $.toast({
    heading: "Sucesso!!",
    text: `${msg}`,
    icon: "success",
    showHideTransition: "slide",
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: "bottom-right",
    textAlign: "left",
    loader: true,
    loaderBg: "#9EC600",
    bgColor: "rgba(0,199,40,0.76)",
    textColor: "#fff",
  });
}

let toastError = (msg) => {
  $.toast({
    heading: "Erro!!",
    text: `${msg}`,
    icon: "warning",
    showHideTransition: "slide",
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: "bottom-right",
    textAlign: "left",
    loader: true,
    loaderBg: "#ec9caa",
    bgColor: "rgba(217,40,40,0.76)",
    textColor: "#fff",
  });
}

$(document).on("click", "#ad-news", () => {
  $("main").empty()
  $("main").append(`
      <form action="https://tiagoifsp.ddns.net/noticias/noticias/cadastrar.php" method="POST" id="form-add-news">
        <h1>Cadastrar Notícia</h1>
        <div class="form-group">
          <label for="categories">Categoria:</label>
          <select id="categories">
          </select>
        </div>
        <div class="form-group">
          <label for="title">Título da notícia:</label>
          <input type="text" class="form-control" placeholder="Título" id="add-title">
        </div>
        <div class="form-group">
          <label for="subtitle">Subtítulo da notícia:</label>
          <input type="text" class="form-control" placeholder="Subtítulo" id="add-subtitle">
        </div>
        <div>
          <label for="content">Conteúdo  da notícia:</label>
        </div>
          <textarea rows="5" cols="137" name="comment" id="add-content" placeholder="Conteúdo"></textarea>
        <div>
          <button class="btn btn-primary button-add-news">Cadastrar</button>
        </div>
      </form>
      `)

  for (i in categories) {
    $("#categories").append(`
          <option id="${categories[i].id}">${categories[i].nome}</option>
        `)
  }
})

$(document).on("click", ".button-add-news", (event) => {
  event.preventDefault();

  let addNew = {
    "titulo": $("#add-title").val(),
    "subtitulo": $("#add-subtitle").val(),
    "conteudo": $("#add-content").val(),
    "idCategoria": $("#categories option:selected").attr('id')
  }

  $.ajax({
    url: 'https://tiagoifsp.ddns.net/noticias/noticias/cadastrar.php',
    type: 'POST',
    dataType: 'JSON',
    data: addNew,
    success: () => toastSucess('Notícia cadastrada.'),
    error: () => toastError('Erro no cadastro.')
  })

  $('#form-add-news')[0].reset()
})

$(document).on("click", ".one-new", function () {
  let id = $(this).attr('id')
  $.ajax({
    url: 'https://tiagoifsp.ddns.net/noticias/noticias/listar.php',
    type: 'GET',
    dataType: 'JSON',
    data: {
      "id": `${id}`
    },
    success: getNews
  })
})

$(document).on("click", "#edit-news", function (event) {
  $("main").empty()

  event.preventDefault()

  let title = $(this).siblings('#title')[0].textContent
  title = title.replace('Título:', '').trim()
  let subtitle = $(this).siblings('#subtitle')[0].textContent
  subtitle = subtitle.replace('Subtitulo:', '').trim()
  let content = $(this).siblings('#content')[0].textContent
  content = content.replace('Conteúdo:', '').trim()

  let idEdditNews = $(this).parent().attr('id')

  $("main").append(`
      <form action="https://tiagoifsp.ddns.net/noticias/noticias/editar.php" method="POST" id="form-eddit-news">
        <h1>Editar Notícia</h1>
        <div class="form-group flagIdEddit" id="${idEdditNews}">
          <label for="categories">Categoria:</label>
          <select id="categories">
          </select>
        </div>
        <div class="form-group">
          <label for="title">Título da notícia:</label>
          <input type="text" class="form-control" placeholder="Título" id="add-title" value="${title}">
        </div>
        <div class="form-group">
          <label for="subtitle">Subtítulo da notícia:</label>
          <input type="text" class="form-control" placeholder="Subtítulo" id="add-subtitle" value="${subtitle}">
        </div>
        <div>
          <label for="content">Conteúdo  da notícia:</label>
        </div>
          <textarea rows="5" cols="137" name="comment" id="add-content" placeholder="Conteúdo">${content}</textarea>
        <div>
          <button class="btn btn-primary button-edit-news">Editar</button>
        </div>
      </form>
      `)

  for (i in categories) {
    $("#categories").append(`
          <option id="${categories[i].id}">${categories[i].nome}</option>
        `)
  }
})

$(document).on('click', '.button-edit-news', function (event) {
  event.preventDefault()

  let url = $('#form-eddit-news').attr('action')
  let method = $('#form-eddit-news').attr('method')
  let id = $('.flagIdEddit').attr('id')

  let edditNew = {
    id,
    "titulo": $("#add-title").val(),
    "subtitulo": $("#add-subtitle").val(),
    "conteudo": $("#add-content").val(),
    "idCategoria": $("#categories option:selected").attr('id')
  }

  $.ajax({
    url,
    type: method,
    dataType: 'JSON',
    data: edditNew,
    success: () => toastSucess('Notícia Editada.'),
    error: () => toastError('Erro na comunicação.')
  })

  $("main").empty()
})

$(document).on('click', '#delete-news', function () {
  let idDeleteNews = $(this).parent().attr('id')

  $.ajax({
    url: 'https://tiagoifsp.ddns.net/noticias/noticias/deletar.php',
    type: 'GET',
    dataType: 'JSON',
    data: {
      "id": idDeleteNews
    }
  })

  toastSucess('Notícia Deletada.')

  $("main").empty()
})


$.ajax({
  url: 'https://tiagoifsp.ddns.net/noticias/categorias/listar.php',
  type: 'GET',
  dataType: 'JSON',
  success: setCategories
})