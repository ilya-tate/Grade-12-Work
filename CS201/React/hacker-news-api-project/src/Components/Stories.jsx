import React from 'react';
import { useAppContext } from '../util/context';

const Stories = () => {
  const { loading, hits, removeStory } = useAppContext();

  if (loading) {
    return(
      <div className="loading" />
    );
  }
  return (
    <div className="Stories">

      <section className="stories">
        { hits.map(story => {
          const {
            objectID: id,
            title,
            url,
            points,
            author,
            num_comments: numComments
          } = story;

          return (
            <article key={ id } className="story">
              <h4 className="title">{ title }</h4>
              <p className="info">
                { points } points by <span>{ author }</span> | { numComments } comments
              </p>
              <div>
                <a href={ url } className="read-link" target="_blank" rel="noopener noreferer">
                  Read More
                </a>
                <button
                  className="remove-btn"
                  onClick={ () => removeStory(id) }
                >
                  Remove
                </button>
              </div>
            </article>
          );
        }) }
      </section>
      
    </div>
  );
}

export default Stories;
