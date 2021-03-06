<div align="center">
  <br />
  <img src="./readme_assets/fs_banner.png" alt="FASHION SCANNER" />
  <br />
  <h1>패션 스캐너 (FASHION SCANNER)</h1>
  <a href="https://blackpink.fashion-scanner.site/">
    <img src="https://img.shields.io/badge/NGINX-Deactivate-ff7f00?&logo=nginx&logoColor=white" alt="NGINX" />
  </a>
  <br />
</div>

## 목차

1. [**웹 서비스 소개**](#1)
2. [**기술 스택**](#2)
3. [**주요 기능**](#3)
4. [**프로젝트 구성도**](#4)
5. [**데모 영상**](#5)
6. [**개발 팀 소개**](#6)
7. [**개발 기간 및 일정**](#7)
8. [**구글 애널리틱스 통계**](#8)
9. [**실행 방법**](#9)

<br />

<div id="1"></div>

## 💁 웹 서비스 소개

**AI X FASHION X K-POP STAR** 총 3가지 키워드의 집합.  
패션업계에서 유명한 케이팝 스타를 선정한 뒤 AI 이미지처리 기능을 활용해 `'해당인물이 착용한 의류에 관한 정보'`와 `'비슷한 의류의 판매처'`를 찾아주는 서비스.

> 첫 번째 버전은 케이팝 스타 중 가장 패션계에서 영향력이 있다고 평가되는 '블랙핑크'로 선정하였습니다.

<details>
  <summary>타겟층</summary>
  <div markdown="1">
    <ul>
      <li>패션 트렌드에 민감한 20/30 대 여성, 블랙핑크 국내외 팬들.</li>
    </ul>
  </div>
</details>

<details>
  <summary>문제 정의</summary>
  <div markdown="1">
    <ul>
      <li>케이팝스타가 착용한 패션은 대중으로부터의 워너비 현상을 만들어내는 주요한 요소이나 현재까지 그들과 비슷하게 옷을 입기위해서는 사람이 일일이 검색을 해야한다.</li>
    </ul>
  </div>
</details>

<details>
  <summary>가설 설정 방법</summary>
  <div markdown="1">
    <ul>
      <li>시대의 패션 아이콘으로 평가되는 '블랙핑크'의 패션을 AI를 활용해 의류 카테고리를 분류하고 비슷한 의류를 추천한다. 더 나아가 판매 링크까지 연결하는 서비스를 제공하여 타겟층이 블랙핑크가 착용한 의류와 비슷한 의류를 구매할 수 있도록 한다. 또한, 워너비 현상을 이용해 본인의 패션 스타일과 일치하는 블랙핑크 멤버를 출력함으로 사이트 이용 흥미도를 높일 수 있다.</li>
    </ul>
  </div>
</details>

<details>
  <summary>추가 기대 효과</summary>
  <div markdown="1">
    <ul>
      <li>타겟층의 트래픽을 유도해서 광고 수익을 창출할 수 있다. 더 나아가 패션관련 케이팝스타마다 존재하는 웹 서비스로서의 역할을 할 수 있다.</li>
    </ul>
  </div>
</details>

<br />

[**🔗 데모 영상 바로가기 Click !**](https://youtu.be/aNEavvA3kIk) 👈

> 새 창 열기 방법 : CTRL+click (on Windows and Linux) | CMD+click (on MacOS)

<br />

<div id="2"></div>

## 🛠 기술 스택

### **Front-end**

| <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" width="50px" height="50px" /> |
| :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|                                                             HTML5                                                              |                                                             CSS3                                                             |                                                         JavaScript(ES6)                                                         |                                                             React                                                              |

### **Back-end**

| <img src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/django-original.svg" alt="Django" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" width="50px" height="50px" /> |
| :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
|                                                         Python                                                          |                                                         Django                                                          |                                                                PostgreSQL                                                                |

### **AI**

| <img src="https://profilinator.rishav.dev/skills-assets/pytorch-icon.svg" alt="PyTorch" width="50px" height="50px" /> |
| :-------------------------------------------------------------------------------------------------------------------: |
|                                                        PyTorch                                                        |

### **DevOps**

| <img src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" alt="Docker" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/nginx-original.svg" alt="NGiNX" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/microsoft_azure-icon.svg" alt="Azure" width="50px" height="50px" /> |
| :------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
|                                                              Docker                                                              |                                                         NGiNX                                                         |                                                            Azure                                                            |

### **Data-set**

- DeepFashion 데이터
- 아마존(US) 크롤링 데이터

<br />

<div id="3"></div>

## 💡 주요 기능

|       기능        | <div align="center">내용</div>                                                               |
| :---------------: | :------------------------------------------------------------------------------------------- |
| 룩북 페이지 제공  | 룩북 페이지를 제공하여 멤버들이 사진에서 입고 있는 옷과 유사한 옷들을 제시하고 판매처를 연결 |
| 멤버 매칭 서비스  | 사용자의 스타일링 사진을 업로드 시 사용자의 패션과 유사한 패션 스타일을 가진 멤버를 매칭     |
|    요청 서비스    | 사용자가 운영진에게 추가를 원하는 이미지를 요청 보낼 수 있는 수 있는 기능                    |
| 한/영 페이지 제공 | 글로벌 사용자 유입을 위해 한영 페이지 모두 구현                                              |

> 패션 스캐너 웹 서비스는 **반응형 웹**을 구축하여 **모바일 환경에서도 최적의 서비스를 제공**하고 있습니다.

<br />

<div id="4"></div>

## 📂 프로젝트 구성도

| [🔗와이어프레임(Wireframe)](https://www.figma.com/file/UpQVmuk7wFVKmdUTBRpiTZ/%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC-LookBook?node-id=0%3A1) |
| :----------------------------------------------------------------------------------------------------------------------------------------: |
|                                 <img src="./readme_assets/wireframe.png" alt="Wireframe" width="1200px" />                                 |

|           [🔗스토리보드](./documents/fashion-scanner_storyboard.pdf)           |
| :----------------------------------------------------------------------------: |
| <img src="./readme_assets/storyboard1.png" alt="Storyboard1" width="1200px" /> |

|                              아키텍처(Architecture)                              |
| :------------------------------------------------------------------------------: |
| <img src="./readme_assets/architecture.png" alt="Architecture" width="1200px" /> |

|                      개체-관계 모델(ERD)                       |
| :------------------------------------------------------------: |
| <img src="./readme_assets/erd.png" alt="ERD" width="1200px" /> |

<br />

<div id="5"></div>

## 🖥 데모 영상

[**🔗 데모 영상 바로가기 Click !**](https://youtu.be/aNEavvA3kIk) 👈

> 새 창 열기 방법 : CTRL+click (on Windows and Linux) | CMD+click (on MacOS)

|                          메인 페이지                          |
| :-----------------------------------------------------------: |
| <img src="./readme_assets/main-page.gif" alt="메인 페이지" /> |

|                                 룩북 페이지                                  |
| :--------------------------------------------------------------------------: |
| <img src="./readme_assets/lookbook-jisoo-page.gif" alt="룩북 지수 페이지" /> |
| <img src="./readme_assets/lookbook-rose-page.gif" alt="룩북 로제 페이지" />  |

|                             매칭 페이지                             |
| :-----------------------------------------------------------------: |
| <img src="./readme_assets/matching-page1.gif" alt="매칭 페이지1" /> |
| <img src="./readme_assets/matching-page2.gif" alt="매칭 페이지2" /> |
| <img src="./readme_assets/matching-page3.gif" alt="매칭 페이지3" /> |
| <img src="./readme_assets/matching-page4.gif" alt="매칭 페이지4" /> |

|                         요청 서비스                         |
| :---------------------------------------------------------: |
| <img src="./readme_assets/request.gif" alt="요청 서비스" /> |

|                         FAQ 페이지                          |
| :---------------------------------------------------------: |
| <img src="./readme_assets/faq-page.gif" alt="FAQ 페이지" /> |

|                           조직문화 페이지                            |
| :------------------------------------------------------------------: |
| <img src="./readme_assets/devTeam-page.gif" alt="조직문화 페이지" /> |

|                         404 에러 페이지                          |
| :--------------------------------------------------------------: |
| <img src="./readme_assets/404-page.gif" alt="404 에러 페이지" /> |

|                   영문 메인 페이지 (영문 전환 기능)                    |
| :--------------------------------------------------------------------: |
| <img src="./readme_assets/eng-main-page.gif" alt="영문 메인 페이지" /> |

|                                    메인 페이지(모바일)                                     |                                      룩북 페이지(모바일)                                       |
| :----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
| <img src="./readme_assets/mobile-main-page.gif" alt="메인 페이지(모바일)" width="400px" /> | <img src="./readme_assets/mobile-lookbook-page.gif" alt="룩북 페이지(모바일)" width="400px" /> |

|                                      매칭 페이지(모바일)                                       |                                    FAQ 페이지(모바일)                                    |
| :--------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
| <img src="./readme_assets/mobile-matching-page.gif" alt="매칭 페이지(모바일)" width="400px" /> | <img src="./readme_assets/mobile-faq-page.gif" alt="FAQ 페이지(모바일)" width="400px" /> |

|                                      조직문화 페이지(모바일)                                      |
| :-----------------------------------------------------------------------------------------------: |
| <img src="./readme_assets/mobile-devTeam-page.gif" alt="조직문화 페이지(모바일)" width="400px" /> |

<br />

<div id="6"></div>

## 👪 개발 팀 소개

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Sarah-Cha">
        <img src="https://avatars.githubusercontent.com/u/83054347?v=4" alt="차시현 프로필" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/chanmi1127">
        <img src="https://avatars.githubusercontent.com/u/47763664?v=4" alt="차시현 프로필" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/JeongHwan-dev">
        <img src="https://avatars.githubusercontent.com/u/68452755?v=4" alt="박정환 프로필" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/alveloper">
        <img src="https://avatars.githubusercontent.com/u/73899253?v=4" alt="김수연 프로필" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/bky373">
        <img src="https://avatars.githubusercontent.com/u/49539592?v=4" alt="이보람 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/Sarah-Cha">
        차시현<br />(PM & AI)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/chanmi1127">
        이찬미<br />(AI)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/JeongHwan-dev">
        박정환<br />(Front-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/alveloper">
        김수연<br />(Front-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/bky373">
        이보람<br />(Back-end)
      </a>
    </td>
  </tr>
</table>

<br />

|  이름  |   역할    | <div align="center">개발 내용</div>                                                                                                                                                                                                              |
| :----: | :-------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 차시현 |  PM & AI  | - 로젝트 문서 작성<br />- 스토리보드 작성<br />- 아마존 쇼핑몰 데이터 크롤링<br />- 딥패션 데이터 활용한 모델 1, 모델 2 개발<br />- UX 작성                                                                                                      |
| 이찬미 |    AI     | - 아마존 쇼핑몰 데이터 크롤링<br />- 딥패션 데이터 활용한 모델 1, 모델 2 개발                                                                                                                                                                    |
| 박정환 | Front-end | - 메인 페이지, 조직 문화 페이지 개발<br />- 멤버 스타일링 매칭 서비스 개발<br />- 'BEM 방법론'을 적용하여 CSS 스타일링 적용<br />- 'Media Query'를 이용한 반응웹 웹 구현<br />- 검색 엔진 최적화(SEO) 작업(Meta Data 설정 및 시멘틱 마크업 사용) |
| 김수연 | Front-end | - 멤버별 룩북 페이지 개발(+반응형 웹)<br />- FAQ 페이지 개발(+반응형 웹)<br />- 로딩 페이지 개발(+반응형 웹)<br />- 404 페이지 개발(+반응형 웹)<br />- 한/영 전환 기능 개발                                                                      |
| 이보람 | Back-end  | - 룩북 API 설계<br />- 멤버 매칭 API 설계<br />- DB 설계<br />- 웹 서비스 배포                                                                                                                                                                   |

<br />

<div id="7"></div>

## 📅 개발 기간 및 일정

### 개발 기간

21.05.11 ~ 21.06.11 (5주)

### 개발 일정

| 주차  |                                               내용                                                |
| :---: | :-----------------------------------------------------------------------------------------------: |
| 1주차 |    기획안 확정<br />와이어프레임 및 스토리보드 작성<br />아키텍처 설계<br />인공지능 환경 셋업    |
| 2주차 |                 메인 페이지 개발<br />룩북 페이지 개발<br />인공지능 데이터 정제                  |
| 3주차 |            메인 페이지 개발<br />룩북 페이지 개발<br />매칭 페이지 개발<br />API 설계             |
| 4주차 | FAQ 페이지 개발<br />조직 문화 페이지 개발<br />반응형 웹 구현<br />404 페이지 개발<br />API 연결 |
| 5주차 |                      반응형 웹 구현<br />한/영 전환 구현<br />웹 서비스 배포                      |

<br />

<div id="8"></div>

## 📊 구글 애널리틱스 통계

구글 애널리틱스를 세팅하고 배포를 진행하여 6월 12일부터 10월 31일까지 약 5달간 서비스를 진행하였습니다.

> 서비스 기간: 2021년 6월 12일 ~ 2021년 10월 31일 (약 5달)

### 사용자 통계

<img src="./readme_assets/user_stats.png" alt="사용자 통계" />

> 하루 이용자 최고치 47명을 기록하였습니다.

<br />

### 국가 통계

<img src="./readme_assets/country_stats.png" alt="국가별 통계" />
<img src="./readme_assets/map_stats.png" alt="국가별 통계(세계지도)" />

> 많은 사용자는 아니지만 미국, 네덜란드, 영국, 인도네시아, 일본, 태국, 독일, 크로아티아, 인도 등에서 '패션 스캐너' 서비스를 이용해주셨습니다.

<br />

### 언어 통계

<img src="./readme_assets/language_stats.png" alt="언어별 통계" />

> 한국어로 가장 많이 이용되었고 두 번째로는 영어로 가장 많이 이용되었습니다.

<br />

### 운영체제 통계

<img src="./readme_assets/os_stats.png" alt="운영체제 통계" />

> 이용자의 절반 정도가 윈도우 OS로 이용하셨고 약 20% 정도가 안드로이드, 약 17%가 애플 컴퓨터 OS인 Mac OS, 약 16%가 아이폰의 iOS로 이용해주셨습니다.

<br />

### 브라우저 통계

<img src="./readme_assets/browser_stats.png" alt="브라우저 통계" />

> 이용자의 60%가 크롬 브라우저를 통해 이용해주셨고 이외에도 Android Webview, Safari, Edge, Samsung Interne 등으로 다양한 브라우저를 통해 이용해주셨습니다.

<br />

<div id="9"></div>

## 💻 실행 방법

### client 실행

1. **원격 저장소 복제**

```bash
$ git clone https://github.com/JeongHwan-dev/fashion-scanner.git
```

2. **프로젝트 폴더로 이동 후 client 폴더로 이동**

```bash
$ cd fashion-scanner
$ cd client
```

3. **필요한 node_modules 설치**

```bash
$ npm install
```

4. **리액트 앱 실행**

```bash
$ npm start
```
