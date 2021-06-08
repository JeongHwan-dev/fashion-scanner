import React from 'react';
import 'components/lookbookComponents/css/MemberInfo.css';
import { useTranslation } from 'react-i18next';

const MemberInfo = ({ memberId }) => {
  // jennie:1, rose:2, jisoo:3, lisa:4
  const { t } = useTranslation('memberInfo');

  return (
    <>
      <section className="memberinfo">
        <div className="memberinfo__inner">
          <div className="memberinfo__img">
            {memberId === 1 && <img src="/images/lookbooks/lookbook_jennie_main.png" alt="JENNIE" />}
            {memberId === 2 && <img src="/images/lookbooks/lookbook_rose_main.png" alt="ROSE" />}
            {memberId === 3 && <img src="/images/lookbooks/lookbook_jisoo_main.png" alt="JISOO" />}
            {memberId === 4 && <img src="/images/lookbooks/lookbook_lisa_main.png" alt="LISA" />}
          </div>
          <div className="memberinfo__dsc">
            {memberId === 1 && (
              <>
                <h2>JENNIE</h2>
                <p>
                  {t('jennie_title')} <br />
                  {t('jennie_desc1')} <br />
                  {t('jennie_desc2')}
                </p>
              </>
            )}
            {memberId === 2 && (
              <>
                <h2>ROSE</h2>
                <p>
                  {t('rose_title')} <br />
                  {t('rose_desc1')} <br />
                  {t('rose_desc2')}
                </p>
              </>
            )}
            {memberId === 3 && (
              <>
                <h2>JISOO</h2>
                <p>
                  {t('jisoo_title')} <br />
                  {t('jisoo_desc1')}<br /> 
                  {t('jisoo_desc2')}
                </p>
              </>
            )}
            {memberId === 4 && (
              <>
                <h2>LISA</h2>
                <p>
                  {t('lisa_title')}<br />
                  {t('lisa_desc1')}<br />
                  {t('lisa_desc2')}
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberInfo;
