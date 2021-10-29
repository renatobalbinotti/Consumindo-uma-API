function getRequestKanyeAPI() {
    $['getJSON']('https://api.kanye.rest', (response) => {
        const h2ResponseKanye = document.getElementById('h2-responseKanye');
        h2ResponseKanye.append(document.createTextNode(response['quote']));
    })
}
