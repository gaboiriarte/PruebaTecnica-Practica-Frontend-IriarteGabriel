export const getNews = async(technology,page) =>{

      
    
    const urlAngular = `https://hn.algolia.com/api/v1/search_by_date?query=${technology}&page=${page}`;
    const respAngular = await fetch(urlAngular);
    const {hits} = await respAngular.json();

    const notices = hits.filter(notice =>(!!notice.story_title && !!notice.author && !!notice.created_at && !!notice.story_url))
    return notices;

}