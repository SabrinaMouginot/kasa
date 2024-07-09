import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../css/FicheLogement.css';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import Dropdown from '../components/Dropdown';

function FicheLogement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        const foundLogement = data.find(logement => logement.id === id);
        if (foundLogement) {
          setLogement(foundLogement);
        }else {
          navigate("/logement-non-trouve")
        }
      })
      .catch(error => console.error('Error fetching logement:', error));
  }, [id, navigate]);

  if (!logement) {
    return <p>Chargement...</p>;
  }

  const StarIcon = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z" fill={filled ? "#FF6060" : "#E3E3E3"} />
    </svg>
  );

  return (
    <div className="fiche-logement">
      <Carousel images={logement.pictures} />
      <div className="title-owner">
        <h1>{logement.title}</h1>
        <div className="owner-info desktop">
          <div className="owner-name">{logement.host.name}</div>
          <img src={logement.host.picture} alt={logement.host.name} className="owner-picture" />
        </div>
      </div>

      <h2>{logement.location}</h2>

      <div className="rating-tags">
        <div className="tags-list">
          {logement.tags.map(tag => (
            <Tag key={`${logement.id}-${tag}`} tag={tag} />
          ))}
        </div>

        <div className="title-owner">
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="star">
                <StarIcon filled={index < logement.rating} />
              </div>
            ))}
          </div>

          <div className="owner-info mobile">
            <span className="owner-name">{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} className="owner-picture" />
          </div>
        </div>
      </div>

      <div className="dropdowns">
        <Dropdown title="Description" content={logement.description} />
        <Dropdown title="Equipements" content={logement.equipments.join(', ')} />
      </div>
    </div>
  );
}

export default FicheLogement;
