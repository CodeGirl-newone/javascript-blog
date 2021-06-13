'use strict';

function titleClickHandler(event){
  event.preventDefault();  //Adres strony nie powinien się już zmieniać przy klikaniu w linki w lewej kolumnie
  const clickedElement = this;
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }   

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', {clickedElement}, 'aktywny');
  
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article.post');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log('targetArticle:', {targetArticle}, 'aktywny');
}


 
//modul 5.4 Generowanie listy tytulow
 
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  

function generateTitleLinks(){
/* remove contents of titleList */
  const titleList =  document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';  
  for (let article of articles){
  /* get the article id */
    const articleId = article.getAttribute('id');
    console.log('Id artykułu to: ' + articleId);

    /* find the title element */
  
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into titleList */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
  console.log(html);
  
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();


// moduł 6 Generowanie listy tagów
const optArticleTagsSelector = '.post-tags .list';

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* START LOOP: for every article: */
  for (let article of articles){
    /* find tags wrapper */
    const wrapperTags = article.querySelectorAll(optArticleTagsSelector);
    console.log(wrapperTags);
    /* make html variable with empty string */
    let html = " ";
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray){
      /* generate HTML of the link */
      
      /* add generated code to html variable */
    console.log(tag);
    }
    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */
  


  }
  /* END LOOP: for every article: */
}

generateTags();