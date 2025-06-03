var xhr = new XMLHttpRequest();

var url = "./health_article.json";
xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');


    articles.forEach(function(article){
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;


        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Acheive:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way){
            var listitem = document.createElement('li');
            listitem.textContent = way;
            waysList.appendChild(listitem);
        })


        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit){
            var listitem = document.createElement('li');
            listitem.textContent = benefit;
            benefitsList,appendChild(listitem);

        })

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    
    })
}


xhr.send();
