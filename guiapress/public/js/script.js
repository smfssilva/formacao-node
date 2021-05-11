function confirmarDelecao(event, form) {
    event.preventDefault()
    const confirmar = confirm('Deseja realmente deletar o registro atual ?')
    if (confirmar) {
        form.submit()
    }

}
