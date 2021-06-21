## 1. 웹 서비스 소개

+ 프로젝트 주제 : AI X FASHION X K-POP STAR 총 3가지 키워드의 집합. 패션업계에서 유명한 케이팝 스타를 선정한 뒤 AI 이미지처리 기능을 활용해 '해당인물이 착용한 의류에 관한 정보'와 '비슷한 의류의 판매처'를 찾아주는 서비스. 첫번째 버전은 케이팝 스타중 가장 패션계에서 영향력이 있다고 평가되는 '블랙핑크'로 선정함.

+ 타겟층 : 패션 트렌드에 민감한 20/30 대 여성, 블랙핑크 국내외 팬들.

+ 문제 정의 : 케이팝스타가 착용한 패션은 대중으로부터의 워너비 현상을 만들어내는 주요한 요소이나 현재까지 그들과 비슷하게 옷을 입기위해서는 사람이 일일이 검색을 해야함.
 
+ 가설 설정 방법 : 시대의 패션 아이콘으로 평가되는 '블랙핑크'의 패션을 AI를 활용해 의류 카테고리를 분류하고 비슷한 의류를 추천함. 더 나아가 판매 링크까지 연결하는 서비스를 제공하여 타겟층이 블랙핑크가 착용한 의류와 비슷한 의류를 구매할 수 있도록 함. 또한, 워너비 현상을 이용해 본인의 패션 스타일과 일치하는 블랙핑크 멤버를 출력함으로 사이트 이용 흥미도를 높임.

+ 기대효과 : 타겟층의 트래픽을 유도해서 광고 수익을 창출함. 더 나아가 패션관련 케이팝스타마다 존재하는 웹서비스로서의 역할을 하게 됨.

## 2. 스토리보드
[패션스캐너_스토리보드ver1.3.pdf](https://kdt-gitlab.elice.io/001-part4-aifashionimage/team3/project-team3/-/blob/sprint/docs/%E1%84%91%E1%85%A2%E1%84%89%E1%85%A7%E1%86%AB%E1%84%89%E1%85%B3%E1%84%8F%E1%85%A2%E1%84%82%E1%85%A5_%E1%84%89%E1%85%B3%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5%E1%84%87%E1%85%A9%E1%84%83%E1%85%B3ver1.3.pdf)

## 3. 프로젝트 구성
1. 필요한 데이터셋
+ DeepFashion 데이터
+ 아마존(US) 크롤링 데이터

2. 기술 스택 및 라이브러리

    | 분류 | Tools | 목적 |
    | ------ | ------ | ------ |
    | Server | Ngnix | 웹 서버 |
    | Server | Gunicorn | WSGI |
    |Server | Django | 웹 애플리케이션(프레임워크) |
    |Server | PostgreSQL | DB |
    |Server | Pytorch | 머신러닝 모델 구동 |
    |Server | Docker | 서버 배포 및 운영 제어|
    |Client | React | 웹페이지 제작 |

<p align="left">
 <a href="https://www.w3.org/html/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/> 
 </a> 
 <a href="https://www.w3schools.com/css/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/> 
 </a>
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/> 
 </a>
 <a href="https://reactjs.org/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/> 
 </a>
 <a href="https://www.python.org" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="60" height="60"/> 
 </a>
 <a href="https://www.djangoproject.com/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg" alt="django" width="60" height="60"/> 
 </a>
 <a href="https://www.postgresql.org" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="60" height="60"/> 
 </a>
 <a href="https://pytorch.org/" target="_blank"> 
  <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="pytorch" width="60" height="60"/> 
 </a> 
 <a href="https://www.docker.com/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="60" height="60"/> 
 </a> 
</p>


## 4. 구현 기능
1. **필수 구현**
+ 1순위 : 메인페이지 (우선구현 페이지: 1, 2, 3, 5, 6, 8 / 추가구현 : 4, 7)
+ 2순위 : 'LOOKBOOK' 페이지
+ 3순위 : '나는 어떤 멤버 ?' 페이지
2. **선택 구현**
+ 1순위 : KOR/ENG 기능 구현

## 5. 와이어프레임 

https://www.figma.com/file/UpQVmuk7wFVKmdUTBRpiTZ/%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC-LookBook?node-id=0%3A1



## 6. 세부 일정 
(상세 개발일정은 구글 시트 참고)
+ 1주차 : 기획안 확정, 웹사이트 프로토 타입 완성, 인공지능 환경 셋업, 백엔드 API 실습
+ 2주차 : 각 파트 필수구현 1,2순위 개발 시작
+ 3주차 : 각 파트 필수구현 3순위 개발 시작
+ 4주차 : 필수 구현 기능 점검 및 API 연결
+ 5주차 : 각 파트 선택구현 개발 시작

## 7. 역할

| 이름 | 담당 업무 |
| ------ | ------ |
| 이보람 | 백엔드 |
| 김수연 | 프론트엔드 |
| 박정환 | 프론트엔드 |
| 이찬미 | 인공지능 |
| 차시현 | 기획, 인공지능 |

