import React, { Component } from 'react';
import {withProvider} from "./context"

class News extends Component {
    componentDidMount(){
        this.props.getNews()
    }
    
    render() {
        const mappedNews = this.props.news.articles && this.props.news.articles.map(article => {
            const emptyArray = []
            const split = article.content.split(" ")
            emptyArray.push(split)
            split.splice(-2)
            const rejoin = split.join(" ")
            console.log(rejoin)
           return (
                <div>
                    <h2 style={{color: "lime"}}>{article.title}</h2>
                    <p>By: {article.author}</p>
                    <img style={{width: "45%"}}alt="" src={article.urlToImage}/>
                    <p>{rejoin}<a target="_blank" href={article.url} style={{color: "lime"}}>Read More</a></p>
                    <hr style={{marginBottom: "none"}}></hr>
                 </div>
           )
        })
        return (
            <div className="CoinInfo" style={{textAlign: "center"}}>
                {mappedNews}
            </div>
        );
    }
}

export default withProvider(News)
