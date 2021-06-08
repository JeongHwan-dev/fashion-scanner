import React from 'react';
import 'components/faqComponents/css/Questions.css';
import { useTranslation } from 'react-i18next';

const Questions = ({ blackpink, setBlackpink }) => {
  const { t } = useTranslation('questions');

  return (
    <section className="questions" id="section__questions">
      <div className="questions__inner">
        <h2>{t('faq')}</h2>
        <div className="questions__tab">
          <div
            className={`questions__tab__content ${!blackpink ? 'active' : ''}`}
            onClick={() => setBlackpink(false)}
          >
            <h3>FASHION SCANNER</h3>
          </div>
          <div
            className={`questions__tab__content ${blackpink ? 'active' : ''}`}
            onClick={() => setBlackpink(true)}
          >
            <h3>BLACKPINK</h3>
          </div>
        </div>
        {!blackpink ? (
          <>
            <div className="questions__question">
              <p>{t('question1')}</p>
              <p>{t('answer1')}</p>
            </div>
            <div className="questions__question">
              <p>{t('question2')}</p>
              <p>{t('answer2')}</p>
            </div>
            <div className="questions__question">
              <p>{t('question3')}</p>
              <p>{t('answer3')}</p>
            </div>
            <div className="questions__question">
              <p>{t('question4')}</p>
              <p>{t('answer4')}</p>
            </div>
            <div className="questions__question">
              <p>{t('question5')}</p>
              <p>{t('answer5')}</p>
            </div>
          </>
        ) : (
          <>
            <div className="questions__question">
              <p>{t('question6')}</p>
              <p>{t('answer6')}</p>
            </div>
            <div className="questions__question">
              <p>{t('question7')}</p>
              <p>{t('answer7')}</p>
            </div>
            <div className="questions__question">
              <p>{t('question8')}</p>
              <p>{t('answer8')}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Questions;
