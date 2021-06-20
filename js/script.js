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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';
  

function generateTitleLinks(customSelector = ''){
/* remove contents of titleList */
  const titleList =  document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log({customSelector});
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


// moduł 6. Generowanie listy tagów
function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* START LOOP: for every article: */
  for (let article of articles){
    /* find tags wrapper */
    const wrapperTags = article.querySelector(optArticleTagsSelector);
    console.log(wrapperTags);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log({articleTagsArray});
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray){
      /* generate HTML of the link */
      const linkHTMLtag = '<li><a href="#tag-'+ tag +'">'+ tag +'</a></li> ';
      console.log(linkHTMLtag);
      /* add generated code to html variable */
      html = html + linkHTMLtag;
      /* END LOOP: for each tag */
      console.log(html);
    }
    /* insert HTML of all the links into the tags wrapper */
    wrapperTags.innerHTML = html;    
  }
}
generateTags();


//moduł 6. Dodajemy akcję po kliknięciu w tag
function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault(); 
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('Tag został kliknięty');
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href + ' został kliknięty');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag + ' odfiltrowany');
  /* find all tag links with class active */
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(tagLinks);
  /* START LOOP: for each active tag link */
  for (let tagLink of tagLinks){
    /* remove class active */
    tagLink.classList.remove('active');
    /* END LOOP: for each active tag link */
    console.log('Usunięta klasa activ');
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinksHref = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let tagLinkHref of tagLinksHref){
    /* add class active */
    tagLinkHref.classList.add('active');
    /* END LOOP: for each found tag link */
    console.log(tagLinkHref);
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}


function addClickListenersToTags(){
/* find all links to tags */
  const links = document.querySelectorAll('a[href^="#tag-"]');
  console.log(links);
  /* START LOOP: for each link */
  for(let link of links){
  /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}
addClickListenersToTags();



// moduł 6. Dodajemy autorów
const optArticleAuthorSelector = '.post-author';

//Generowanie listy autorów
function generateAuthors(){
  //find all articles
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  //LOOP: for every article find author (for-of)
  for (let article of articles){
    /* find authors wrapper */
    const wrapperAuthors =  article.querySelector(optArticleAuthorSelector);
    console.log(wrapperAuthors);
    /* make html variable with empty string */
    let html = '';
    /* get authors from data-author attribute */
    const articleAuthors = article.getAttribute('data-author');
    console.log(articleAuthors);
    /* LOOP: for each author generate HTML of the link */
    //for (articleAuthor of articleAuthors){
      const linkHTMLauthor = ' by: <a href="#author-' + articleAuthors + '">' + articleAuthors + ' </a>';
      console.log(linkHTMLauthor);
      /* add generated code to html variable */
      html = html + linkHTMLauthor;
      console.log(html);
    //}
  /* insert HTML of all the links into the tags wrapper */
  wrapperAuthors.innerHTML = html;
  }
}
generateAuthors();







// //Powiązanie kliknięcia z autorem
// function addClickListenersToAuthors(){

// }
// addClickListenersToAuthors();  //'[data-tags   =  "' + tag + '"]'

// function authorClickHandler(event){

//   generateTitleLinks();
// }