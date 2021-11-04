import React from 'react';
import '../TagList.css';

const TagList = () => {
  return (
    <form className="allTags">
      <div className="cell">
        <label htmlFor="gastronomie" className="taglist">
          <input type="checkbox" id="gastronomie" className="taglist" />{' '}
          #Gastronomie
        </label>
      </div>

      <div className="cell">
        -
        <label htmlFor="arts" className="taglist">
          <input type="checkbox" name="arts" className="taglist" /> #Arts
        </label>
      </div>

      <div className="cell">
        <label htmlFor="culture" className="taglist">
          <input type="checkbox" name="culture" className="taglist" /> #Culture
        </label>
      </div>

      <div className="cell">
        <label htmlFor="musique" className="taglist">
          <input type="checkbox" name="musique" className="taglist" /> #Musique
        </label>
      </div>

      <div className="cell">
        <label htmlFor="culte" className="taglist">
          <input type="checkbox" name="culte" className="taglist" /> #Culte
        </label>
      </div>

      <div className="cell">
        <label htmlFor="histoire" className="taglist">
          <input type="checkbox" name="histoire" className="taglist" />{' '}
          #Histoire
        </label>
      </div>

      <div className="cell">
        <label htmlFor="architecture" className="taglist">
          <input type="checkbox" name="architecture" className="taglist" />{' '}
          #Architecture
        </label>
      </div>

      <div className="cell">
        <label htmlFor="sport" className="taglist">
          <input type="checkbox" name="sport" className="taglist" /> #Sport
        </label>
      </div>

      <div className="cell">
        <label htmlFor="nature" className="taglist">
          <input type="checkbox" name="nature" className="taglist" /> #Nature
        </label>
      </div>

      <div className="cell">
        <label htmlFor="sensationfortes" className="taglist">
          <input type="checkbox" name="sensationFortes" className="taglist" />{' '}
          #Sensations fortes
        </label>
      </div>

      <div className="cell">
        <label htmlFor="randonée" className="taglist">
          <input type="checkbox" name="randonée" className="taglist" />{' '}
          #Randonée
        </label>
      </div>
    </form>
  );
};

export default TagList;
