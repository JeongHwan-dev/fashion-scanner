import React from 'react';
import 'components/faqComponents/css/Questions.css';
import { useTranslation } from 'react-i18next';

const Questions = ({ blackpink, setBlackpink }) => {
  const { t } = useTranslation('questions');

  return (
    <section className="questions" id="section__questions">
      <div className="questions__inner">
        <h2>자주 묻는 질문</h2>
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
              <p>{t('Question1')}</p>
              <p>{t('Answer1')}</p>
            </div>
            <div className="questions__question">
              <p>{t('Question2')}</p>
              <p>{t('Answer2')}</p>
            </div>
            <div className="questions__question">
              <p>{t('Question3')}</p>
              <p>{t('Answer3')}</p>
            </div>
            <div className="questions__question">
              <p>{t('Question4')}</p>
              <p>{t('Answer4')}</p>
            </div>
            <div className="questions__question">
              <p>{t('Question5')}</p>
              <p>{t('Answer5')}</p>
            </div>
          </>
        ) : (
          <>
            <div className="questions__question">
              <p>{t('Question6')}</p>
              <p>{t('Answer6')}</p>
            </div>
            <div className="questions__question">
              <p>{t('Question7')}</p>
              <p>{t('Answer7')}</p>
            </div>
            <div className="questions__question">
              <p>{t('Question8')}</p>
              <p>{t('Answer8')}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Questions;
