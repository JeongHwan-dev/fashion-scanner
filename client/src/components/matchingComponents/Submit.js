import React from 'react';
import 'components/matchingComponents/css/Submit.css';

const Submit = () => {
  return (
    <>
      <section className="submit">
        <div className="submit__inner">
          <button onClick={onSubmit}>결과보기</button>
        </div>
      </section>
    </>
  );
};

export default Submit;
