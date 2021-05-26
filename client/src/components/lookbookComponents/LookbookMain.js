import React, { useRef, useState } from 'react';

const LookbookMain = () => {
  const lookbookMain = {
    backgroundColor: 'white',
    height: '1200px',
  };

  const arrows = {
    position: 'relative',
    top: '500px',
    justifyContent: 'space-between',
    display: 'flex',
  };

  const leftArrow = {
    width: '50px',
    transform: 'rotate(180deg)',
    position: 'relative',
    marginLeft: '40px',
  };

  const rightArrow = {
    width: '50px',
    position: 'relative',
    marginRight: '40px',
    zIndex: '1',
  };

  const numberingWrap = {
    position: 'absolute',
    top: '1350px',
    left: '47%',
  };

  const numbering = {
    display: 'block',
    textAlign: 'center',
    color: '#666666',
  };

  const backgroundBox = {
    width: '560px',
    height: '470px',
    backgroundColor: '#19181E',
    position: 'absolute',
    top: '500px',
    left: '400px',
  };

  const styleBox = {
    position: 'absolute',
    top: '600px',
    left: '150px',
    display: 'inline-block',
  };

  const infoBox = {
    width: '600px',
    height: '600px',
    backgroundColor: '#E4E4E4',
    position: 'absolute',
    top: '700px',
    left: '700px',
  };

  const infoTitle = {
    color: '#5F5F5F',
    fontSize: '20px',
    lineHeight: '150%',
    fontWeight: 'bold',
  };

  const infoContent = {
    color: '#7E7E7E',
    fontSize: '16px',
    lineHeight: '150%',
  };

  const recommImage = {
    width: '180px',
    height: '270px',
    display: 'inline',
    verticalAlign: 'top',
    margin: '5px',
    objectFit: 'cover',
  };

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '900px',
  };

  const style = {
    width: '100px',
    height: '100px',
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '5px',
    objectFit: 'cover',
  };

  const jisooApi = [
    {
      id: '0',
      lookbook_img: '/images/lookbook_jisoo_style0.png',
      Category: '원피스',
      Color: '#707073',
      Attributes: ['반팔', '하프넥', '스트라이프패턴'],
    },
    {
      id: '1',
      lookbook_img: '/images/lookbook_jisoo_style1.png',
      Category: '반팔 티셔츠',
      Color: '#bc323c',
      Attributes: ['반팔', '크롭', '무지티'],
    },
    {
      id: '2',
      lookbook_img: '/images/lookbook_jisoo_style2.png',
      Category: '정장자켓',
      Color: '#575c5f',
      Attributes: ['긴팔', '회색', '잔무늬'],
    },
    {
      id: '3',
      lookbook_img: '/images/lookbook_jisoo_style3.png',
      Category: '반팔 티셔츠',
      Color: '#f8f9ef',
      Attributes: ['반팔', '무지티', '라운드넥'],
    },
    {
      id: '4',
      lookbook_img: '/images/lookbook_jisoo_style4.png',
      Category: '가디건',
      Color: '#eec090',
      Attributes: ['긴팔', '패턴 없음', '카라 있음'],
    },
    {
      id: '5',
      lookbook_img: '/images/lookbook_jisoo_style5.png',
      Category: '셔츠',
      Color: '#3070a2',
      Attributes: ['긴팔', '패턴 없음', '청셔츠'],
    },
    {
      id: '6',
      lookbook_img: '/images/lookbook_jisoo_style6.png',
      Category: '원피스',
      Color: '#cd3842',
      Attributes: ['긴팔', '오프 숄더', '홀터넥'],
    },
    {
      id: '7',
      lookbook_img: '/images/lookbook_jisoo_style7.png',
      Category: '원피스',
      Color: '#eec86f',
      Attributes: ['반팔', '스퀘어넥', '허리장식 있음'],
    },
    {
      id: '8',
      lookbook_img: '/images/lookbook_jisoo_style8.png',
      Category: '원피스',
      Color: '#337062',
      Attributes: ['긴팔', '니트원피스', '뷔스티에 형식'],
    },
    {
      id: '9',
      lookbook_img: '/images/lookbook_jisoo_style9.png',
      Category: '청자켓',
      Color: '#616b81',
      Attributes: ['긴팔', '연청', '숏자켓'],
    },
  ];

  // 객체로 한번에 묶을 수 있는 방법 찾아보기.
  const imageRef = useRef(null);
  const thumRef = useRef(null);
  const typeRef = useRef(null);
  const colorRef = useRef(null);
  const featruesRef = useRef(null);
  const countRef = useRef(null);

  const ids = [];
  const urls = [];
  const categories = [];
  const colors = [];
  const attributes = [];
  jisooApi.map(({ id, lookbook_img, Color, Category, Attributes }) => {
    id = parseInt(id);
    return (
      ids.push(id),
      urls.push(lookbook_img),
      categories.push(Category),
      colors.push(Color),
      attributes.push(Attributes)
    );
  });

  const [id, setId] = useState(0);
  const [url, setUrl] = useState('/images/lookbook_jisoo_style0.png');
  const [category, setCategory] = useState('원피스');
  const [color, setColor] = useState('#707073');
  const [features, setFeatures] = useState(['반팔', '하프넥', '스트라이프패턴']);

  const onNextBtn = () => {
    if (id < 9){
      setId(id + 1);
      setUrl(jisooApi[id + 1].lookbook_img);
      setCategory(jisooApi[id + 1].Category);
      setColor(jisooApi[id + 1].Color);
      setFeatures(jisooApi[id + 1].Attributes);
    } else {
      setId(0);
    }
  }

  return (
    <>
      <section className="lookbook_main" style={lookbookMain}>
        <div className="lookbook_bg">
          <div className="arrows" style={arrows}>
            <button
              type="button"
              style={{ backgroundColor: 'white', border: '0', cursor: 'pointer' }}
            >
              <img
                src={require('images/lookbook_arrow.png').default}
                style={leftArrow}
                alt="left_arrow"
              />
            </button>
            <button
              type="button"
              style={{ backgroundColor: 'white', border: '0', cursor: 'pointer' }}
              onClick={onNextBtn}
            >
              <img
                src={require('images/lookbook_arrow.png').default}
                style={rightArrow}
                alt="right_arrow"
              />
            </button>
          </div>

          <div className="lookbook_slide">
            <div className="numbering_wrap" style={numberingWrap}>
              <p style={numbering} ref={countRef}>
                {/* {' '}
                1 of 10{' '} */}
                id: {id}, {url}, {category}, {color}, {features}
              </p>
            </div>
            <div className="behind_box" style={backgroundBox}></div>

            <div>
              <div className="stylebox" style={styleBox}>
                {/* <img src={jisooStyle10} style={{ width: '500px' }} alt="lookbook" /> */}
                <img
                  // src={lookbookMainImg}
                  src="/images/lookbook_jisoo_style0.png"
                  style={{ width: '500px' }}
                  alt="lookbook"
                  id="bigimg"
                  ref={imageRef}
                />
              </div>
              <div className="styleinfo" style={infoBox}>
                <div className="style_txt_wrap" style={{ padding: '50px 0 40px 30px' }}>
                  <h6 style={infoTitle}>TYPE</h6>
                  <p style={infoContent} ref={typeRef}>
                    원피스
                  </p>
                  <h6 style={infoTitle}>COLOR</h6>
                  <p style={infoContent} ref={colorRef}>
                    19181E
                  </p>
                  <h6 style={infoTitle}>FEATURES</h6>
                  <p style={infoContent} ref={featruesRef}>
                    반팔, 하프넥, 스트라이프 패턴
                  </p>
                </div>
                <div className="recomm" style={{ textAlign: 'center' }}>
                  <img
                    src={require('images/lookbook_recomm01.jpeg').default}
                    style={recommImage}
                    alt="recommended_style"
                  />
                  <img
                    src={require('images/lookbook_recomm02.jpeg').default}
                    style={recommImage}
                    alt="recommended_style"
                  />
                  <img
                    src={require('images/lookbook_recomm03.jpeg').default}
                    style={recommImage}
                    alt="recommended_style"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul style={styles}>
          {jisooApi.map(({ id, lookbook_img, Category, Color, Attributes }) => {
            // console.log(id) // 0 , 1, 2, 3, ... 9
            let count = parseInt(id) + 1;
            // console.log(count); // 1, 2, 3, 4, ... 10
            const selectImage = (e) => {
              imageRef.current.src = e.target.src;
              typeRef.current.innerHTML = Category;
              colorRef.current.innerHTML = Color;
              featruesRef.current.innerHTML = Attributes;
              countRef.current.innerHTML = `${count} of 10`;
            };

            return (
              <li key={id}>
                <img
                  src={lookbook_img}
                  style={style}
                  id={id}
                  alt="lookbook"
                  ref={thumRef}
                  onClick={selectImage}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default LookbookMain;
